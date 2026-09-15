# Agent Foundry

A curated marketplace of practical GitHub Copilot agent plugins.

## Available plugins

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
