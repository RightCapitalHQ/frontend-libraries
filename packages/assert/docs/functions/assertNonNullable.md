[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / assertNonNullable

# Function: assertNonNullable()

> **assertNonNullable**\<`T`\>(`value`, `message?`): `asserts value is NonNullable<T>`

Defined in: [packages/assert/src/index.ts:86](https://github.com/RightCapitalHQ/frontend-libraries/blob/50d63d804b69ec02a23503bf7845af27f8ab0fdd/packages/assert/src/index.ts#L86)

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
