## 2.0.0 (2026-10-16)

### ⚠️  Breaking Changes

- Migrate to ESM-only. ([ffc7a37](https://github.com/RightCapitalHQ/frontend-libraries/commit/ffc7a37))

  This is a breaking change. The packages now ship ES modules only (`"type": "module"`) and no longer provide a CommonJS build. Imports are restricted to the package entry point via `exports`; deep imports such as `lib/*` are no longer supported.

  All packages are now compiled with `target: es2020` (previously `es6`).

### ❤️ Thank You

- Ech0xff @Ech0xff

## 1.0.0 (2026-07-10)

### ⚠️  Breaking Changes

- Rename storage-factory to @rightcapital/storage-factory-next ([6e1f2b2](https://github.com/RightCapitalHQ/frontend-libraries/commit/6e1f2b2))

### ❤️ Thank You

- Pink Champagne @PinkChampagne17
