[@rightcapital/exceptions](../README.md) / [Exports](../modules.md) / BaseException

# Class: BaseException

The Base Exception that be used to emulate the PHP Base Exception
All exception should be based on this Error type

**`See`**

 - https://www.php.net/manual/en/spl.exceptions.php
 - https://javascript.info/custom-errors

## Hierarchy

- `Error`

  ↳ **`BaseException`**

  ↳↳ [`IgnorableException`](IgnorableException.md)

  ↳↳ [`LogicException`](LogicException.md)

  ↳↳ [`RuntimeException`](RuntimeException.md)

  ↳↳ [`UnexpectedValueException`](UnexpectedValueException.md)

## Table of contents

### Constructors

- [constructor](BaseException.md#constructor)

### Properties

- [cause](BaseException.md#cause)
- [message](BaseException.md#message)
- [name](BaseException.md#name)
- [stack](BaseException.md#stack)

### Methods

- [isCausedBy](BaseException.md#iscausedby)

## Constructors

### constructor

• **new BaseException**(`message`, `cause?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | A human-readable description of the error. |
| `cause?` | `any` | The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause. |

#### Overrides

Error.constructor

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:14](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L14)

## Properties

### cause

• `Optional` **cause**: `any`

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:16](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L16)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:27](https://github.com/RightCapitalHQ/frontend-libraries/blob/98a64d7/packages/exceptions/src/exceptions/base.exception.ts#L27)
