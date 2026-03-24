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
const admin = AssertionHelpers.ensure(
  currentUser,
  isAdminUser,
  'Admin required',
);
// admin is now typed as AdminUser
```

## Agent Skills

This package ships with an [Agent Skill](https://agentskills.io) that teaches AI
coding agents (Claude Code, Cursor, etc.) how to use the assertion-helpers API
correctly, following the
[npm-based Agent Skills Convention](https://github.com/antfu/skills-npm).

### Automatic discovery (recommended)

If your project uses [`skills-npm`](https://github.com/antfu/skills-npm), the
skill is discovered automatically from `node_modules`:

```bash
npx skills-npm
```

### Manual installation

You can also install the skill directly using the
[`skills` CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add https://github.com/RightCapitalHQ/frontend-libraries/tree/main/packages/assertion-helpers/skills
```

## API Reference

See the [generated documentation](./docs/README.md) for detailed API reference.
