# Error handling conventions

Evaluate error and assertion sites using this 3-step decision tree in order:

### Step 1: Should centralized error reporting (e.g., Sentry) ignore this error?

- **Scenario**: A user-facing toast or modal was already shown, or the error only aborts an expected async flow.
- **Action**: Throw `IgnorableError` (`new IgnorableError(message, { cause })`). Keep `IgnorableError` in the application layer.

### Step 2: Is this a TypeScript type-narrowing check, non-null guard, or `switch` exhaustiveness check?

- **Scenario**: Narrowing `T | null | undefined`, asserting boolean invariants, or handling unreachable/exhaustive branches.
- **Action**: Use `@rightcapital/assert` (`assert`, `assertNonNullable`, `ensureNonNullable`, `assertExhaustive`, `assertUnreachable`), which throws `AssertionError`.

### Step 3: Would this error still make sense in a domain-agnostic UI or utility package?

- **YES (Generic / Framework / Runtime / Utility contract)**: Use native JavaScript `Error` classes and pass underlying errors via `{ cause }`:
  - `TypeError`: Invalid argument type or unexpected runtime value type when not using `@rightcapital/assert`.
  - `RangeError`: Value, index, or format outside the supported range.
  - `Error`: Other generic runtime, framework, or library-level failures.
- **NO (Product / Financial / Business Domain invariant)**: Throw `BusinessLogicError` (`new BusinessLogicError(message, { cause })`) in application code.

---

Do not add new dependencies on `@rightcapital/exceptions`. The package remains available for existing consumers, but workspace packages should use `@rightcapital/assert` or native `Error` subclasses according to the decision tree above.

In `@rightcapital/date-helpers`, non-`Date`/non-string runtime inputs throw `TypeError`. Unparseable dates and invalid date formats throw `RangeError`.
