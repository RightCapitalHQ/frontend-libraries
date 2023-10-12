[@rightcapital/date-helpers](../README.md) / [Exports](../modules.md) / DateHelpers

# Class: DateHelpers

A utility class that provides various date formatting and parsing methods.

## Table of contents

### Constructors

- [constructor](DateHelpers.md#constructor)

### Properties

- [isoDateFormat](DateHelpers.md#isodateformat)
- [usLocaleDateFormat](DateHelpers.md#uslocaledateformat)
- [usLocaleTimeFormat](DateHelpers.md#uslocaletimeformat)

### Methods

- [formatIsoDate](DateHelpers.md#formatisodate)
- [formatMediumDate](DateHelpers.md#formatmonthdayyear)
- [formatUsLocaleDate](DateHelpers.md#formatuslocaledate)
- [formatUsLocaleTime](DateHelpers.md#formatuslocaletime)
- [parseDateString](DateHelpers.md#parsedatestring)

## Constructors

### constructor

• **new DateHelpers**()

## Properties

### isoDateFormat

▪ `Static` **isoDateFormat**: `string` = `'yyyy-MM-dd'`

Format for date strings in ISO format, e.g., "2023-12-31"

#### Defined in

[date-helpers.ts:24](https://github.com/RightCapitalHQ/frontend-libraries/blob/b0683ea/packages/date-helpers/src/date-helpers.ts#L24)

___

### usLocaleDateFormat

▪ `Static` **usLocaleDateFormat**: `string` = `'MM/dd/yyyy'`

Format for date strings in US locale, e.g., "12/31/2023"

#### Defined in

[date-helpers.ts:18](https://github.com/RightCapitalHQ/frontend-libraries/blob/b0683ea/packages/date-helpers/src/date-helpers.ts#L18)

___

### usLocaleTimeFormat

▪ `Static` **usLocaleTimeFormat**: `string` = `'MM/dd/yyyy HH:mm:ss'`

Format for date and time strings in US locale, e.g., "12/31/2023 23:59:59"

#### Defined in

[date-helpers.ts:21](https://github.com/RightCapitalHQ/frontend-libraries/blob/b0683ea/packages/date-helpers/src/date-helpers.ts#L21)

## Methods

### formatIsoDate

▸ `Static` **formatIsoDate**(`dateSource`): `string`

Formats a date as an ISO date string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateSource` | [`DateType`](../modules.md#datetype) | The date to format, can be a Date object or a string. |

#### Returns

`string`

The formatted date string.

**`Example`**

```typescript
const isoDateString = DateHelpers.formatIsoDate(new Date(2023, 0, 31));
// Result: "2023-01-31"

// or

const isoDateString = DateHelpers.formatIsoDate("2025/10/20");
// Result: "2025-10-20"
```

#### Defined in

[date-helpers.ts:96](https://github.com/RightCapitalHQ/frontend-libraries/blob/b0683ea/packages/date-helpers/src/date-helpers.ts#L96)

___

### formatMediumDate

▸ `Static` **formatMediumDate**(`dateSource`): `string`

Formats a date as a string in the "Month day, year" format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateSource` | [`DateType`](../modules.md#datetype) | The date to format, can be a Date object or a string. |

#### Returns

`string`

The formatted date string.

**`Example`**

```typescript
const monthDayYearString = DateHelpers.formatMediumDate(new Date(2023, 0, 1));
// Result: "Jan 1, 2023"

// or

const monthDayYearString = DateHelpers.formatMediumDate("2023/01/01");
// Result: "Jan 1, 2023"
```

#### Defined in

[date-helpers.ts:186](https://github.com/RightCapitalHQ/frontend-libraries/blob/b0683ea/packages/date-helpers/src/date-helpers.ts#L186)

___

### formatUsLocaleDate

▸ `Static` **formatUsLocaleDate**(`dateSource`, `dateFormat?`): `string`

Formats a date as a US locale date string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateSource` | [`DateType`](../modules.md#datetype) | The date to format, can be a Date object or a string. |
| `dateFormat?` | `string` | Optional, a custom date format string. |

#### Returns

`string`

The formatted date string.

**`Example`**

```typescript
const usDateString = DateHelpers.formatUsLocaleDate(new Date(2023, 0, 31));
// Result: "01/31/2023"

// or

const usDateString = DateHelpers.formatUsLocaleDate("2025/10/20");
// Result: "10/20/2025"
```

#### Defined in

[date-helpers.ts:125](https://github.com/RightCapitalHQ/frontend-libraries/blob/b0683ea/packages/date-helpers/src/date-helpers.ts#L125)

___

### formatUsLocaleTime

▸ `Static` **formatUsLocaleTime**(`dateSource`, `dateFormat?`): `string`

Formats a date as a US locale time string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateSource` | [`DateType`](../modules.md#datetype) | The date to format, can be a Date object or a string. |
| `dateFormat?` | `string` | Optional, a custom date format string. |

#### Returns

`string`

The formatted time string.

**`Example`**

```typescript
const usTimeString = DateHelpers.formatUsLocaleTime(new Date(2023, 0, 31, 12, 0, 0));
// Result: "01/31/2023 12:00:00"

// or

const usTimeString = DateHelpers.formatUsLocaleTime("2025/10/20 12:00:00");
// Result: "10/20/2025 12:00:00"
```

#### Defined in

[date-helpers.ts:159](https://github.com/RightCapitalHQ/frontend-libraries/blob/b0683ea/packages/date-helpers/src/date-helpers.ts#L159)

___

### parseDateString

▸ `Static` **parseDateString**(`input`): `Date`

Converts a date string to a Date object using various possible formats.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The date string to convert. |

#### Returns

`Date`

The converted Date object.

**`Example`**

```typescript
const date = DateHelpers.parseDateString("2023/01/01");
// Result: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
```

**`Throws`**

Throws an exception if the date string cannot be parsed.

#### Defined in

[date-helpers.ts:39](https://github.com/RightCapitalHQ/frontend-libraries/blob/b0683ea/packages/date-helpers/src/date-helpers.ts#L39)
