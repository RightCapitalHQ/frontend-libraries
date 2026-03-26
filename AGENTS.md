# AGENTS.md

This file provides guidance to AI coding agents working on this project.

## Project Overview

TypeScript monorepo managed with **pnpm workspaces**, containing reusable utility libraries:

| Package | Description |
|---------|-------------|
| `@rightcapital/exceptions` | Standard exception definitions |
| `@rightcapital/date-helpers` | Date formatting and parsing utilities |
| `@rightcapital/color-helpers` | Color science helpers |
| `@rightcapital/assertion-helpers` | Assertion utilities |

Packages live under `packages/` and are published to npm via automated CI.

## Setup

```sh
pnpm install        # Install all dependencies (pnpm is enforced)
```

- **Node**: >=18.16.1
- **Package manager**: pnpm 10.30.0 (enforced via `only-allow` preinstall script)
- Use `pnpm exec` or `pnpm dlx` instead of `npx`

## Commands

All commands can be run from anywhere in the workspace with the `-w` flag.

| Command | Description |
|---------|-------------|
| `pnpm -w build` | Clean and compile all packages |
| `pnpm -w test` | Build then run all tests with coverage |
| `pnpm -w lint` | Run ESLint and Prettier checks concurrently |
| `pnpm -w fix` | Auto-fix ESLint and Prettier issues |
| `pnpm -w commit` | Interactive Commitizen commit helper |
| `pnpm -w change` | Generate a Beachball change file |
| `pnpm -w check` | Validate Beachball change files exist |
| `pnpm -w docs` | Generate typedoc for all packages |

To run a command in a single package:

```sh
cd packages/<name>
pnpm test           # Run tests for this package only
pnpm build          # Build this package only
```

## Code Style

- **TypeScript** in strict mode, targeting ES6, CommonJS modules
- **ESLint** via `@rightcapital/eslint-config` — run `pnpm -w lint:eslint`
- **Prettier** via `@rightcapital/prettier-config` — run `pnpm -w lint:prettier`

### Naming conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Classes | PascalCase | `ColorHelpers`, `DateHelpers` |
| Methods | camelCase | `getHighContrastContentOnBackgroundColor` |
| Files | kebab-case | `color-helpers.ts` |
| Type parameters | ALL_CAPS | `<FOREGROUND_CONTENT_T>` |
| Enums | PascalCase | `BrightnessDirection` |

## Testing

- **Framework**: Vitest (with `@vitest/coverage-v8`)
- **Imports**: Use explicit imports — `import { describe, expect, test } from 'vitest'` (no globals)
- **Location**: Tests go in `__tests__/` directories alongside `src/`
- **Invalid input tests**: Use `// @ts-expect-error` comments

Run all tests:

```sh
pnpm -w test
```

## Commit Conventions

This project follows [Conventional Commits](https://www.conventionalcommits.org/), enforced by commitlint.

**Format**: `<type>(scope): <description>`

**Common types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`, `build`

**Allowed scopes** (defined in `commitlint.config.js`): package names (e.g., `date-helpers`, `exceptions`). Update the `scope-enum` rule when adding new packages.

**Examples**:
- `feat(color-helpers): add OKLCH color space support`
- `fix(exceptions): handle undefined error codes`
- `chore: update dev dependencies`

Use `pnpm -w commit` for an interactive commit prompt that guides you through the format.

## Change Management (Beachball)

Every PR that changes published packages must include a **change file**:

1. Run `pnpm -w change` — answers a few questions and creates a file in `/change`
2. The CI job `check-beachball-changefile` validates change files exist
3. On merge to `main`, the `publish-main` CI job publishes updated packages to npm automatically

## Maintenance

When code changes cause descriptions in this file (commands, directory structure,
conventions, etc.) to become inaccurate, update AGENTS.md to stay consistent.
