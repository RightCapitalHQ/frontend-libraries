[@rightcapital/date-helpers](../README.md) / [Exports](../modules.md) / DateHelpers

# Class: DateHelpers

A utility class that provides various date formatting and parsing methods.

## Table of contents

### Constructors

- [constructor](DateHelpers.md#constructor)

### Properties

- [isoDateFormat](DateHelpers.md#isodateformat)
- [usLocaleDateFormat](DateHelpers.md#uslocaledateformat)
- [usLocaleDateTimeFormat](DateHelpers.md#uslocaledatetimeformat)

### Methods

- [formatDateLikeToIsoDateString](DateHelpers.md#formatdateliketoisodatestring)
- [formatDateLikeToString](DateHelpers.md#formatdateliketostring)
- [formatDateLikeToUsLocaleDateString](DateHelpers.md#formatdateliketouslocaledatestring)
- [formatDateLikeToUsLocaleDateTimeString](DateHelpers.md#formatdateliketouslocaledatetimestring)
- [formatDateLikeToUsLocaleMediumDateString](DateHelpers.md#formatdateliketouslocalemediumdatestring)
- [parseDateString](DateHelpers.md#parsedatestring)

## Constructors

### constructor

• **new DateHelpers**()

## Properties

### isoDateFormat

▪ `Static` **isoDateFormat**: `string` = `'yyyy-MM-dd'`

Format for date strings in ISO format, e.g., "2023-12-31"

#### Defined in

[date-helpers.ts:23](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L23)

---

### usLocaleDateFormat

▪ `Static` **usLocaleDateFormat**: `string` = `'MM/dd/yyyy'`

Format for date strings in US locale, e.g., "12/31/2023"

#### Defined in

[date-helpers.ts:17](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L17)

---

### usLocaleDateTimeFormat

▪ `Static` **usLocaleDateTimeFormat**: `string` = `'MM/dd/yyyy HH:mm:ss'`

Format for date and time strings in US locale, e.g., "12/31/2023 23:59:59"

#### Defined in

[date-helpers.ts:20](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L20)

## Methods

### formatDateLikeToIsoDateString

▸ `Static` **formatDateLikeToIsoDateString**(`dateInput`): `string`

Formats a date as an ISO date string.

#### Parameters

| Name        | Type                                 | Description                                           |
| :---------- | :----------------------------------- | :---------------------------------------------------- |
| `dateInput` | [`DateLike`](../modules.md#datelike) | The date to format, can be a Date object or a string. |

#### Returns

`string`

The formatted date string.

**`Example`**

```typescript
const isoDateString = DateHelpers.formatDateLikeToIsoDateString(
  new Date(2023, 0, 31),
);
// Result: "2023-01-31"

// or

const isoDateString = DateHelpers.formatDateLikeToIsoDateString('2025/10/20');
// Result: "2025-10-20"
```

#### Defined in

[date-helpers.ts:139](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L139)

---

### formatDateLikeToString

▸ `Static` **formatDateLikeToString**(`dateInput`, `dateFormat`): `string`

Formats a date-like input into a string using a specified date format.

This method accepts both `Date` objects and date strings as input and formats them into a string
using the provided date format. It internally handles parsing of date strings and formatting of Date objects.
If the input is an empty string, it returns the input without formatting. If the input is invalid or cannot be parsed,
an `InvalidArgumentException` is thrown.

#### Parameters

| Name         | Type                                 | Description                                             |
| :----------- | :----------------------------------- | :------------------------------------------------------ |
| `dateInput`  | [`DateLike`](../modules.md#datelike) | The date to format, can be a `Date` object or a string. |
| `dateFormat` | `string`                             | The date format string to use for formatting the date.  |

#### Returns

`string`

The formatted date string.

**`Example`**

```typescript
const formattedDate1 = DateHelpers.formatDateLikeToString(
  new Date(2023, 0, 31),
  'MM/dd/yyyy',
);
// Result: "01/31/2023"

const formattedDate2 = DateHelpers.formatDateLikeToString(
  '2023-01-31',
  'yyyy-MM-dd',
);
// Result: "2023-01-31"

const formattedDate3 = DateHelpers.formatDateLikeToString('', 'MM/dd/yyyy');
// Result: ""
```

**`Throws`**

Throws an exception if the date string cannot be parsed or the input is invalid.

#### Defined in

[date-helpers.ts:103](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L103)

---

### formatDateLikeToUsLocaleDateString

▸ `Static` **formatDateLikeToUsLocaleDateString**(`dateInput`): `string`

Formats a date as a US locale date string.

#### Parameters

| Name        | Type                                 | Description                                           |
| :---------- | :----------------------------------- | :---------------------------------------------------- |
| `dateInput` | [`DateLike`](../modules.md#datelike) | The date to format, can be a Date object or a string. |

#### Returns

`string`

The formatted date string.

**`Example`**

```typescript
const usDateString = DateHelpers.formatDateLikeToUsLocaleDateString(
  new Date(2023, 0, 31),
);
// Result: "01/31/2023"

// or

const usDateString =
  DateHelpers.formatDateLikeToUsLocaleDateString('2025/10/20');
// Result: "10/20/2025"
```

#### Defined in

[date-helpers.ts:164](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L164)

---

### formatDateLikeToUsLocaleDateTimeString

▸ `Static` **formatDateLikeToUsLocaleDateTimeString**(`dateInput`): `string`

Formats a date as a US locale time string.

#### Parameters

| Name        | Type                                 | Description                                           |
| :---------- | :----------------------------------- | :---------------------------------------------------- |
| `dateInput` | [`DateLike`](../modules.md#datelike) | The date to format, can be a Date object or a string. |

#### Returns

`string`

The formatted time string.

**`Example`**

```typescript
const usTimeString = DateHelpers.formatDateLikeToUsLocaleDateTimeString(
  new Date(2023, 0, 31, 12, 0, 0),
);
// Result: "01/31/2023 12:00:00"

// or

const usTimeString = DateHelpers.formatDateLikeToUsLocaleDateTimeString(
  '2025/10/20 12:00:00',
);
// Result: "10/20/2025 12:00:00"
```

#### Defined in

[date-helpers.ts:191](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L191)

---

### formatDateLikeToUsLocaleMediumDateString

▸ `Static` **formatDateLikeToUsLocaleMediumDateString**(`dateInput`): `string`

Formats a date as a string in the MDY format.

#### Parameters

| Name        | Type                                 | Description                                           |
| :---------- | :----------------------------------- | :---------------------------------------------------- |
| `dateInput` | [`DateLike`](../modules.md#datelike) | The date to format, can be a Date object or a string. |

#### Returns

`string`

The formatted date string.

**`Example`**

```typescript
const monthDayYearString = DateHelpers.formatDateLikeToUsLocaleMediumDateString(
  new Date(2023, 0, 1),
);
// Result: "Jan 1, 2023"

// or

const monthDayYearString =
  DateHelpers.formatDateLikeToUsLocaleMediumDateString('2023/01/01');
// Result: "Jan 1, 2023"
```

**`Remarks`**

Naming Origin: Derived from the Angular DatePipe official documentation.

Reference:

https://angular.io/api/common/DatePipe#:~:text=mediumDate

#### Defined in

[date-helpers.ts:223](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L223)

---

### parseDateString

▸ `Static` **parseDateString**(`input`): `Date`

Converts a date string to a Date object using various possible formats.

#### Parameters

| Name    | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `input` | `string` | The date string to convert. |

#### Returns

`Date`

The converted Date object.

**`Example`**

```typescript
const date = DateHelpers.parseDateString('2023/01/01');
// Result: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
```

**`Throws`**

Throws an exception if the date string cannot be parsed.

#### Defined in

[date-helpers.ts:38](https://github.com/RightCapitalHQ/frontend-libraries/blob/1759540/packages/date-helpers/src/date-helpers.ts#L38)
