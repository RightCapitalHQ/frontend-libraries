[**@rightcapital/exceptions**](../README.md)

***

[@rightcapital/exceptions](../modules.md) / DomainException

# Class: DomainException

Defined in: [packages/exceptions/src/exceptions/domain.exception.ts:7](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/exceptions/src/exceptions/domain.exception.ts#L7)

Exception thrown if a value does not adhere to a defined valid data domain.

## Extends

- [`LogicException`](LogicException.md)

## Constructors

### Constructor

> **new DomainException**(`message`, `cause?`): `DomainException`

Defined in: [packages/exceptions/src/exceptions/base.exception.ts:17](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/exceptions/src/exceptions/base.exception.ts#L17)

#### Parameters

##### message

`string`

A human-readable description of the error.

##### cause?

`unknown`

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Returns

`DomainException`

#### Inherited from

[`LogicException`](LogicException.md).[`constructor`](LogicException.md#constructor)

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in: [packages/exceptions/src/exceptions/base.exception.ts:19](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/exceptions/src/exceptions/base.exception.ts#L19)

The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.

#### Inherited from

[`LogicException`](LogicException.md).[`cause`](LogicException.md#cause)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

[`LogicException`](LogicException.md).[`message`](LogicException.md#message)

***

### name

> **name**: `string` = `'DomainException'`

Defined in: [packages/exceptions/src/exceptions/domain.exception.ts:8](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/exceptions/src/exceptions/domain.exception.ts#L8)

#### Overrides

[`LogicException`](LogicException.md).[`name`](LogicException.md#name)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`LogicException`](LogicException.md).[`stack`](LogicException.md#stack)

## Methods

### isCausedBy()

> **isCausedBy**(`cause`): `boolean`

Defined in: [packages/exceptions/src/exceptions/base.exception.ts:30](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/exceptions/src/exceptions/base.exception.ts#L30)

If the Error is caused by the cause we passed in the construction method

#### Parameters

##### cause

`unknown`

the cause we assume that cause the current exception

#### Returns

`boolean`

true if the cause we passed is the original cause when the Exception constructed. otherwise, it returns false

#### Inherited from

[`LogicException`](LogicException.md).[`isCausedBy`](LogicException.md#iscausedby)
