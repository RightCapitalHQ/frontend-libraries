[@rightcapital/exceptions](../README.md) / [Exports](../modules.md) / RangeException

# Class: RangeException

Exception thrown to indicate range errors during program execution. Normally this means there was an arithmetic error other than under/overflow.
This is the runtime version of

**`See`**

DomainException.

## Hierarchy

- [`RuntimeException`](RuntimeException.md)

  ↳ **`RangeException`**

## Table of contents

### Constructors

- [constructor](RangeException.md#constructor)

### Properties

- [cause](RangeException.md#cause)
- [message](RangeException.md#message)
- [name](RangeException.md#name)
- [stack](RangeException.md#stack)

### Methods

- [isCausedBy](RangeException.md#iscausedby)

## Constructors

### constructor

• **new RangeException**(`message`, `cause?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | A human-readable description of the error. |
| `cause?` | `any` | The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause. |

#### Inherited from

[RuntimeException](RuntimeException.md).[constructor](RuntimeException.md#constructor)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:14](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L14)

## Properties

### cause

• `Optional` **cause**: `any`

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Inherited from

[RuntimeException](RuntimeException.md).[cause](RuntimeException.md#cause)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:16](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L16)

___

### message

• **message**: `string`

#### Inherited from

[RuntimeException](RuntimeException.md).[message](RuntimeException.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string` = `'RangeException'`

#### Overrides

[RuntimeException](RuntimeException.md).[name](RuntimeException.md#name)

#### Defined in

[packages/exceptions/src/exceptions/range.exception.ts:9](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/range.exception.ts#L9)

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

[packages/exceptions/src/exceptions/base.exception.ts:27](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L27)
