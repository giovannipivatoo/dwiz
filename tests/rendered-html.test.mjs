import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const ctx = {
  waitUntil() {},
  passThroughOnException() {},
};

async function get(path) {
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "localhost",
        "x-forwarded-proto": "http",
      },
      redirect: "manual",
    }),
    env,
    ctx,
  );
}

test("renders every public HTML route", async () => {
  const routes = [
    "/",
    "/work",
    "/work/production",
    "/about",
    "/contact",
    "/work/a-casa-di-nerissima-serpe",
    "/work/super-9000-65-lanta",
  ];

  for (const route of routes) {
    const response = await get(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  }
});
test("renders verified identity and credit copy without prototype content", async () => {
  const home = await (await get("/")).text();
  const work = await (await get("/work")).text();

  assert.match(home, /DWIZ/);
  assert.match(work, /A casa di Nerissima Serpe/);
  assert.match(work, /Super 9000/);
  assert.match(work, /Music contribution/i);
  assert.doesNotMatch(`${home}${work}`, /ARTIST NAME|Placement 00|codex-preview|CONCEPT PROTOTYPE/i);
});

test("keeps the selected design throughout every page and defaults unknown designs", async () => {
  const routes = ["/", "/work", "/about", "/contact", "/work/a-casa-di-nerissima-serpe", "/work/super-9000-65-lanta"];
  for (const direction of ["cinema", "editorial", "studio"]) {
    for (const route of routes) {
      const response = await get(route + "?v=" + direction);
      assert.equal(response.status, 200, route + " " + direction);
      const html = await response.text();
      assert.ok(html.includes("direction-" + direction));
      assert.ok(html.includes('href="/work?v=' + direction + '"'));
      assert.ok(html.includes('href="/about?v=' + direction + '"'));
      assert.ok(html.includes('href="/contact?v=' + direction + '"'));
    }
  }
  const fallback = await (await get("/?v=unknown")).text();
  assert.ok(fallback.includes("direction-cinema"));
});

test("renders the site-specific social preview metadata", async () => {
  const home = await (await get("/")).text();

  assert.match(home, /summary_large_image/);
  assert.match(home, /http:\/\/localhost\/og\.png/);
  assert.match(home, /DWIZ — Music for the moment before impact\./);
});

test("offers the artist-selected releases in all three Production layouts", async () => {
  for (const layout of ["sleeves", "index", "spotlight"]) {
    const response = await get("/work/production?layout=" + layout);
    assert.equal(response.status, 200);
    const html = await response.text();
    for (const title of ["Despedida", "ADDERALL", "LAST KRY", "Medicine &amp; Fentanyl", "Aw Yeah", "+TRAP", "Don’t Panic"]) {
      assert.ok(html.includes(title), title + " in " + layout);
    }
    assert.match(html, /7<!-- --> selected releases/);
    assert.ok(html.includes('href="/work?layout=' + layout + '"'));
    assert.ok(html.includes("5wjfeD4eDzX9QZUiGeKJBV"));
    // Spotlight renders only the selected release's listening URL.
    if (layout !== "spotlight") assert.ok(html.includes("B-f0SSfZKzs"));
    else assert.ok(html.includes('aria-label="Feature +TRAP by TIARA'));
    assert.doesNotMatch(html, /TRAP KARTEL UNDERGROUND|40 MOTIVI|cuore bustdown|Top 10|most streamed/);
  }
  const fallback = await (await get("/work/production?layout=unknown")).text();
  assert.ok(fallback.includes("production-page layout-sleeves"));
});

test("does not load the YouTube iframe before user interaction", async () => {
  const project = await (await get("/work/a-casa-di-nerissima-serpe")).text();
  assert.match(project, /Play A casa di Nerissima Serpe on YouTube/i);
  assert.doesNotMatch(project, /youtube-nocookie\.com\/embed/i);
});

test("redirects legacy project URLs", async () => {
  const redirects = [
    ["/work/placement-one", "/work/a-casa-di-nerissima-serpe"],
    ["/work/placement-two", "/work/super-9000-65-lanta"],
  ];

  for (const [from, to] of redirects) {
    const response = await get(from);
    assert.ok([307, 308].includes(response.status), from);
    assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, to);
  }
});

test("does not expose the prototype wireframes route", async () => {
  const response = await get("/wireframes");
  assert.equal(response.status, 404);
});
