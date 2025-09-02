[@rightcapital/assertion-helpers](../README.md) / [Exports](../modules.md) / AssertionHelpers

# Class: AssertionHelpers

AssertionHelpers is a utility class for type-safe assertions and validation.
When assertions fail, it throws `UnexpectedValueException`.

**`Example`**

```typescript
// Basic assertion
AssertionHelpers.assert(user.age >= 18, 'User must be at least 18 years old');

// Non-nullable assertion with type narrowing
AssertionHelpers.assertNonNullable(user, 'User cannot be null');
// user is now typed as NonNullable<T>

// Ensure with type guard
const admin = AssertionHelpers.ensure(currentUser, isAdminUser, 'Admin required');
// admin is now typed as AdminUser
```

## Table of contents

### Constructors

- [constructor](AssertionHelpers.md#constructor)

### Methods

- [assert](AssertionHelpers.md#assert)
- [assertExhaustive](AssertionHelpers.md#assertexhaustive)
- [assertNonNullable](AssertionHelpers.md#assertnonnullable)
- [assertUnreachable](AssertionHelpers.md#assertunreachable)
- [ensure](AssertionHelpers.md#ensure)
- [ensureNonNullable](AssertionHelpers.md#ensurenonnullable)
- [throwError](AssertionHelpers.md#throwerror)

## Constructors

### constructor

• **new AssertionHelpers**(): [`AssertionHelpers`](AssertionHelpers.md)

#### Returns

[`AssertionHelpers`](AssertionHelpers.md)

## Methods

### assert

▸ **assert**(`value`, `message?`): asserts value

Basic assertion: verifies that a value or expression is `true`, otherwise throws an exception.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to assert as truthy |
| `message?` | `string` | Optional custom error message |

#### Returns

asserts value

**`Example`**

```typescript
// Basic usage
AssertionHelpers.assert(user.age >= 18, 'User must be at least 18 years old');

// Condition validation
const isValid = validateData(data);
AssertionHelpers.assert(isValid, 'Data validation failed');
```

#### Defined in

assertion-helpers.ts:48

___

### assertExhaustive

▸ **assertExhaustive**(`value`, `message?`): `never`

Used for exhaustiveness checking of union types. Ensures switch or if-else statements cover all possible types.
Leverages TypeScript's `never` type to catch missing branches at compile time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `never` | The value that should be of type `never` if all cases are handled |
| `message?` | `string` | Optional custom error message |

#### Returns

`never`

Never returns (always throws)

**`Example`**

```typescript
type Action =
  | { type: 'ADD'; payload: number }
  | { type: 'SUBTRACT'; payload: number }
  | { type: 'MULTIPLY'; payload: number };

function reducer(action: Action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUBTRACT':
      return state - action.payload;
    case 'MULTIPLY':
      return state * action.payload;
    default:
      // If all types are exhausted, action is of type never
      // If new Action types are added but not handled, TypeScript will report error
      return AssertionHelpers.assertExhaustive(action);
                                            // ^ never
  }
}
```

#### Defined in

assertion-helpers.ts:195

___

### assertNonNullable

▸ **assertNonNullable**\<`T`\>(`value`, `message?`): asserts value is NonNullable\<T\>

Asserts that a value is not `null` or `undefined`, providing TypeScript type narrowing to `NonNullable<T>`.
Ensures subsequent code can safely access the value.

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

**`Example`**

```typescript
function processUser(user: User | null | undefined) {
  AssertionHelpers.assertNonNullable(user, 'User cannot be null');
  // user is now typed as User
  console.log(user.name); // Safe to access
}
```

#### Defined in

assertion-helpers.ts:70

___

### assertUnreachable

▸ **assertUnreachable**(`message?`): `never`

Marks code branches that should theoretically never be reached.
Used for defensive programming to prevent unexpected code execution when data or logic doesn't match expectations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `string` | Optional custom error message |

#### Returns

`never`

Never returns (always throws)

**`Example`**

```typescript
function processStatus(status: 'active' | 'inactive' | 'activating') {
  if (status === 'active') {
    // Handle active state
  } else if (status === 'inactive') {
    // Handle inactive state  
  } else {
    // According to business logic, this should never be reached
    AssertionHelpers.assertUnreachable(`Unexpected status value: ${status}`);
  }
}
```

#### Defined in

assertion-helpers.ts:159

___

### ensure

▸ **ensure**\<`T`, `S`\>(`value`, `predicate`, `message?`): `S`

Similar to `assert`, but returns the value. Ensures a value matches a type predicate and returns it with narrowed type.

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

**`Example`**

```typescript
// Define type guard
function isAdminUser(user: User): user is AdminUser {
  return user.role === 'admin';
}

// Use ensure to get type-safe value
const admin = AssertionHelpers.ensure(
  currentUser,
  isAdminUser,
  'Admin privileges required'
);
// admin is typed as AdminUser
```

#### Defined in

assertion-helpers.ts:103

___

### ensureNonNullable

▸ **ensureNonNullable**\<`T`\>(`value`, `message?`): `NonNullable`\<`T`\>

Similar to `assertNonNullable`, but returns the value. Ensures a value is not null/undefined and returns it.

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

**`Example`**

```typescript
// Use in expressions
const config = AssertionHelpers.ensureNonNullable(
  getConfig(),
  'Configuration not found'
);

// Chain calls
const userName = AssertionHelpers.ensureNonNullable(user, 'User not found').name;
```

#### Defined in

assertion-helpers.ts:131

___

### throwError

▸ **throwError**(`name`, `value`, `message`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `unknown` |
| `message` | `undefined` \| `string` |

#### Returns

`never`

#### Defined in

assertion-helpers.ts:22
