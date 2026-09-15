# Agent Foundry

A curated marketplace of practical GitHub Copilot agent plugins.

Marketplace version: 1.0.0

## Current plugins

| Plugin | Version | Skills | MCP servers | Scripts | Reference docs | License |
| --- | --- | --- | --- | --- | --- | --- |
| revealjs | 1.1.0 | `revealjs` — build Reveal.js presentations (themes, layouts, animations, speaker notes)<br>`revealjs-setup` — idempotent one-time/on-update dependency installer | — | `create-presentation.js`, `edit-html.js`, `check-overflow.js`, `check-charts.js`, `setup.js` | `advanced-features.md`, `charts.md`, `base-styles.css` | MIT |

### revealjs

Create polished, professional Reveal.js presentations with themes, multi-column layouts, code highlighting, animations, speaker notes, and custom styling.

**Features:**
- Theme selection and color customization
- Multi-column layouts with flexible grids
- Code highlighting with Prism.js
- Animations and transitions
- Speaker notes support
- No build step required—just open HTML in browser

## Installation

### Add to Copilot CLI

```bash
copilot plugin marketplace add erpellet-dev/agent-foundry
copilot plugin marketplace browse agent-foundry
copilot plugin install revealjs@agent-foundry
```

Then install plugin dependencies:

```bash
npm install --prefix ~/.copilot/installed-plugins/agent-foundry/revealjs
```

### Use with Copilot App

Place the `plugins/revealjs` directory in `.github/skills/revealjs` or `~/.copilot/skills/revealjs` in your repository or locally.

**Installing dependencies (including for the GitHub Copilot coding agent):**

Plugin installation doesn't run any install hooks — nothing executes automatically when a skill is added to `.github/skills/`. Instead, the `revealjs` plugin ships a second skill, `revealjs-setup`, whose only job is to install the runtime dependencies (`cheerio`, `playwright`, `decktape`, and the Playwright Chromium browser).

Just ask Copilot to run it once after installing the plugin:

> "Run the revealjs-setup skill"

Run it again any time the plugin is updated. It's idempotent — `npm install` and `playwright install` both skip anything already installed, so re-running is always safe. This works the same way whether you're using Copilot CLI, the Copilot coding agent, or the Copilot app, since it's a normal skill invocation rather than a separate setup file to author.

Without running this setup skill at least once, scripts like `create-presentation.js` and `check-overflow.js` will fail with `Cannot find module` errors.


## Directory structure

```
.github/plugin/marketplace.json        # Marketplace definition
plugins/
  revealjs/
    plugin.json                        # Plugin definition
    skills/revealjs/                   # Skill implementation
      SKILL.md                         # Skill documentation
      scripts/                         # Helper scripts
      references/                      # Reference materials
```

## Contributing

New plugins are welcome! Each plugin should:
- Live in `plugins/<plugin-name>/`
- Include its own `plugin.json`
- Include a `skills/<plugin-name>/` directory with the skill implementation
- Document its purpose and usage in the marketplace manifest
