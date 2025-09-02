import { UnexpectedValueException } from '@rightcapital/exceptions';

import { AssertionHelpers } from '../src/assertion-helpers';

describe('AssertionHelpers', () => {
  describe('assert', () => {
    it('should not throw when value is true', () => {
      expect(() => AssertionHelpers.assert(true)).not.toThrow();
    });

    it('should throw when value is falsy', () => {
      expect(() => AssertionHelpers.assert(null)).toThrow(
        UnexpectedValueException,
      );
      expect(() => AssertionHelpers.assert(undefined)).toThrow(
        UnexpectedValueException,
      );
      expect(() => AssertionHelpers.assert(false)).toThrow(
        UnexpectedValueException,
      );
      expect(() => AssertionHelpers.assert(NaN)).toThrow(
        UnexpectedValueException,
      );
      expect(() => AssertionHelpers.assert(0)).toThrow(
        UnexpectedValueException,
      );
      expect(() => AssertionHelpers.assert(-0)).toThrow(
        UnexpectedValueException,
      );
      expect(() => AssertionHelpers.assert(0n)).toThrow(
        UnexpectedValueException,
      );
      expect(() => AssertionHelpers.assert('')).toThrow(
        UnexpectedValueException,
      );
    });

    it('should throw with custom message', () => {
      const message = 'Custom error message';
      expect(() => AssertionHelpers.assert(false, message)).toThrow(message);
    });
  });

  describe('assertNonNullable', () => {
    it('should not throw for non-null values', () => {
      expect(() => AssertionHelpers.assertNonNullable(false)).not.toThrow();
      expect(() => AssertionHelpers.assertNonNullable(NaN)).not.toThrow();
      expect(() => AssertionHelpers.assertNonNullable(0)).not.toThrow();
      expect(() => AssertionHelpers.assertNonNullable(-0)).not.toThrow();
      expect(() => AssertionHelpers.assertNonNullable(0n)).not.toThrow();
      expect(() => AssertionHelpers.assertNonNullable('')).not.toThrow();
    });

    it('should throw for null', () => {
      expect(() => AssertionHelpers.assertNonNullable(null)).toThrow(
        UnexpectedValueException,
      );
    });

    it('should throw for undefined', () => {
      expect(() => AssertionHelpers.assertNonNullable(undefined)).toThrow(
        UnexpectedValueException,
      );
    });

    it('should throw with custom message', () => {
      const message = 'Value cannot be null';
      expect(() => AssertionHelpers.assertNonNullable(null, message)).toThrow(
        message,
      );
    });
  });

  describe('ensure', () => {
    const isString = (value: unknown): value is string =>
      typeof value === 'string';

    it('should return value when predicate passes', () => {
      const result = AssertionHelpers.ensure('hello', isString);
      expect(result).toBe('hello');
    });

    it('should throw when predicate fails', () => {
      expect(() => AssertionHelpers.ensure(123, isString)).toThrow(
        UnexpectedValueException,
      );
    });

    it('should throw with custom message', () => {
      const message = 'Expected string';
      expect(() => AssertionHelpers.ensure(123, isString, message)).toThrow(
        message,
      );
    });

    it('should work with type narrowing', () => {
      const value: unknown = 'test';
      const result = AssertionHelpers.ensure(value, isString);
      // TypeScript should now know result is string
      expect(result.toUpperCase()).toBe('TEST');
    });
  });

  describe('ensureNonNullable', () => {
    it('should return value when not null/undefined', () => {
      expect(AssertionHelpers.ensureNonNullable('hello')).toBe('hello');
      expect(AssertionHelpers.ensureNonNullable(0)).toBe(0);
      expect(AssertionHelpers.ensureNonNullable(false)).toBe(false);
    });

    it('should throw for null', () => {
      expect(() => AssertionHelpers.ensureNonNullable(null)).toThrow(
        UnexpectedValueException,
      );
    });

    it('should throw for undefined', () => {
      expect(() => AssertionHelpers.ensureNonNullable(undefined)).toThrow(
        UnexpectedValueException,
      );
    });

    it('should throw with custom message', () => {
      const message = 'Value required';
      expect(() => AssertionHelpers.ensureNonNullable(null, message)).toThrow(
        message,
      );
    });
  });

  describe('assertUnreachable', () => {
    it('should always throw', () => {
      expect(() => AssertionHelpers.assertUnreachable()).toThrow(
        UnexpectedValueException,
      );
    });

    it('should throw with custom message', () => {
      const message = 'This should not be reached';
      expect(() => AssertionHelpers.assertUnreachable(message)).toThrow(
        message,
      );
    });
  });

  describe('assertExhaustive', () => {
    it('should always throw', () => {
      expect(() =>
        AssertionHelpers.assertExhaustive('unexpected' as never),
      ).toThrow(UnexpectedValueException);
    });

    it('should throw with custom message', () => {
      const message = 'Unhandled case';
      expect(() =>
        AssertionHelpers.assertExhaustive('unexpected' as never, message),
      ).toThrow(message);
    });
  });

  describe('real-world usage examples', () => {
    it('should work with switch statement exhaustiveness', () => {
      type Status = 'loading' | 'success' | 'error';

      function handleStatus(status: Status): string {
        switch (status) {
          case 'loading':
            return 'Loading...';
          case 'success':
            return 'Success!';
          case 'error':
            return 'Error occurred';
          default:
            return AssertionHelpers.assertExhaustive(status);
        }
      }

      expect(handleStatus('loading')).toBe('Loading...');
      expect(handleStatus('success')).toBe('Success!');
      expect(handleStatus('error')).toBe('Error occurred');
      expect(() => handleStatus('unexpected' as unknown as Status)).toThrow(
        UnexpectedValueException,
      );
    });

    it('should work with user type guards', () => {
      interface IUser {
        id: number;
        name: string;
        role: string;
      }

      interface IAdminUser extends IUser {
        role: 'admin';
        permissions: string[];
      }

      const isAdmin = (user: IUser): user is IAdminUser =>
        user.role === 'admin';

      const regularUser: IUser = { id: 1, name: 'John', role: 'user' };
      const adminUser: IUser = {
        id: 2,
        name: 'Jane',
        role: 'admin',
        permissions: ['read', 'write'],
      } as IAdminUser;

      expect(() => AssertionHelpers.ensure(regularUser, isAdmin)).toThrow();

      const admin = AssertionHelpers.ensure(adminUser, isAdmin);
      expect(admin.permissions).toEqual(['read', 'write']);
    });
  });
});
