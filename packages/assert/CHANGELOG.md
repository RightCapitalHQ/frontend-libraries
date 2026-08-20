## 3.0.0 (2026-08-19)

### 🩹 Fixes

- Update package keywords and declare the package side-effect free. ([47d599e](https://github.com/RightCapitalHQ/frontend-libraries/commit/47d599e))

### ⚠️  Breaking Changes

- Throw AssertError instances instead of UnexpectedValueException. ([66994b9](https://github.com/RightCapitalHQ/frontend-libraries/commit/66994b9))
- Rename @rightcapital/assertion-helpers to @rightcapital/assert and replace the AssertionHelpers class API with named assertion functions. ([8481989](https://github.com/RightCapitalHQ/frontend-libraries/commit/8481989))
- Rename the exported `AssertError` class to `AssertionError`. ([8df6668](https://github.com/RightCapitalHQ/frontend-libraries/commit/8df6668))

  This is a breaking API change. Update imports and `instanceof` checks from `AssertError` to `AssertionError`.

- Change `assert` to accept only boolean conditions. ([f0ffd10](https://github.com/RightCapitalHQ/frontend-libraries/commit/f0ffd10))

  This is a breaking TypeScript API change. Pass an explicit boolean expression to `assert`, or use `assertNonNullable` for null and undefined checks.

### ❤️ Thank You

- Codex
- Pink Champagne @PinkChampagne17

## 2.1.2 (2026-06-04)

### 🩹 Fixes

- Remove legacy Beachball changelog headings and JSON files; update README docs. ([55f9247](https://github.com/RightCapitalHQ/frontend-libraries/commit/55f9247))

### 🧱 Updated Dependencies

- Updated exceptions to 1.2.30

### ❤️ Thank You

- Claude Opus 4.6
- Jiahao Guo @frantic1048

## 2.1.1 (2026-03-27)

### 🩹 Fixes

- Migrate build tooling from pnpm workspace + Beachball to Nx-managed monorepo. ([f7ce2ed](https://github.com/RightCapitalHQ/frontend-libraries/commit/f7ce2ed))

### 🧱 Updated Dependencies

- Updated exceptions to 1.2.29

### ❤️ Thank You

- Jiahao Guo @frantic1048

## 2.1.0

Tue, 24 Mar 2026 03:54:45 GMT

### Minor changes

- Add Agent Skill for AI coding agent integration (45930107+PinkChampagne17@users.noreply.github.com)

## 2.0.6

Fri, 20 Mar 2026 09:34:53 GMT

### Patches

- chore(deps): update pnpm to v10.27.0 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.26.0 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.30.0 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.26.1 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.24.0 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.28.0 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.25.0 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.29.3 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update automerge non-major updates (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.28.2 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update automerge non-major updates (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.26.2 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.29.1 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.23.0 (29139614+renovate[bot]@users.noreply.github.com)
- chore(deps): update pnpm to v10.28.1 (29139614+renovate[bot]@users.noreply.github.com)

## 2.0.4

Wed, 24 Sep 2025 20:59:05 GMT

### Patches

- chore(deps): update pnpm to v10.17.0 (29139614+renovate[bot]@users.noreply.github.com)

## 2.0.3

Sun, 21 Sep 2025 01:37:20 GMT

### Patches

- chore(deps): update pnpm to v10.16.1 (29139614+renovate[bot]@users.noreply.github.com)

## 2.0.2

Fri, 19 Sep 2025 18:12:59 GMT

### Patches

- chore(deps): update pnpm to v10.16.0 (29139614+renovate[bot]@users.noreply.github.com)

## 2.0.1

Thu, 11 Sep 2025 14:36:47 GMT

### Patches

- chore(deps): update automerge non-major updates (29139614+renovate[bot]@users.noreply.github.com)

## 2.0.0

Tue, 02 Sep 2025 08:42:59 GMT

### Major changes

- feat: transplant AssertionHelpers into this project (tcdw2011@gmail.com)
