[@rightcapital/exceptions](../README.md) / [Exports](../modules.md) / OverflowException

# Class: OverflowException

Exception thrown when adding an element to a full container.

## Hierarchy

- [`RuntimeException`](RuntimeException.md)

  ↳ **`OverflowException`**

## Table of contents

### Constructors

- [constructor](OverflowException.md#constructor)

### Properties

- [cause](OverflowException.md#cause)
- [message](OverflowException.md#message)
- [name](OverflowException.md#name)
- [stack](OverflowException.md#stack)

### Methods

- [isCausedBy](OverflowException.md#iscausedby)

## Constructors

### constructor

• **new OverflowException**(`message`, `cause?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | A human-readable description of the error. |
| `cause?` | `any` | The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause. |

#### Inherited from

[RuntimeException](RuntimeException.md).[constructor](RuntimeException.md#constructor)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:14](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L14)

## Properties

### cause

• `Optional` **cause**: `any`

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Inherited from

[RuntimeException](RuntimeException.md).[cause](RuntimeException.md#cause)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:16](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L16)

___

### message

• **message**: `string`

#### Inherited from

[RuntimeException](RuntimeException.md).[message](RuntimeException.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string` = `'OverflowException'`

#### Overrides

[RuntimeException](RuntimeException.md).[name](RuntimeException.md#name)

#### Defined in

[packages/exceptions/src/exceptions/overflow.exception.ts:8](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/overflow.exception.ts#L8)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[RuntimeException](RuntimeException.md).[stack](RuntimeException.md#stack)

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

[RuntimeException](RuntimeException.md).[isCausedBy](RuntimeException.md#iscausedby)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:27](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L27)
