[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / assertExhaustive

# Function: assertExhaustive()

> **assertExhaustive**(`value`, `message?`): `never`

Defined in: [packages/assert/src/index.ts:218](https://github.com/RightCapitalHQ/frontend-libraries/blob/50d63d804b69ec02a23503bf7845af27f8ab0fdd/packages/assert/src/index.ts#L218)

Used for exhaustiveness checking of union types. Ensures switch or if-else statements cover all possible types.
Leverages TypeScript's `never` type to catch missing branches at compile time.

## Parameters

### value

`never`

The value that should be `never` if all cases are handled

### message?

`string`

Optional custom error message

## Returns

`never`

Never returns (always throws)

## Throws

Always thrown.

## Example

```typescript
type Action =
  | { type: 'ADD'; payload: number }
  | { type: 'SUBTRACT'; payload: number }
  | { type: 'MULTIPLY'; payload: number };

function reducer(action: Action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUBTRACT':
      return state - action.payload;
    case 'MULTIPLY':
      return state * action.payload;
    default:
      // If all types are exhausted, action is of type never
      // If new Action types are added but not handled, TypeScript will report error
      return assertExhaustive(action);
                              // ^ never
  }
}
```
