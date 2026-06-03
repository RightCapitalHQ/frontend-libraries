# @rightcapital-fork/storage-factory

> Forked from [MichalZalecki/storage-factory](https://github.com/MichalZalecki/storage-factory)

This library is a tiny wrapper for `localStorage` and `sessionStorage` because using Storage directly is a bad idea. Here's the blogpost that explains [why is that](https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea/).

## Changes from Original

This fork includes the following modifications:

### Build & Infrastructure

- ESM-only (removed CommonJS build)
- Replaced Jest with Vitest for testing

### Test Improvements

- Implemented tests for "when storage is supported" scenario (previously skipped with `@TODO`)
- Added test coverage for `removeItem()` and `key()` methods

## Installation

```bash
npm install @rightcapital-fork/storage-factory
```

## Usage

```ts
import { storageFactory } from '@rightcapital-fork/storage-factory';

export const local = storageFactory(() => localStorage);
export const session = storageFactory(() => sessionStorage);
```

When you need to use storage:

```ts
import * as storage from './storage';

function login(token: string) {
  storage.local.setItem('token', token);
  // do your other login things
}
```

## Development

```bash
# Build
pnpm exec nx build storage-factory

# Type check
pnpm exec nx typecheck storage-factory

# Run tests
pnpm exec vitest --project storage-factory
```
