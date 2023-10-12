import { parseISO } from 'date-fns';
import { DateHelpers } from '../src/date-helpers';

const output = parseISO('2019-10-21');

describe('DateHelpers', () => {
  it('date string to Date object conversion test', () => {
    expect(DateHelpers.parseDateString('10/21/19')).toStrictEqual(output);
  });

  it('date object or date string to ISO date string conversion test', () => {
    expect(DateHelpers.formatIsoDate(output)).toBe('2019-10-21');
    expect(DateHelpers.formatIsoDate('2019-10-21')).toBe('2019-10-21');
  });

  it('date object or date string to US date string conversion test', () => {
    expect(DateHelpers.formatUsLocaleDate(output)).toBe('10/21/2019');
    expect(DateHelpers.formatUsLocaleDate('2019-10-21')).toBe('10/21/2019');
  });

  it('date object or date string to US time string conversion test', () => {
    expect(DateHelpers.formatUsLocaleTime(output)).toBe('10/21/2019 00:00:00');
    expect(DateHelpers.formatUsLocaleTime('2019-10-21')).toBe(
      '10/21/2019 00:00:00',
    );
  });

  it('convertDateToMonthDayYearString should format dates correctly', () => {
    expect(DateHelpers.formatMediumDate(output)).toBe('Oct 21, 2019');
    expect(DateHelpers.formatMediumDate('2019-10-21')).toBe('Oct 21, 2019');
  });
});
