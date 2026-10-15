[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / ensureNonNullable

# Function: ensureNonNullable()

> **ensureNonNullable**\<`T`\>(`value`, `message?`): `NonNullable`\<`T`\>

Defined in: [packages/assert/src/index.ts:142](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/assert/src/index.ts#L142)

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
