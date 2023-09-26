[@rightcapital/exceptions](../README.md) / [Exports](../modules.md) / BadMethodCallException

# Class: BadMethodCallException

Exception thrown if a callback refers to an undefined method or if some arguments are missing.

## Hierarchy

- [`BadFunctionCallException`](BadFunctionCallException.md)

  ↳ **`BadMethodCallException`**

## Table of contents

### Constructors

- [constructor](BadMethodCallException.md#constructor)

### Properties

- [cause](BadMethodCallException.md#cause)
- [message](BadMethodCallException.md#message)
- [name](BadMethodCallException.md#name)
- [stack](BadMethodCallException.md#stack)

### Methods

- [isCausedBy](BadMethodCallException.md#iscausedby)

## Constructors

### constructor

• **new BadMethodCallException**(`message`, `cause?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | A human-readable description of the error. |
| `cause?` | `any` | The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause. |

#### Inherited from

[BadFunctionCallException](BadFunctionCallException.md).[constructor](BadFunctionCallException.md#constructor)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:14](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L14)

## Properties

### cause

• `Optional` **cause**: `any`

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Inherited from

[BadFunctionCallException](BadFunctionCallException.md).[cause](BadFunctionCallException.md#cause)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:16](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L16)

___

### message

• **message**: `string`

#### Inherited from

[BadFunctionCallException](BadFunctionCallException.md).[message](BadFunctionCallException.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string` = `'BadMethodCallException'`

#### Overrides

[BadFunctionCallException](BadFunctionCallException.md).[name](BadFunctionCallException.md#name)

#### Defined in

[packages/exceptions/src/exceptions/bad-method-call.exception.ts:8](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/bad-method-call.exception.ts#L8)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[BadFunctionCallException](BadFunctionCallException.md).[stack](BadFunctionCallException.md#stack)

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

[BadFunctionCallException](BadFunctionCallException.md).[isCausedBy](BadFunctionCallException.md#iscausedby)

#### Defined in

[packages/exceptions/src/exceptions/base.exception.ts:27](https://github.com/RightCapitalHQ/frontend-libraries/blob/d583627/packages/exceptions/src/exceptions/base.exception.ts#L27)
