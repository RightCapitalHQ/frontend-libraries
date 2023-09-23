[@rightcapital/exceptions](../README.md) / [Exports](../modules.md) / OutOfRangeException

# Class: OutOfRangeException

Exception thrown when an illegal index was requested. This represents errors that should be detected at compile time.

## Hierarchy

- [`LogicException`](LogicException.md)

  ↳ **`OutOfRangeException`**

## Table of contents

### Constructors

- [constructor](OutOfRangeException.md#constructor)

### Properties

- [cause](OutOfRangeException.md#cause)
- [message](OutOfRangeException.md#message)
- [name](OutOfRangeException.md#name)
- [stack](OutOfRangeException.md#stack)

### Methods

- [isCausedBy](OutOfRangeException.md#iscausedby)

## Constructors

### constructor

• **new OutOfRangeException**(`message`, `cause?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | A human-readable description of the error. |
| `cause?` | `any` | The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause. |

#### Inherited from

[LogicException](LogicException.md).[constructor](LogicException.md#constructor)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:14](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L14)

## Properties

### cause

• `Optional` **cause**: `any`

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Inherited from

[LogicException](LogicException.md).[cause](LogicException.md#cause)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:16](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L16)

___

### message

• **message**: `string`

#### Inherited from

[LogicException](LogicException.md).[message](LogicException.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string` = `'OutOfRangeException'`

#### Overrides

[LogicException](LogicException.md).[name](LogicException.md#name)

#### Defined in

[packages/exceptions/src/exceptions/out-of-range.exception.ts:8](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/out-of-range.exception.ts#L8)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[LogicException](LogicException.md).[stack](LogicException.md#stack)

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1069

## Methods

### isCausedBy

▸ **isCausedBy**(`cause`): `boolean`

If the Error is caused by the cause we passed in the construction method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cause` | `any` | the cause we assume that cause the current exception |

#### Returns

`boolean`

true if the cause we passed is the original cause when the Exception constructed. otherwise, it returns false

#### Inherited from

[LogicException](LogicException.md).[isCausedBy](LogicException.md#iscausedby)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:27](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L27)
