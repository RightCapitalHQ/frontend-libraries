[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / assertUnreachable

# Function: assertUnreachable()

> **assertUnreachable**(`message?`): `never`

Defined in: [packages/assert/src/index.ts:181](https://github.com/RightCapitalHQ/frontend-libraries/blob/50d63d804b69ec02a23503bf7845af27f8ab0fdd/packages/assert/src/index.ts#L181)

Marks code branches that should theoretically never be reached.
Used for defensive programming to prevent unexpected code execution when data or logic doesn't match expectations.

## Parameters

### message?

`string` = `'Reached unreachable code'`

Optional custom error message

## Returns

`never`

Never returns (always throws)

## Throws

Always thrown.

## Example

```typescript
function processStatus(status: 'active' | 'inactive' | 'activating') {
  if (status === 'active') {
    // Handle active state
  } else if (status === 'inactive') {
    // Handle inactive state
  } else {
    // According to business logic, this should never be reached
    assertUnreachable(`Unexpected status value: ${status}`);
  }
}
```
