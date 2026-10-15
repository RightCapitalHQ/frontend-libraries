[**@rightcapital/assert**](../README.md)

***

[@rightcapital/assert](../modules.md) / unimplemented

# Function: unimplemented()

> **unimplemented**(`message?`): `never`

Defined in: [packages/assert/src/index.ts:236](https://github.com/RightCapitalHQ/frontend-libraries/blob/50d63d804b69ec02a23503bf7845af27f8ab0fdd/packages/assert/src/index.ts#L236)

Marks methods or code paths that are intentionally not implemented yet.

## Parameters

### message?

`string` = `'Not implemented'`

Optional custom error message

## Returns

`never`

Never returns (always throws)

## Throws

Always thrown.

## Example

```typescript
function saveDraft(): never {
  return unimplemented('Draft saving is not available yet');
}
```
