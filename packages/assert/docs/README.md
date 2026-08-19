@rightcapital/assert / [Exports](modules.md)

# @rightcapital/assert

Type-safe assertion utilities for defensive programming in TypeScript applications.

## Key Features

- **Compile-Time Exhaustiveness (`assertExhaustive`)**: Enforce full coverage of union types at compile time with TypeScript `never`.
- **Control-Flow Guard (`assertUnreachable`)**: Mark unreachable branches for control-flow analysis and runtime safety.
- **Expression-Level Assertions (`ensure` / `ensureNonNullable`)**: Assert and return narrowed values in single-line expressions.
- **Type Narrowing (`assert` / `assertNonNullable`)**: Narrow types with standard TypeScript assertion signatures.

## Installation

```bash
npm install @rightcapital/assert
# or
pnpm add @rightcapital/assert
# or
yarn add @rightcapital/assert
```

## Usage Examples

### Compile-Time Exhaustiveness Checking (`assertExhaustive`)

Use `assertExhaustive` in `switch` statements or `if-else` chains. It leverages TypeScript `never` to catch missing cases at compile time.

```typescript
import { assertExhaustive } from '@rightcapital/assert';

type Action = { type: 'open' } | { type: 'close' };

function handleAction(action: Action) {
  switch (action.type) {
    case 'open':
      return 'Opening';
    case 'close':
      return 'Closing';
    default:
      // If a new Action type is added without a case,
      // TypeScript reports a compile error here.
      return assertExhaustive(action);
  }
}
```

### Control Flow & Unreachable Code Guard (`assertUnreachable`)

Use `assertUnreachable` for code branches that should never execute. Because `assertUnreachable` returns `never`, TypeScript understands control flow stops at this point.

```typescript
import { assertUnreachable } from '@rightcapital/assert';

function processStatus(status: 'active' | 'inactive') {
  if (status === 'active') {
    handleActive();
  } else if (status === 'inactive') {
    handleInactive();
  } else {
    // TypeScript knows execution stops here because `assertUnreachable` returns `never`.
    assertUnreachable(`Unexpected status: ${status}`);
  }
}
```

> **Tip**: If your project enforces the ESLint `consistent-return` rule, add `return` before the function call (for example, `return assertUnreachable(...)`) to satisfy ESLint.

### Expression-Level Type Narrowing (`ensure` & `ensureNonNullable`)

Unlike `assert`, `ensure` and `ensureNonNullable` validate a value and return it with a narrowed type. This allows assertions inside single-line expressions or method chains.

```typescript
import { ensure, ensureNonNullable } from '@rightcapital/assert';

// Assert and get a non-nullable value in one expression
const userName = ensureNonNullable(getUser(), 'User must exist').name;

// Assert with a custom type guard
const admin = ensure(currentUser, isAdminUser, 'Admin privileges required');
// `admin` is typed as AdminUser
```

### Basic Assertion & Type Narrowing (`assert` & `assertNonNullable`)

Use `assert` and `assertNonNullable` for standalone statement assertions.

```typescript
import { assert, assertNonNullable } from '@rightcapital/assert';

// Basic condition assertion
assert(user.age >= 18, 'User must be at least 18 years old');

// Non-nullable assertion with type narrowing
assertNonNullable(user, 'User cannot be null');
// `user` is narrowed to NonNullable<User>
```

### Error Handling (`AssertionError`)

All assertion functions throw `AssertionError` (which extends `Error`) when an assertion fails.

```typescript
import { assert, AssertionError } from '@rightcapital/assert';

try {
  assert(user.age >= 18, 'User must be at least 18 years old');
} catch (error) {
  if (error instanceof AssertionError) {
    console.error('Assertion failed:', error.message);
  }
}
```

## API Summary

| API / Signature                                                                            | Description / Typical Use Case                            |
| :----------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| `AssertionError extends Error`                                                             | Error thrown on assertion failure                         |
| `assertExhaustive(value: never, message?: string): never`                                  | Enforce exhaustiveness check in `switch` or `if-else`     |
| `assertUnreachable(message?: string): never`                                               | Mark logically unreachable code branches                  |
| `ensure<T, S extends T>(value: T, predicate: (value: T) => value is S, message?: string): S` | Validate and return value with narrowed type              |
| `ensureNonNullable<T>(value: T, message?: string): NonNullable<T>`                        | Validate non-null/undefined and return value              |
| `assert(value: boolean, message?: string): asserts value`                                 | Standard boolean condition assertion                      |
| `assertNonNullable<T>(value: T, message?: string): asserts value is NonNullable<T>`       | Standard non-null/undefined assertion                     |

## Agent Skills

This package ships with an [Agent Skill](https://agentskills.io) that teaches AI coding agents (Claude Code, Cursor, etc.) how to use the assert API correctly, following the [npm-based Agent Skills Convention](https://github.com/antfu/skills-npm).

### Automatic discovery (recommended)

If your project uses [`skills-npm`](https://github.com/antfu/skills-npm), the skill is discovered automatically from `node_modules`:

```bash
npx skills-npm
```

### Manual installation

You can also install the skill directly using the [`skills` CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add https://github.com/RightCapitalHQ/frontend-libraries/tree/main/packages/assert/skills
```

## API Reference

See the [generated documentation](./docs/README.md) for detailed API reference.
