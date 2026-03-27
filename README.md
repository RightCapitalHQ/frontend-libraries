# RightCapital Frontend Libraries Mono repository

<!-- Badges area start -->

[![made by RightCapital](https://img.shields.io/badge/made_by-RightCapital-4966d0)](https://rightcapital.com)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/RightCapitalHQ/frontend-libraries/ci.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![RightCapital frontend style guide](https://img.shields.io/badge/code_style-RightCapital-5c4c64?labelColor=f0ede8)](https://github.com/RightCapitalHQ/frontend-style-guide)

<!-- Badges area end -->

## Introduction

This is a Mono repository contains a set of useful libraries/helpers in TypeScript.

it including the following packages:

- @rightcapital/exceptions: This library provides a set of standard Exceptions ([API Reference](https://github.com/RightCapitalHQ/frontend-libraries/blob/main/packages/exceptions/docs/modules.md))
- @rightcapital/assertion-helpers: Type-safe assertion utilities for defensive programming ([API Reference](https://github.com/RightCapitalHQ/frontend-libraries/blob/main/packages/assertion-helpers/docs/modules.md))
- @rightcapital/date-helpers: A utility class providing various date formatting and parsing methods in TypeScript ([API Reference](https://github.com/RightCapitalHQ/frontend-libraries/blob/main/packages/date-helpers/docs/modules.md))
- @rightcapital/color-helpers: Color science related helpers ([API Reference](https://github.com/RightCapitalHQ/frontend-libraries/blob/main/packages/color-helpers/docs/modules.md))

## Development

If you are confused about Develop and _README.md_, please see the document
[How to Develop]() (to be done)

### Adding new changes

1. After you have finished your changes, run `git add` with the files you have changed.
2. Run `pnpm run commit` to create a commit that follows the [Conventional Commits](https://www.conventionalcommits.org/) specification (enforced via commitlint).

### Releasing changes

1. Ensure there are no uncommitted changes in your working directory.
2. Run `pnpm run change` to create a version plan describing the change type and affected packages.
3. Push your branch and open a PR to `main`.
4. After the PR is merged, a Release PR is automatically created. Merging the Release PR triggers package publishing to npm.

### Bootstrap

Install all dependencies:

```sh
pnpm install
```

### Common commands

```sh
pnpm run build       # Build all packages
pnpm run test        # Run all tests
pnpm run lint        # Run ESLint + Prettier checks
pnpm run fix         # Auto-fix linting issues
pnpm run typecheck   # TypeScript type checking
pnpm run docs        # Generate API docs
```

## Refs

- https://pnpm.io/workspaces
- https://nx.dev/features/manage-releases
- https://commitizen-tools.github.io/commitizen/
- https://www.conventionalcommits.org/
