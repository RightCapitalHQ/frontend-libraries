import { parseISO } from 'date-fns';
import { DateHelpers } from '../src/date-helpers';
import { InvalidArgumentException } from '@rightcapital/exceptions';

const output = parseISO('2019-10-21');

describe('DateHelpers input validation', () => {
  it('parseDateString should throw for unrecognized date formats', () => {
    const invalidDateString = 'ABCDE';
    expect(() => DateHelpers.parseDateString(invalidDateString)).toThrowError(
      InvalidArgumentException,
    );
  });

  it('parseDateString should throw error for null or undefined input', () => {
    // @ts-expect-error - intentionally passing invalid input to test error handling
    expect(() => DateHelpers.parseDateString(null)).toThrow(
      'Input cannot be null or undefined.',
    );

    // @ts-expect-error - intentionally passing invalid input to test error handling
    expect(() => DateHelpers.parseDateString(undefined)).toThrow(
      'Input cannot be null or undefined.',
    );
  });

  it('formatDateLikeToString should throw InvalidArgumentException for invalid date input', () => {
    expect(() =>
      DateHelpers.formatDateLikeToString(
        'invalid date',
        DateHelpers.isoDateFormat,
      ),
    ).toThrowError(InvalidArgumentException);
  });

  it('formatDateLikeToString should throw InvalidArgumentException for invalid date format', () => {
    expect(() =>
      DateHelpers.formatDateLikeToString(new Date(), 'invalid format'),
    ).toThrowError(InvalidArgumentException);
  });

  it('formatDateLikeToString should throw error for null, undefined, or invalid input', () => {
    expect(() =>
      // @ts-expect-error - intentionally passing invalid input to test error handling
      DateHelpers.formatDateLikeToString(null, DateHelpers.isoDateFormat),
    ).toThrowError(InvalidArgumentException);
    expect(() =>
      // @ts-expect-error - intentionally passing invalid input to test error handling
      DateHelpers.formatDateLikeToString(undefined, DateHelpers.isoDateFormat),
    ).toThrowError(InvalidArgumentException);
    expect(() =>
      // @ts-expect-error - intentionally passing invalid input to test error handling
      DateHelpers.formatDateLikeToString({}, DateHelpers.isoDateFormat),
    ).toThrowError(InvalidArgumentException);
    expect(() =>
      // @ts-expect-error - intentionally passing invalid input to test error handling
      DateHelpers.formatDateLikeToString(12345, DateHelpers.isoDateFormat),
    ).toThrowError(InvalidArgumentException);
  });
});

describe('DateHelpers output validation', () => {
  it('date string to Date object conversion test', () => {
    expect(DateHelpers.parseDateString('10/21/19')).toStrictEqual(output);
  });

  it('date object or date string to ISO date string conversion test', () => {
    expect(DateHelpers.formatDateLikeToIsoDateString(output)).toBe(
      '2019-10-21',
    );
    expect(DateHelpers.formatDateLikeToIsoDateString('2019-10-21')).toBe(
      '2019-10-21',
    );
  });

  it('date object or date string to US date string conversion test', () => {
    expect(DateHelpers.formatDateLikeToUsLocaleDateString(output)).toBe(
      '10/21/2019',
    );
    expect(DateHelpers.formatDateLikeToUsLocaleDateString('2019-10-21')).toBe(
      '10/21/2019',
    );
  });

  it('date object or date string to US time string conversion test', () => {
    expect(DateHelpers.formatDateLikeToUsLocaleDateTimeString(output)).toBe(
      '10/21/2019 00:00:00',
    );
    expect(
      DateHelpers.formatDateLikeToUsLocaleDateTimeString('2019-10-21'),
    ).toBe('10/21/2019 00:00:00');
  });

  it('formatDateLikeToUsLocaleMediumDateString should format dates correctly', () => {
    expect(DateHelpers.formatDateLikeToUsLocaleMediumDateString(output)).toBe(
      'Oct 21, 2019',
    );
    expect(
      DateHelpers.formatDateLikeToUsLocaleMediumDateString('2019-10-21'),
    ).toBe('Oct 21, 2019');
  });

  it('formatDateLikeToString should return an empty string if the input is an empty string', () => {
    const emptyString = '';
    expect(
      DateHelpers.formatDateLikeToString(
        emptyString,
        DateHelpers.isoDateFormat,
      ),
    ).toBe(emptyString);
  });
});
