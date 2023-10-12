import { InvalidArgumentException } from '@rightcapital/exceptions';
import { captureException, withScope, Scope } from '@sentry/browser';
import { format, formatISO, isValid, parse, parseISO } from 'date-fns';

export type DateType = Date | string;

const getParsedDate = (dateSource: DateType) =>
  typeof dateSource === 'string'
    ? DateHelpers.parseDateString(dateSource)
    : dateSource;

/**
 * A utility class that provides various date formatting and parsing methods.
 */
export class DateHelpers {
  /** Format for date strings in US locale, e.g., "12/31/2023" */
  public static usLocaleDateFormat = 'MM/dd/yyyy';

  /** Format for date and time strings in US locale, e.g., "12/31/2023 23:59:59" */
  public static usLocaleTimeFormat = 'MM/dd/yyyy HH:mm:ss';

  /** Format for date strings in ISO format, e.g., "2023-12-31" */
  public static isoDateFormat = 'yyyy-MM-dd';

  /**
   * Converts a date string to a Date object using various possible formats.
   *
   * @example
   * ```typescript
   * const date = DateHelpers.parseDateString("2023/01/01");
   * // Result: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
   * ```
   *
   * @param input - The date string to convert.
   * @returns The converted Date object.
   * @throws {InvalidArgumentException} Throws an exception if the date string cannot be parsed.
   */
  public static parseDateString(input: string): Date {
    let output = parseISO(input);

    if (isValid(output)) {
      return output;
    }

    const possibleFormats = [
      'MM/dd/yy',
      DateHelpers.usLocaleDateFormat,
      DateHelpers.isoDateFormat,
      'yyyy/MM/dd',
      'M/d/yyyy',
      'MMM d, yyyy',
      'MMM yyyy',
      DateHelpers.usLocaleTimeFormat,
    ];

    possibleFormats.some((pattern) => {
      output = parse(input, pattern, new Date());
      return isValid(output);
    });

    if (!isValid(output)) {
      withScope((scope: Scope) => {
        scope.setLevel('error');
        scope.setExtras({
          input,
        });
        captureException(
          new InvalidArgumentException(
            `Invalid Date: unable to parse date string - ${input}`,
          ),
        );
      });
    }

    return output;
  }

  /**
   * Formats a date as an ISO date string.
   *
   * @example
   * ```typescript
   * const isoDateString = DateHelpers.formatIsoDate(new Date(2023, 0, 31));
   * // Result: "2023-01-31"
   *
   * // or
   *
   * const isoDateString = DateHelpers.formatIsoDate("2025/10/20");
   * // Result: "2025-10-20"
   * ```
   *
   * @param dateSource - The date to format, can be a Date object or a string.
   * @returns The formatted date string.
   */
  public static formatIsoDate(dateSource: DateType): string {
    // Do nothing with empty strings
    if (dateSource === '') {
      return dateSource;
    }

    return formatISO(getParsedDate(dateSource), {
      representation: 'date',
    });
  }

  /**
   * Formats a date as a US locale date string.
   *
   * @example
   * ```typescript
   * const usDateString = DateHelpers.formatUsLocaleDate(new Date(2023, 0, 31));
   * // Result: "01/31/2023"
   *
   * // or
   *
   * const usDateString = DateHelpers.formatUsLocaleDate("2025/10/20");
   * // Result: "10/20/2025"
   * ```
   *
   * @param dateSource - The date to format, can be a Date object or a string.
   * @param dateFormat - Optional, a custom date format string.
   * @returns The formatted date string.
   */
  public static formatUsLocaleDate(
    dateSource: DateType,
    dateFormat?: string,
  ): string {
    // Do nothing with empty strings
    if (dateSource === '') {
      return dateSource;
    }

    if (dateFormat) {
      return format(getParsedDate(dateSource), dateFormat);
    }

    return format(getParsedDate(dateSource), DateHelpers.usLocaleDateFormat);
  }

  /**
   * Formats a date as a US locale time string.
   *
   * @example
   * ```typescript
   * const usTimeString = DateHelpers.formatUsLocaleTime(new Date(2023, 0, 31, 12, 0, 0));
   * // Result: "01/31/2023 12:00:00"
   *
   * // or
   *
   * const usTimeString = DateHelpers.formatUsLocaleTime("2025/10/20 12:00:00");
   * // Result: "10/20/2025 12:00:00"
   * ```
   *
   * @param dateSource - The date to format, can be a Date object or a string.
   * @param dateFormat - Optional, a custom date format string.
   * @returns The formatted time string.
   */
  public static formatUsLocaleTime(
    dateSource: DateType,
    dateFormat?: string,
  ): string {
    return DateHelpers.formatUsLocaleDate(
      dateSource,
      dateFormat ?? DateHelpers.usLocaleTimeFormat,
    );
  }

  /**
   * Formats a date as a string in the "Month day, year" format.
   *
   * @example
   * ```typescript
   * const monthDayYearString = DateHelpers.formatMediumDate(new Date(2023, 0, 1));
   * // Result: "Jan 1, 2023"
   *
   * // or
   *
   * const monthDayYearString = DateHelpers.formatMediumDate("2023/01/01");
   * // Result: "Jan 1, 2023"
   * ```
   *
   * @param dateSource - The date to format, can be a Date object or a string.
   * @returns The formatted date string.
   *
   * @remarks Naming Origin: Derived from the Angular DatePipe official documentation.
   *
   * Reference:
   *
   * https://angular.io/api/common/DatePipe#:~:text=mediumDate
   */
  public static formatMediumDate(dateSource: DateType): string {
    return format(getParsedDate(dateSource), 'MMM d, yyyy');
  }
}
