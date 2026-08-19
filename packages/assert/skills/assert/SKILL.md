---
name: assert
description: >-
  Type-safe assertion and validation utilities for defensive TypeScript programming.
  Use when writing runtime assertions, null checks, type guard validations, unreachable code markers, or exhaustive switch/if-else checking.
  Import named functions from @rightcapital/assert.
license: MIT
metadata:
  author: RightCapital
  package: '@rightcapital/assert'
---

# assert

Type-safe assertion utilities for defensive TypeScript programming. All functions throw `AssertionError` (which extends `Error`) on failure. Default error message format is `${functionName}: Unexpected ${String(value)}`.

## Import

```typescript
import {
  assert,
  AssertionError,
  assertExhaustive,
  assertNonNullable,
  assertUnreachable,
  ensure,
  ensureNonNullable,
} from '@rightcapital/assert';
```

## Quick Reference

| API / Signature                                                                              | Description / Typical Use Case                                      |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `AssertionError extends Error`                                                               | Error type thrown when any assertion in this package fails.         |
| `assert(value: boolean, message?: string): asserts value`                                    | Precondition or boolean check (verifies `value === true`).          |
| `assertNonNullable<T>(value: T, message?: string): asserts value is NonNullable<T>`          | Guard statement against `null` or `undefined`.                      |
| `ensure<T, S extends T>(value: T, predicate: (value: T) => value is S, message?: string): S` | Inline validation using type guard function `(val: T) => val is S`. |
| `ensureNonNullable<T>(value: T, message?: string): NonNullable<T>`                           | Inline assignment or method chain for non-null value.               |
| `assertExhaustive(value: never, message?: string): never`                                    | Exhaustiveness check in `switch` `default` case or `if-else` chain. |
| `assertUnreachable(message?: string): never`                                                 | Mark logically impossible code paths.                               |

## Error Handling with `AssertionError`

All assertion functions throw `AssertionError` when a condition is not met. Use `instanceof AssertionError` to catch assertion failures specifically:

```typescript
import { assert, AssertionError } from '@rightcapital/assert';

try {
  assert(age >= 18, 'User must be an adult');
} catch (error) {
  if (error instanceof AssertionError) {
    console.error('Assertion failed:', error.message);
  } else {
    throw error;
  }
}
```

## Critical Rules for Code Generation

### 1. `assert()` Checks Strict Boolean Equality (`value !== true`)

`assert(value)` throws if `value !== true`. It throws for truthy non-boolean values like objects or strings.

- **Incorrect**: `assert(user);` (throws even if `user` is an object)
- **Correct**: `assertNonNullable(user);`
- **Correct**: `assert(user.age >= 18, 'Must be 18+');`

### 2. Choose `assert*` Statements vs `ensure*` Expressions

- **`assert*` functions** are statements. They narrow the type of an existing variable for subsequent code.
- **`ensure*` functions** are expressions. They return the validated value with a narrowed type for direct assignment or chaining.

```typescript
// Statement form
assertNonNullable(user);
console.log(user.name);

// Expression form
const userName = ensureNonNullable(getUser()).name;
```

### 3. `ensure()` Requires a Type Guard Predicate

The `predicate` parameter in `ensure(val, predicate)` must be a TypeScript type guard (`(val: T) => val is S`). A standard boolean function without a type predicate will cause a compile error.

```typescript
function isAdminUser(user: User): user is AdminUser {
  return user.role === 'admin';
}

const admin = ensure(currentUser, isAdminUser, 'Admin required');
```

### 4. `assertExhaustive` vs `assertUnreachable`

- Use `assertExhaustive(value)` when TypeScript can prove all union cases are handled (e.g., `switch` default case). It catches missing union members at compile time because `value` must be typed as `never`.
- Use `assertUnreachable(message)` for defensive checks in branches that TypeScript cannot prove unreachable.
- Prefix with `return` in non-void functions (for example, `return assertExhaustive(val);` or `return assertUnreachable(msg);`) to satisfy ESLint `consistent-return`.

```typescript
// Exhaustive switch over union
switch (shape.kind) {
  case 'circle':
    return Math.PI * shape.radius ** 2;
  case 'square':
    return shape.side ** 2;
  default:
    return assertExhaustive(shape);
}

// Unreachable defensive branch
if (status === 'active') {
  handleActive();
} else if (status === 'inactive') {
  handleInactive();
} else {
  return assertUnreachable(`Unexpected status: ${status}`);
}
```
