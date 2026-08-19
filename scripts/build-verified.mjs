import { spawn } from "node:child_process";
import { access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const projectRoot = path.resolve(import.meta.dirname, "..");
const vinext = path.join(projectRoot, "node_modules", ".bin", "vinext");
const timeoutMs = parseDuration(process.env.SITES_BUILD_TIMEOUT ?? "3m");

try {
  await access(vinext);
} catch {
  console.error("vinext is unavailable. Run npm ci before building.");
  process.exit(69);
}

console.log("Running bounded vinext build...");
await run(vinext, ["build"], timeoutMs);
await run("bash", [path.join(projectRoot, "scripts", "validate-artifact.sh")]);

function run(command, args, limit) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: projectRoot,
      env: process.env,
      stdio: "inherit",
    });

    const timer = limit
      ? setTimeout(() => {
          child.kill("SIGTERM");
          reject(new Error(`Command exceeded ${limit}ms: ${command}`));
        }, limit)
      : null;

    child.on("error", (error) => {
      if (timer) clearTimeout(timer);
      reject(error);
    });
    child.on("exit", (code, signal) => {
      if (timer) clearTimeout(timer);
      if (code === 0) resolve();
      else reject(new Error(`${command} failed with ${signal ?? `exit code ${code}`}`));
    });
  });
}

function parseDuration(value) {
  const match = /^(\d+)(ms|s|m)?$/.exec(value.trim());
  if (!match) throw new Error(`Unsupported SITES_BUILD_TIMEOUT: ${value}`);
  const amount = Number(match[1]);
  const unit = match[2] ?? "ms";
  return amount * { ms: 1, s: 1_000, m: 60_000 }[unit];
}

