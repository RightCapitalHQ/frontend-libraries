[@rightcapital/exceptions](../README.md) / [Exports](../modules.md) / DomainException

# Class: DomainException

Exception thrown if a value does not adhere to a defined valid data domain.

## Hierarchy

- [`LogicException`](LogicException.md)

  ↳ **`DomainException`**

## Table of contents

### Constructors

- [constructor](DomainException.md#constructor)

### Properties

- [cause](DomainException.md#cause)
- [message](DomainException.md#message)
- [name](DomainException.md#name)
- [stack](DomainException.md#stack)

### Methods

- [isCausedBy](DomainException.md#iscausedby)

## Constructors

### constructor

• **new DomainException**(`message`, `cause?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | A human-readable description of the error. |
| `cause?` | `any` | The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause. |

#### Inherited from

[LogicException](LogicException.md).[constructor](LogicException.md#constructor)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:14](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L14)

## Properties

### cause

• `Optional` **cause**: `any`

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Inherited from

[LogicException](LogicException.md).[cause](LogicException.md#cause)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:16](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L16)

___

### message

• **message**: `string`

#### Inherited from

[LogicException](LogicException.md).[message](LogicException.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string` = `'DomainException'`

#### Overrides

[LogicException](LogicException.md).[name](LogicException.md#name)

#### Defined in

[packages/exceptions/src/exceptions/domain.exception.ts:8](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/domain.exception.ts#L8)

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

[packages/exceptions/src/exceptions/base.exception.ts:27](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L27)
