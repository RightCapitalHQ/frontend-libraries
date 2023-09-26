[@rightcapital/exceptions](../README.md) / [Exports](../modules.md) / IgnorableException

# Class: IgnorableException

This Exception could be ignore

## Hierarchy

- [`BaseException`](BaseException.md)

  ↳ **`IgnorableException`**

## Table of contents

### Constructors

- [constructor](IgnorableException.md#constructor)

### Properties

- [cause](IgnorableException.md#cause)
- [message](IgnorableException.md#message)
- [name](IgnorableException.md#name)
- [stack](IgnorableException.md#stack)

### Methods

- [isCausedBy](IgnorableException.md#iscausedby)

## Constructors

### constructor

• **new IgnorableException**(`message`, `cause?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | A human-readable description of the error. |
| `cause?` | `any` | The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause. |

#### Inherited from

[BaseException](BaseException.md).[constructor](BaseException.md#constructor)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:14](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L14)

## Properties

### cause

• `Optional` **cause**: `any`

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Inherited from

[BaseException](BaseException.md).[cause](BaseException.md#cause)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:16](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L16)

___

### message

• **message**: `string`

#### Inherited from

[BaseException](BaseException.md).[message](BaseException.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string` = `'IgnorableException'`

#### Overrides

[BaseException](BaseException.md).[name](BaseException.md#name)

#### Defined in

[packages/exceptions/src/exceptions/ignorable.exception.ts:8](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/ignorable.exception.ts#L8)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[BaseException](BaseException.md).[stack](BaseException.md#stack)

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

[BaseException](BaseException.md).[isCausedBy](BaseException.md#iscausedby)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:27](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L27)
