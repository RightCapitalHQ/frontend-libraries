[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / assertNonNullable

# Function: assertNonNullable()

> **assertNonNullable**\<`T`\>(`value`, `message?`): `asserts value is NonNullable<T>`

Defined in: [packages/assert/src/index.ts:79](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/assert/src/index.ts#L79)

Asserts that a value is not `null` or `undefined`, providing TypeScript type narrowing to `NonNullable<T>`.
Ensures subsequent code can safely access the value.

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

`asserts value is NonNullable<T>`

## Throws

Throws an error if `value` is `null` or `undefined`.

## Example

```typescript
function processUser(user: User | null | undefined) {
  assertNonNullable(user, 'User cannot be null');
  // user is now typed as User
  console.log(user.name); // Safe to access
}
```
