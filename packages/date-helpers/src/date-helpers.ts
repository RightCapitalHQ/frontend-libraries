import { InvalidArgumentException } from '@rightcapital/exceptions';
import { format, isValid, parse, parseISO } from 'date-fns';

export type DateLike = Date | string;

const getParsedDate = (dateInput: DateLike) =>
  typeof dateInput === 'string'
    ? DateHelpers.parseDateString(dateInput)
    : dateInput;

/**
 * A utility class that provides various date formatting and parsing methods.
 */
export class DateHelpers {
  /** Format for date strings in US locale, e.g., "12/31/2023" */
  public static usLocaleDateFormat = 'MM/dd/yyyy';

  /** Format for date and time strings in US locale, e.g., "12/31/2023 23:59:59" */
  public static usLocaleDateTimeFormat = 'MM/dd/yyyy HH:mm:ss';

  /** Format for date strings in ISO format, e.g., "2023-12-31" */
  public static isoDateFormat = 'yyyy-MM-dd';

  private static ensureValidDateInput(
    input: unknown,
  ): asserts input is DateLike {
    if (input === null || input === undefined) {
      throw new InvalidArgumentException(
        `Input cannot be null or undefined. Received: ${input}`,
      );
    }

    if (input instanceof Date) {
      return; // It's a valid Date object.
    }

    if (typeof input === 'string') {
      return; // It's a valid string.
    }

    throw new InvalidArgumentException(
      `Input must be a Date object or a string. Received: ${typeof input} - ${input}`,
    );
  }

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
    this.ensureValidDateInput(input);

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
      DateHelpers.usLocaleDateTimeFormat,
    ];

    possibleFormats.some((pattern) => {
      output = parse(input, pattern, new Date());
      return isValid(output);
    });

    if (!isValid(output)) {
      throw new InvalidArgumentException(
        `Invalid Date: unable to parse date string - ${input}. The input might not match any expected formats or is not a valid date.`,
      );
    }

    return output;
  }

  /**
   * Formats a date-like input into a string using a specified date format.
   *
   * This method accepts both `Date` objects and date strings as input and formats them into a string
   * using the provided date format. It internally handles parsing of date strings and formatting of Date objects.
   * If the input is an empty string, it returns the input without formatting. If the input is invalid or cannot be parsed,
   * an `InvalidArgumentException` is thrown.
   *
   * @example
   * ```typescript
   * const formattedDate1 = DateHelpers.formatDateLikeToString(new Date(2023, 0, 31), 'MM/dd/yyyy');
   * // Result: "01/31/2023"
   *
   * const formattedDate2 = DateHelpers.formatDateLikeToString("2023-01-31", 'yyyy-MM-dd');
   * // Result: "2023-01-31"
   *
   * const formattedDate3 = DateHelpers.formatDateLikeToString("", 'MM/dd/yyyy');
   * // Result: ""
   * ```
   *
   * @param dateInput - The date to format, can be a `Date` object or a string.
   * @param dateFormat - The date format string to use for formatting the date.
   * @returns The formatted date string.
   * @throws {InvalidArgumentException} Throws an exception if the date string cannot be parsed or the input is invalid.
   */
  public static formatDateLikeToString(
    dateInput: DateLike,
    dateFormat: string,
  ): string {
    this.ensureValidDateInput(dateInput);

    // Do nothing with empty strings
    if (dateInput === '') {
      return dateInput;
    }

    try {
      return format(getParsedDate(dateInput), dateFormat);
    } catch (error) {
      throw new InvalidArgumentException(
        `Unable to format date: ${dateInput} with format: ${dateFormat}`,
        error,
      );
    }
  }

  /**
   * Formats a date as an ISO date string.
   *
   * @example
   * ```typescript
   * const isoDateString = DateHelpers.formatDateLikeToIsoDateString(new Date(2023, 0, 31));
   * // Result: "2023-01-31"
   *
   * // or
   *
   * const isoDateString = DateHelpers.formatDateLikeToIsoDateString("2025/10/20");
   * // Result: "2025-10-20"
   * ```
   *
   * @param dateInput - The date to format, can be a Date object or a string.
   * @returns The formatted date string.
   */
  public static formatDateLikeToIsoDateString(dateInput: DateLike): string {
    return DateHelpers.formatDateLikeToString(
      dateInput,
      DateHelpers.isoDateFormat,
    );
  }

  /**
   * Formats a date as a US locale date string.
   *
   * @example
   * ```typescript
   * const usDateString = DateHelpers.formatDateLikeToUsLocaleDateString(new Date(2023, 0, 31));
   * // Result: "01/31/2023"
   *
   * // or
   *
   * const usDateString = DateHelpers.formatDateLikeToUsLocaleDateString("2025/10/20");
   * // Result: "10/20/2025"
   * ```
   *
   * @param dateInput - The date to format, can be a Date object or a string.
   * @param dateFormat - Optional, a custom date format string.
   * @returns The formatted date string.
   */
  public static formatDateLikeToUsLocaleDateString(
    dateInput: DateLike,
  ): string {
    return DateHelpers.formatDateLikeToString(
      dateInput,
      DateHelpers.usLocaleDateFormat,
    );
  }

  /**
   * Formats a date as a US locale time string.
   *
   * @example
   * ```typescript
   * const usTimeString = DateHelpers.formatDateLikeToUsLocaleDateTimeString(new Date(2023, 0, 31, 12, 0, 0));
   * // Result: "01/31/2023 12:00:00"
   *
   * // or
   *
   * const usTimeString = DateHelpers.formatDateLikeToUsLocaleDateTimeString("2025/10/20 12:00:00");
   * // Result: "10/20/2025 12:00:00"
   * ```
   *
   * @param dateInput - The date to format, can be a Date object or a string.
   * @param dateFormat - Optional, a custom date format string.
   * @returns The formatted time string.
   */
  public static formatDateLikeToUsLocaleDateTimeString(
    dateInput: DateLike,
  ): string {
    return DateHelpers.formatDateLikeToString(
      dateInput,
      DateHelpers.usLocaleDateTimeFormat,
    );
  }

  /**
   * Formats a date as a string in the MDY format.
   *
   * @example
   * ```typescript
   * const monthDayYearString = DateHelpers.formatDateLikeToUsLocaleMediumDateString(new Date(2023, 0, 1));
   * // Result: "Jan 1, 2023"
   *
   * // or
   *
   * const monthDayYearString = DateHelpers.formatDateLikeToUsLocaleMediumDateString("2023/01/01");
   * // Result: "Jan 1, 2023"
   * ```
   *
   * @param dateInput - The date to format, can be a Date object or a string.
   * @returns The formatted date string.
   *
   * @remarks Naming Origin: Derived from the Angular DatePipe official documentation.
   *
   * Reference:
   *
   * https://angular.io/api/common/DatePipe#:~:text=mediumDate
   */
  public static formatDateLikeToUsLocaleMediumDateString(
    dateInput: DateLike,
  ): string {
    return DateHelpers.formatDateLikeToString(dateInput, 'MMM d, yyyy');
  }
}
