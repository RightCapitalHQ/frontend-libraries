[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / ensureNonNullable

# Function: ensureNonNullable()

> **ensureNonNullable**\<`T`\>(`value`, `message?`): `NonNullable`\<`T`\>

Defined in: [packages/assert/src/index.ts:149](https://github.com/RightCapitalHQ/frontend-libraries/blob/50d63d804b69ec02a23503bf7845af27f8ab0fdd/packages/assert/src/index.ts#L149)

Similar to `assertNonNullable`, but returns the value. Ensures a value is not null/undefined and returns it.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

The value to check for null/undefined

### message?

`string`

Optional custom error message

## Returns

`NonNullable`\<`T`\>

The non-nullable value

## Throws

Throws an error if `value` is `null` or `undefined`.

## Example

```typescript
// Use in expressions
const config = ensureNonNullable(
  getConfig(),
  'Configuration not found'
);

// Chain calls
const userName = ensureNonNullable(user, 'User not found').name;
```
