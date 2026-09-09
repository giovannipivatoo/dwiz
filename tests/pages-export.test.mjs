import assert from "node:assert/strict";
import { readFile, stat, readdir } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);
const routes = ["", "work", "work/production", "about", "contact", "work/a-casa-di-nerissima-serpe", "work/super-9000-65-lanta"];

test("Pages exports content and resolves every local navigation and asset URL under /dwiz", async () => {
  for (const route of routes) {
    const html = await readFile(new URL(`${route ? route + "/" : ""}index.html`, output), "utf8");
    assert.match(html, /direction-cinema/);
    assert.match(html, /https:\/\/giovannipivatoo.github.io\/dwiz\/og.png/);
    assert.match(html, /DWIZ — Music for the moment before impact\./);
    assert.doesNotMatch(html, /<iframe/);
    for (const [, url] of html.matchAll(/(?:href|src)="(\/[^\"]*)"/g)) {
      assert.ok(url.startsWith("/dwiz/"), `${route}: ${url}`);
      const path = new URL(url, "https://example.com").pathname.slice("/dwiz/".length);
      const file = new URL(path, output);
      const info = await stat(file);
      if (info.isDirectory()) await stat(new URL("index.html", file));
    }
  }
  const production = await readFile(new URL("work/production/index.html", output), "utf8");
  const records = [...production.matchAll(/<article class="record-sleeve">(.*?)<\/article>/g)];
  assert.equal(records.length, 7);
  for (const [, record] of records) assert.match(record, />Co-production(?:<| )/);
  for (const name of ["Despedida", "ADDERALL", "LAST KRY", "Medicine &amp; Fentanyl", "Aw Yeah", "+TRAP", "Don’t Panic"]) assert.ok(production.includes(name));
  assert.ok(production.includes("5wjfeD4eDzX9QZUiGeKJBV"));
  assert.ok(production.includes("B-f0SSfZKzs"));
});

test("legacy URLs redirect without a server or JavaScript", async () => {
  for (const [from, to] of [["placement-one", "a-casa-di-nerissima-serpe"], ["placement-two", "super-9000-65-lanta"]]) {
    const html = await readFile(new URL(`work/${from}/index.html`, output), "utf8");
    assert.ok(html.includes(`http-equiv="refresh" content="0;url=/dwiz/work/${to}/"`));
  }
});

test("fonts, sitemap and robots use the published location", async () => {
  const cssDir = new URL("_next/static/css/", output);
  for (const file of await readdir(cssDir)) {
    const css = await readFile(new URL(file, cssDir), "utf8");
    for (const [, url] of css.matchAll(/url\(["']?(\/[^)"']+)/g)) {
      assert.ok(url.startsWith("/dwiz/"), url);
      await stat(new URL(url.slice("/dwiz/".length), output));
    }
  }
  const sitemap = await readFile(new URL("sitemap.xml", output), "utf8");
  for (const route of routes) assert.ok(sitemap.includes(`https://giovannipivatoo.github.io/dwiz${route ? "/" + route : ""}`));
  const robots = await readFile(new URL("robots.txt", output), "utf8");
  assert.ok(robots.includes("https://giovannipivatoo.github.io/dwiz/sitemap.xml"));
});
