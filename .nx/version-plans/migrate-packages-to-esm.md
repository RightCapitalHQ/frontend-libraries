---
assert: major
color-helpers: major
date-helpers: major
exceptions: major
storage-factory-next: major
---

Migrate to ESM-only.

This is a breaking change. The packages now ship ES modules only (`"type": "module"`) and no longer provide a CommonJS build. Imports are restricted to the package entry point via `exports`; deep imports such as `lib/*` are no longer supported.

All packages are now compiled with `target: es2020` (previously `es6`).
