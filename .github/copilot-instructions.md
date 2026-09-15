# Copilot instructions

## Plugin versioning

- Every plugin version must use strict Semantic Versioning (`MAJOR.MINOR.PATCH`) with no leading `v` and no additional build metadata.
- Keep the plugin version identical in all version-bearing project files: the plugin's `plugin.json`, its entry in `.github/plugin/marketplace.json`, and the corresponding README documentation.
- Start new plugins at `1.0.0` unless the user explicitly requests a pre-1.0 release.
- Increment `PATCH` for backward-compatible fixes or documentation-only changes, `MINOR` for backward-compatible features, and `MAJOR` for breaking changes.
- When changing a plugin, update every affected version location in the same change; do not leave manifests or documentation with stale versions.
- Do not change the marketplace version when changing an individual plugin unless the marketplace metadata itself has changed.
