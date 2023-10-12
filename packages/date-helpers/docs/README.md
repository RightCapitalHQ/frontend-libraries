@rightcapital/date-helpers / [Exports](modules.md)

# `@rightcapital/date-helpers`

A utility class providing various date formatting and parsing methods in TypeScript.

## Features

- Convert date strings to Date objects with `parseDateString`.
- Format dates to different string formats, e.g., ISO, US locale, etc.
- Handle various date string formats for parsing and formatting.

## Installation

```bash
pnpm add @rightcapital/date-helpers
```

## Usage

### Parse Date String

Convert a date string to a Date object using various possible formats.

```typescript
import { DateHelpers } from '@rightcapital/date-helpers';
const date = DateHelpers.parseDateString("2023/01/01");
```

### Format to ISO Date String

Format a date as an ISO date string.

```typescript
import { DateHelpers } from '@rightcapital/date-helpers';

const isoDateString = DateHelpers.formatISO(new Date(2023, 0, 1));
// Result: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
```

### Format to US Locale

Format a date as a US locale date string.

```typescript
import { DateHelpers } from '@rightcapital/date-helpers';
const usDateString = DateHelpers.formatUsLocaleDate(new Date(2023, 0, 31));
// Result: "01/31/2023"
```

Formats a date as a US locale time string.

```typescript
import { DateHelpers } from '@rightcapital/date-helpers';
const usDateString = DateHelpers.formatUsLocaleTime("2025/10/20 12:00:00");
// Result: "10/20/2025 12:00:00"
```

### Format to "Month day, year"

Formats a date as a string in the "Month day, year" format.
```typescript
const monthDayYearString = DateHelpers.formatMediumDate(new Date(2023, 0, 1));
// Result: "Jan 1, 2023"
```

## API Reference

TODO
