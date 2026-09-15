---
name: revealjs-setup
description: Install or update the runtime dependencies (npm packages and Playwright's Chromium browser) required by the revealjs skill. Use this once after installing the revealjs plugin, and again any time the plugin is updated. Safe to run multiple times — it is idempotent and only installs what's missing.
---

# revealjs Setup

Installs the dependencies the `revealjs` skill needs to run its scripts (`create-presentation.js`, `check-overflow.js`, `check-charts.js`, `edit-html.js`) and to take slide screenshots with Decktape/Playwright.

This is a one-time setup step per environment. Run it:
- Once, right after installing the `revealjs` plugin
- Again whenever the plugin is updated (e.g. dependency versions bump)

It is idempotent: `npm install` and `playwright install` both skip already-installed packages/browsers, so re-running is always safe and fast if nothing changed.

## Usage

Run the setup script:

```bash
node <path-to-this-skill>/scripts/setup.js
```

**Finding the script path:** The script is at `scripts/setup.js` relative to where this SKILL.md file is located. Common locations:
- Repository skill: `.github/skills/revealjs-setup/scripts/setup.js`
- User skill: `~/.copilot/skills/revealjs-setup/scripts/setup.js`
- Installed plugin: `~/.copilot/installed-plugins/agent-foundry/revealjs/skills/revealjs-setup/scripts/setup.js`

This will:
1. Run `npm install` in the `revealjs` plugin directory (installs `cheerio`, `playwright`, `decktape`)
2. Run `npx playwright install --with-deps chromium` to download the Chromium browser used for screenshots and PDF export

After this completes, the `revealjs` skill's scripts are ready to use.
