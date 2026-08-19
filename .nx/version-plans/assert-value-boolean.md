---
assert: major
---

Change `assert` to accept only boolean conditions.

This is a breaking TypeScript API change. Pass an explicit boolean expression to `assert`, or use `assertNonNullable` for null and undefined checks.
