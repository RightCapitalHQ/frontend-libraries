---
name: assertion-helpers
description: >-
  Type-safe assertion and validation utilities for defensive TypeScript programming.
  Use when you need runtime assertions, null checks with type narrowing, type guard
  validation, unreachable code markers, or exhaustive switch/if-else checking.
  Import AssertionHelpers from @rightcapital/assertion-helpers.
license: MIT
metadata:
  author: RightCapital
  package: '@rightcapital/assertion-helpers'
---

# assertion-helpers

Type-safe assertion utilities for defensive programming in TypeScript. All methods are static on the `AssertionHelpers` class and throw `UnexpectedValueException` (from `@rightcapital/exceptions`) on failure.

## Import

```typescript
import { AssertionHelpers } from '@rightcapital/assertion-helpers';
```

## Quick Reference

| Method                                     | Purpose                             | Returns                            | Use When                                     |
| ------------------------------------------ | ----------------------------------- | ---------------------------------- | -------------------------------------------- |
| `assert(value, message?)`                  | Verify condition is strictly `true` | void (narrows type)                | Validating preconditions/postconditions      |
| `assertNonNullable(value, message?)`       | Verify not null/undefined           | void (narrows to `NonNullable<T>`) | Guarding against null in statements          |
| `ensure(value, predicate, message?)`       | Validate with type guard            | narrowed value `S`                 | Need validated value in an expression        |
| `ensureNonNullable(value, message?)`       | Verify not null/undefined           | `NonNullable<T>`                   | Need non-null value in an expression         |
| `assertUnreachable(message?)`              | Mark unreachable code               | never                              | Defensive code paths that should not execute |
| `assertExhaustive(value: never, message?)` | Exhaustiveness check                | never                              | `default` case in switch over union types    |

## Key Distinction: assert vs ensure

- **`assert*` methods** are _statements_: they narrow the type of their argument for subsequent code but do not return a value. Use them to guard a code block.
- **`ensure*` methods** are _expressions_: they return the validated value with a narrowed type. Use them inline in assignments, arguments, or chaining.

```typescript
// Statement form — narrows `user` for subsequent code
AssertionHelpers.assertNonNullable(user);
console.log(user.name); // user is NonNullable<T>

// Expression form — returns the validated value
const userName = AssertionHelpers.ensureNonNullable(user).name;
```

## Critical: `assert()` Uses Strict Boolean Checking

`assert(value)` checks `value !== true`. This means falsy values like `0`, `""`, `NaN`, and `false` **all** trigger the exception — but so do truthy non-boolean values like objects and non-empty strings.

```typescript
// WRONG — throws even though user is a valid object
AssertionHelpers.assert(user);

// CORRECT — use assertNonNullable for null/undefined checks
AssertionHelpers.assertNonNullable(user);

// CORRECT — pass a boolean expression to assert
AssertionHelpers.assert(user.age >= 18, 'Must be 18+');
```

## Usage Patterns

### Precondition validation

```typescript
function processOrder(order: Order) {
  AssertionHelpers.assert(order.items.length > 0, 'Order must have items');
  AssertionHelpers.assert(order.total > 0, 'Order total must be positive');
  // proceed with valid order...
}
```

### Null-safe access after assertion

```typescript
function initApp(config: AppConfig | null) {
  AssertionHelpers.assertNonNullable(config, 'Config is required');
  // config is now typed as AppConfig
  startServer(config.port);
}
```

### Inline validated assignment with type guard

```typescript
function isAdminUser(user: User): user is AdminUser {
  return user.role === 'admin';
}

const admin = AssertionHelpers.ensure(
  currentUser,
  isAdminUser,
  'Admin required',
);
// admin is typed as AdminUser
```

### Inline non-null access

```typescript
const element = AssertionHelpers.ensureNonNullable(
  document.getElementById('app'),
  'App container not found',
);
element.classList.add('loaded');
```

### Exhaustive switch statements

```typescript
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    default:
      // TypeScript error if a new Shape kind is added but not handled
      return AssertionHelpers.assertExhaustive(shape);
  }
}
```

### Defensive unreachable branches

```typescript
function processStatus(status: 'active' | 'inactive' | 'activating') {
  if (status === 'active') {
    activate();
  } else if (status === 'inactive') {
    deactivate();
  } else {
    // Business logic says this should never happen here
    AssertionHelpers.assertUnreachable(`Unexpected status: ${status}`);
  }
}
```

## Common Mistakes

- **Do not use `assert()` for null checks.** It checks `value !== true`, not truthiness. Use `assertNonNullable()` instead.
- **Do not confuse `assertUnreachable` with `assertExhaustive`.** Use `assertExhaustive` in `default` cases of switch statements over union types — it accepts `never` and catches missing branches at compile time. Use `assertUnreachable` for logically impossible branches that TypeScript cannot prove unreachable.
- **Choose the right form.** Use `assert*` when you only need type narrowing for subsequent code. Use `ensure*` when you need the validated value as an expression (assignment, argument, chaining).
