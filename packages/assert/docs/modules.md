[@rightcapital/assert](README.md) / Exports

# @rightcapital/assert

## Table of contents

### Functions

- [assert](modules.md#assert)
- [assertExhaustive](modules.md#assertexhaustive)
- [assertNonNullable](modules.md#assertnonnullable)
- [assertUnreachable](modules.md#assertunreachable)
- [ensure](modules.md#ensure)
- [ensureNonNullable](modules.md#ensurenonnullable)

## Functions

### assert

▸ **assert**(`value`, `message?`): asserts value

Basic assertion: verifies that a value or expression is `true`, otherwise throws an exception.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to assert as true |
| `message?` | `string` | Optional custom error message |

#### Returns

asserts value

**`Author`**

lixiaoyan <lxy.lixiaoyan@gmail.com>

#### Defined in

[index.ts:25](https://github.com/RightCapitalHQ/frontend-libraries/blob/10c7ccf/packages/assert/src/index.ts#L25)

___

### assertExhaustive

▸ **assertExhaustive**(`value`, `message?`): `never`

Ensures switch or if-else statements exhaust all members of a union type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `never` | The value that should be `never` if all cases are handled |
| `message?` | `string` | Optional custom error message |

#### Returns

`never`

Never returns (always throws)

**`Author`**

lixiaoyan <lxy.lixiaoyan@gmail.com>

#### Defined in

[index.ts:102](https://github.com/RightCapitalHQ/frontend-libraries/blob/10c7ccf/packages/assert/src/index.ts#L102)

___

### assertNonNullable

▸ **assertNonNullable**\<`T`\>(`value`, `message?`): asserts value is NonNullable\<T\>

Asserts that a value is not `null` or `undefined`, narrowing it to `NonNullable<T>`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to check for null/undefined |
| `message?` | `string` | Optional custom error message |

#### Returns

asserts value is NonNullable\<T\>

**`Author`**

lixiaoyan <lxy.lixiaoyan@gmail.com>

#### Defined in

[index.ts:38](https://github.com/RightCapitalHQ/frontend-libraries/blob/10c7ccf/packages/assert/src/index.ts#L38)

___

### assertUnreachable

▸ **assertUnreachable**(`message?`): `never`

Marks code branches that should theoretically never be reached.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `string` | Optional custom error message |

#### Returns

`never`

Never returns (always throws)

**`Author`**

lixiaoyan <lxy.lixiaoyan@gmail.com>

#### Defined in

[index.ts:90](https://github.com/RightCapitalHQ/frontend-libraries/blob/10c7ccf/packages/assert/src/index.ts#L90)

___

### ensure

▸ **ensure**\<`T`, `S`\>(`value`, `predicate`, `message?`): `S`

Ensures a value matches a type predicate and returns it with narrowed type.

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to validate |
| `predicate` | (`value`: `T`) => value is S | Type guard function that validates the value |
| `message?` | `string` | Optional custom error message |

#### Returns

`S`

The value with narrowed type

**`Author`**

lixiaoyan <lxy.lixiaoyan@gmail.com>

#### Defined in

[index.ts:56](https://github.com/RightCapitalHQ/frontend-libraries/blob/10c7ccf/packages/assert/src/index.ts#L56)

___

### ensureNonNullable

▸ **ensureNonNullable**\<`T`\>(`value`, `message?`): `NonNullable`\<`T`\>

Ensures a value is not null/undefined and returns it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to check for null/undefined |
| `message?` | `string` | Optional custom error message |

#### Returns

`NonNullable`\<`T`\>

The non-nullable value

**`Author`**

lixiaoyan <lxy.lixiaoyan@gmail.com>

#### Defined in

[index.ts:73](https://github.com/RightCapitalHQ/frontend-libraries/blob/10c7ccf/packages/assert/src/index.ts#L73)
