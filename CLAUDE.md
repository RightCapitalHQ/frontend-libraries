# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is RightCapital's frontend libraries monorepo containing shared TypeScript utility packages. The monorepo uses pnpm workspaces with Nx for task orchestration.

## Common Commands

```bash
# Build all packages (via Nx)
pnpm run build

# Run tests
pnpm run test

# Run linting (ESLint + Prettier)
pnpm run lint

# Auto-fix linting issues
pnpm run fix

# TypeScript type checking (via Nx)
pnpm run typecheck

# Generate docs for all packages (via Nx)
pnpm run docs

# Create a version plan before PR (required for PRs with publishable changes)
pnpm run change

# Check that a version plan exists (used in CI)
pnpm run check

# Interactive commit with conventional commit prompts
pnpm run commit
```

## Architecture

### Package Structure

- `packages/exceptions` - TypeScript exception definitions (base dependency for other packages)
- `packages/assertion-helpers` - Type-safe assertion utilities for defensive programming
- `packages/date-helpers` - Date formatting/parsing helpers using date-fns
- `packages/color-helpers` - Color science helpers (WCAG compliance, hex normalization)

### Dependency Graph

- `assertion-helpers` → `exceptions`
- `date-helpers` → `exceptions`
- `color-helpers` (standalone)
- `exceptions` (standalone)

### Build System

The `@nx/js/typescript` plugin auto-infers `build` and `typecheck` targets from `tsconfig.lib.json` files. Each package has a `project.json` for Nx metadata with empty `targets: {}` since the plugin handles inference.

### Build Output

Compiled TypeScript outputs to `packages/*/lib/`. Source is in `packages/*/src/`. Tests are in `packages/*/__tests__/`.

## Technical Details

- **Package manager**: pnpm 10.32.1 with workspace support
- **Module system**: CommonJS
- **Test framework**: Jest with Babel for TypeScript transpilation
- **Versioning**: Nx Release with version plans (independent versioning for all packages)

## Development Workflow

1. Create a `feature/*` branch, make changes, and run `pnpm run change` to generate a version plan
2. Open a PR to `main` and merge after review
3. Merge the automatically created Release PR (`release` → `main`) to publish packages to npm

Additional conventions:

- ESLint uses modern flat config format (`eslint.config.mjs`)
- Conventional commits are enforced via commitlint
- Allowed scopes: `assertion-helpers`, `color-helpers`, `date-helpers`, `exceptions`
- Use `pnpm exec` or `pnpm dlx` instead of `npx` for running binaries

## Nx Release

Versioning uses Nx Release with version plans (markdown files in `.nx/version-plans/`).

All packages use **independent** versioning - each package can be bumped independently.

CI enforcement:

- The `check-version-plan` job in `ci.yml` requires a version plan on PRs to `main`, except for the Release PR (from the `release` branch) and Renovate branches

## Branching

- `main` - Default branch; all PRs target `main`
- `feature/*` - Development branches for all changes
- `renovate/*` - Automated dependency update branches created by Renovate
- `release` - Holds the Release PR content; created/updated by `release-pr.yml`, merged back into `main` to trigger a release

## GitHub Actions Conventions

- All workflow automation uses GitHub App identity (`RC_BOT_APP_ID` / `RC_BOT_PRIVATE_KEY`) instead of `GITHUB_TOKEN` or PATs
- When using `actions/create-github-app-token`, always specify explicit `permission-*` inputs scoped to the minimum required permissions. For example:
  ```yaml
  - uses: actions/create-github-app-token@v3
    with:
      app-id: ${{ secrets.RC_BOT_APP_ID }}
      private-key: ${{ secrets.RC_BOT_PRIVATE_KEY }}
      permission-issues: write # only if the job needs to write issues
      permission-pull-requests: read # only if the job needs to read PRs
  ```
- Shared reusable workflows are consumed from [RightCapitalHQ/actions](https://github.com/RightCapitalHQ/actions) via `secrets: inherit`
