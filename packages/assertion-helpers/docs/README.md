@rightcapital/assertion-helpers / [Exports](modules.md)

# @rightcapital/assertion-helpers

Type-safe assertion utilities for defensive programming in TypeScript applications.

## Installation

```bash
npm install @rightcapital/assertion-helpers
# or
pnpm add @rightcapital/assertion-helpers
# or  
yarn add @rightcapital/assertion-helpers
```

## Usage

```typescript
import { AssertionHelpers } from '@rightcapital/assertion-helpers';

// Basic assertion
AssertionHelpers.assert(user.age >= 18, 'User must be at least 18 years old');

// Non-nullable assertion with type narrowing
AssertionHelpers.assertNonNullable(user, 'User cannot be null');
// user is now typed as NonNullable<T>

// Ensure with type guard  
const admin = AssertionHelpers.ensure(currentUser, isAdminUser, 'Admin required');
// admin is now typed as AdminUser
```

## API Reference

See the [generated documentation](./docs/README.md) for detailed API reference.

## License

MIT
