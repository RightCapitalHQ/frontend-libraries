[**@rightcapital/date-helpers**](../README.md)

***

[@rightcapital/date-helpers](../modules.md) / DateHelpers

# Class: DateHelpers

Defined in: [date-helpers.ts:14](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L14)

A utility class that provides various date formatting and parsing methods.

## Constructors

### Constructor

> **new DateHelpers**(): `DateHelpers`

#### Returns

`DateHelpers`

## Properties

### isoDateFormat

> `static` **isoDateFormat**: `string` = `'yyyy-MM-dd'`

Defined in: [date-helpers.ts:22](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L22)

Format for date strings in ISO format, e.g., "2023-12-31"

***

### usLocaleDateFormat

> `static` **usLocaleDateFormat**: `string` = `'MM/dd/yyyy'`

Defined in: [date-helpers.ts:16](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L16)

Format for date strings in US locale, e.g., "12/31/2023"

***

### usLocaleDateTimeFormat

> `static` **usLocaleDateTimeFormat**: `string` = `'MM/dd/yyyy HH:mm:ss'`

Defined in: [date-helpers.ts:19](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L19)

Format for date and time strings in US locale, e.g., "12/31/2023 23:59:59"

## Methods

### formatDateLikeToIsoDateString()

> `static` **formatDateLikeToIsoDateString**(`dateInput`): `string`

Defined in: [date-helpers.ts:157](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L157)

Formats a date as an ISO date string.

#### Parameters

##### dateInput

[`DateLike`](../type-aliases/DateLike.md)

The date to format, can be a Date object or a string.

#### Returns

`string`

The formatted date string.

#### Example

```typescript
const isoDateString = DateHelpers.formatDateLikeToIsoDateString(new Date(2023, 0, 31));
// Result: "2023-01-31"

// or

const isoDateString = DateHelpers.formatDateLikeToIsoDateString("2025/10/20");
// Result: "2025-10-20"
```

***

### formatDateLikeToString()

> `static` **formatDateLikeToString**(`dateInput`, `dateFormat`): `string`

Defined in: [date-helpers.ts:119](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L119)

Formats a date-like input into a string using a specified date format.

This method accepts both `Date` objects and date strings as input and formats them into a string
using the provided date format. It internally handles parsing of date strings and formatting of Date objects.
If the input is an empty string, it returns the input without formatting. If the input is invalid or cannot be parsed,
an `InvalidArgumentException` is thrown.

#### Parameters

##### dateInput

[`DateLike`](../type-aliases/DateLike.md)

The date to format, can be a `Date` object or a string.

##### dateFormat

`string`

The date format string to use for formatting the date.

#### Returns

`string`

The formatted date string.

#### Example

```typescript
const formattedDate1 = DateHelpers.formatDateLikeToString(new Date(2023, 0, 31), 'MM/dd/yyyy');
// Result: "01/31/2023"

const formattedDate2 = DateHelpers.formatDateLikeToString("2023-01-31", 'yyyy-MM-dd');
// Result: "2023-01-31"

const formattedDate3 = DateHelpers.formatDateLikeToString("", 'MM/dd/yyyy');
// Result: ""
```

#### Throws

Throws an exception if the date string cannot be parsed or the input is invalid.

***

### formatDateLikeToUsLocaleDateString()

> `static` **formatDateLikeToUsLocaleDateString**(`dateInput`): `string`

Defined in: [date-helpers.ts:182](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L182)

Formats a date as a US locale date string.

#### Parameters

##### dateInput

[`DateLike`](../type-aliases/DateLike.md)

The date to format, can be a Date object or a string.

#### Returns

`string`

The formatted date string.

#### Example

```typescript
const usDateString = DateHelpers.formatDateLikeToUsLocaleDateString(new Date(2023, 0, 31));
// Result: "01/31/2023"

// or

const usDateString = DateHelpers.formatDateLikeToUsLocaleDateString("2025/10/20");
// Result: "10/20/2025"
```

***

### formatDateLikeToUsLocaleDateTimeString()

> `static` **formatDateLikeToUsLocaleDateTimeString**(`dateInput`): `string`

Defined in: [date-helpers.ts:209](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L209)

Formats a date as a US locale time string.

#### Parameters

##### dateInput

[`DateLike`](../type-aliases/DateLike.md)

The date to format, can be a Date object or a string.

#### Returns

`string`

The formatted time string.

#### Example

```typescript
const usTimeString = DateHelpers.formatDateLikeToUsLocaleDateTimeString(new Date(2023, 0, 31, 12, 0, 0));
// Result: "01/31/2023 12:00:00"

// or

const usTimeString = DateHelpers.formatDateLikeToUsLocaleDateTimeString("2025/10/20 12:00:00");
// Result: "10/20/2025 12:00:00"
```

***

### formatDateLikeToUsLocaleMediumDateString()

> `static` **formatDateLikeToUsLocaleMediumDateString**(`dateInput`): `string`

Defined in: [date-helpers.ts:241](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L241)

Formats a date as a string in the MDY format.

#### Parameters

##### dateInput

[`DateLike`](../type-aliases/DateLike.md)

The date to format, can be a Date object or a string.

#### Returns

`string`

The formatted date string.

#### Example

```typescript
const monthDayYearString = DateHelpers.formatDateLikeToUsLocaleMediumDateString(new Date(2023, 0, 1));
// Result: "Jan 1, 2023"

// or

const monthDayYearString = DateHelpers.formatDateLikeToUsLocaleMediumDateString("2023/01/01");
// Result: "Jan 1, 2023"
```

#### Remarks

Naming Origin: Derived from the Angular DatePipe official documentation.

Reference:

https://angular.io/api/common/DatePipe#:~:text=mediumDate

***

### parseDateString()

> `static` **parseDateString**(`input`): `Date`

Defined in: [date-helpers.ts:60](https://github.com/RightCapitalHQ/frontend-libraries/blob/37d3759414217a78db138b4b9b1b420fa796a485/packages/date-helpers/src/date-helpers.ts#L60)

Converts a date string to a Date object using various possible formats.

#### Parameters

##### input

`string`

The date string to convert.

#### Returns

`Date`

The converted Date object.

#### Example

```typescript
const date = DateHelpers.parseDateString("2023/01/01");
// Result: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
```

#### Throws

Throws an exception if the date string cannot be parsed.
