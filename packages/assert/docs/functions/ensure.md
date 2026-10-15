[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / ensure

# Function: ensure()

> **ensure**\<`T`, `S`\>(`value`, `predicate`, `message?`): `S`

Defined in: [packages/assert/src/index.ts:120](https://github.com/RightCapitalHQ/frontend-libraries/blob/50d63d804b69ec02a23503bf7845af27f8ab0fdd/packages/assert/src/index.ts#L120)

Similar to `assert`, but returns the value. Ensures a value matches a type predicate and returns it with narrowed type.

## Type Parameters

### T

`T`

### S

`S`

## Parameters

### value

`T`

The value to validate

### predicate

(`value`) => `value is S`

Type guard function that validates the value

### message?

`string`

Optional custom error message

## Returns

`S`

The value with narrowed type

## Throws

Throws an error if `predicate` returns `false`.

## Example

```typescript
// Define type guard
function isAdminUser(user: User): user is AdminUser {
  return user.role === 'admin';
}

// Use ensure to get type-safe value
const admin = ensure(
  currentUser,
  isAdminUser,
  'Admin privileges required'
);
// admin is typed as AdminUser
```
