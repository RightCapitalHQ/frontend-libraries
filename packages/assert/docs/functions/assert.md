[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / assert

# Function: assert()

> **assert**(`value`, `message?`): `asserts value`

Defined in: [packages/assert/src/index.ts:63](https://github.com/RightCapitalHQ/frontend-libraries/blob/50d63d804b69ec02a23503bf7845af27f8ab0fdd/packages/assert/src/index.ts#L63)

Basic assertion: verifies that a value or expression is `true`, otherwise throws an exception.

## Parameters

### value

`boolean`

The boolean condition to assert as `true`

### message?

`string`

Optional custom error message

## Returns

`asserts value`

## Throws

Throws an error if `value` is not `true`.

## Example

```typescript
// Basic usage
assert(user.age >= 18, 'User must be at least 18 years old');

// Condition validation
const isValid = validateData(data);
assert(isValid, 'Data validation failed');
```
