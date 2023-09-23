# `exceptions`

## Installation

```bash
pnpm add @right/exceptions
```

## Usage

```typescript
import { RuntimeException } from '@right/exceptions';

throw new RuntimeException('Crash!');

try {
  // Something
} catch (e: Exception) {
  if (e instanceof RuntimeException) {
    //.... BlaBlaBla
  }

  // or ....
  if (e.name === 'RuntimeException') {
    // ....BlaBlaBla...
  }
}
```
