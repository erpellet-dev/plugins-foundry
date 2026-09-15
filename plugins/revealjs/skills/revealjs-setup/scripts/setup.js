#!/usr/bin/env node
// Idempotent setup for the revealjs skill's runtime dependencies.
//
// Installs npm packages (cheerio, playwright, decktape) declared in the
// plugin's package.json, and the Chromium browser binary Playwright needs
// for screenshots/PDF export. Safe to run multiple times: npm and
// `playwright install` both skip work that's already done, so re-running
// after a plugin update just fills in anything new.

const { execFileSync } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");

// The plugin root is two levels up from this script:
// skills/revealjs-setup/scripts/setup.js -> plugins/revealjs
const pluginRoot = path.resolve(__dirname, "..", "..", "..");
const packageJsonPath = path.join(pluginRoot, "package.json");

function run(cmd, args) {
  console.log(`\n$ ${cmd} ${args.join(" ")}`);
  execFileSync(cmd, args, { cwd: pluginRoot, stdio: "inherit" });
}

if (!fs.existsSync(packageJsonPath)) {
  console.error(`Could not find package.json at ${packageJsonPath}`);
  console.error("Make sure this script is run from within the revealjs plugin directory structure.");
  process.exit(1);
}

console.log(`Installing revealjs plugin dependencies in ${pluginRoot} ...`);
run("npm", ["install", "--no-audit", "--no-fund", "--prefix", pluginRoot]);

console.log("\nInstalling Playwright's Chromium browser (used for screenshots/PDF export) ...");
run("npx", ["--prefix", pluginRoot, "playwright", "install", "--with-deps", "chromium"]);

console.log("\nrevealjs plugin setup complete. Re-run this skill any time after the plugin is updated.");
