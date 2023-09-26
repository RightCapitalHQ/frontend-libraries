# `exceptions`

## Introduction

This library provides a set of standard Exceptions

It is inspired by the [PHP's SPL exceptions](https://www.php.net/manual/en/spl.exceptions.php)

## Installation

```bash
pnpm add @rightcapital/exceptions
```

## Usage

```typescript
import { RuntimeException, LogicException } from '@rightcapital/exceptions';

const logicException = new LogicException('A logic exception');

try {
  // Something
  throw new RuntimeException('Crash!', logicException);
} catch (exception) {
  if (exception instanceof RuntimeException) {
    //.... BlaBlaBla
    if (exception.isCausedBy(logicException)) {
      console.log(
        'Catch you!',
        exception.name,
        ', You are caused by',
        exception.cause.name,
      );
    }
  }
}
```

## Modules

[Here](/packages/exceptions/docs/modules.md) is the API documentation for the modules included in the package.
