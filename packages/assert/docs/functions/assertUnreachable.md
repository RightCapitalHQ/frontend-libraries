[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / assertUnreachable

# Function: assertUnreachable()

> **assertUnreachable**(`message?`): `never`

Defined in: [packages/assert/src/index.ts:174](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/assert/src/index.ts#L174)

Marks code branches that should theoretically never be reached.
Used for defensive programming to prevent unexpected code execution when data or logic doesn't match expectations.

## Parameters

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
