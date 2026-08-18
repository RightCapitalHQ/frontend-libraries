import { describe, expect, it } from 'vitest';

import {
  assert,
  AssertError,
  assertExhaustive,
  assertNonNullable,
  assertUnreachable,
  ensure,
  ensureNonNullable,
} from '../src';

describe(AssertError.name, () => {
  it('should extend Error with its own name', () => {
    const error = new AssertError('Assertion failed');

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AssertError);
    expect(error.name).toBe('AssertError');
    expect(String(error)).toBe('AssertError: Assertion failed');
  });
});

describe(assert.name, () => {
  it('should not throw when value is true', () => {
    expect(() => assert(true)).not.toThrow();
  });

  it('should throw when value is falsy', () => {
    expect(() => assert(null)).toThrow(AssertError);
    expect(() => assert(undefined)).toThrow(AssertError);
    expect(() => assert(false)).toThrow(AssertError);
    expect(() => assert(NaN)).toThrow(AssertError);
    expect(() => assert(0)).toThrow(AssertError);
    expect(() => assert(-0)).toThrow(AssertError);
    expect(() => assert(0n)).toThrow(AssertError);
    expect(() => assert('')).toThrow(AssertError);
  });

  it('should throw with custom message', () => {
    const message = 'Custom error message';
    expect(() => assert(false, message)).toThrow(message);
  });
});

describe(assertNonNullable.name, () => {
  it('should not throw for non-null values', () => {
    expect(() => assertNonNullable(false)).not.toThrow();
    expect(() => assertNonNullable(NaN)).not.toThrow();
    expect(() => assertNonNullable(0)).not.toThrow();
    expect(() => assertNonNullable(-0)).not.toThrow();
    expect(() => assertNonNullable(0n)).not.toThrow();
    expect(() => assertNonNullable('')).not.toThrow();
  });

  it('should throw for null', () => {
    expect(() => assertNonNullable(null)).toThrow(AssertError);
  });

  it('should throw for undefined', () => {
    expect(() => assertNonNullable(undefined)).toThrow(AssertError);
  });

  it('should throw with custom message', () => {
    const message = 'Value cannot be null';
    expect(() => assertNonNullable(null, message)).toThrow(message);
  });
});

describe(ensure.name, () => {
  const isString = (value: unknown): value is string =>
    typeof value === 'string';

  it('should return value when predicate passes', () => {
    const result = ensure('hello', isString);
    expect(result).toBe('hello');
  });

  it('should throw when predicate fails', () => {
    expect(() => ensure(123, isString)).toThrow(AssertError);
  });

  it('should throw with custom message', () => {
    const message = 'Expected string';
    expect(() => ensure(123, isString, message)).toThrow(message);
  });

  it('should work with type narrowing', () => {
    const value: unknown = 'test';
    const result = ensure(value, isString);
    // TypeScript should now know result is string
    expect(result.toUpperCase()).toBe('TEST');
  });
});

describe(ensureNonNullable.name, () => {
  it('should return value when not null/undefined', () => {
    expect(ensureNonNullable('hello')).toBe('hello');
    expect(ensureNonNullable(0)).toBe(0);
    expect(ensureNonNullable(false)).toBe(false);
  });

  it('should throw for null', () => {
    expect(() => ensureNonNullable(null)).toThrow(AssertError);
  });

  it('should throw for undefined', () => {
    expect(() => ensureNonNullable(undefined)).toThrow(AssertError);
  });

  it('should throw with custom message', () => {
    const message = 'Value required';
    expect(() => ensureNonNullable(null, message)).toThrow(message);
  });
});

describe(assertUnreachable.name, () => {
  it('should always throw', () => {
    expect(() => assertUnreachable()).toThrow(AssertError);
  });

  it('should throw with custom message', () => {
    const message = 'This should not be reached';
    expect(() => assertUnreachable(message)).toThrow(message);
  });
});

describe(assertExhaustive.name, () => {
  it('should always throw', () => {
    expect(() => assertExhaustive('unexpected' as never)).toThrow(AssertError);
  });

  it('should throw with custom message', () => {
    const message = 'Unhandled case';
    expect(() => assertExhaustive('unexpected' as never, message)).toThrow(
      message,
    );
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
          return assertExhaustive(status);
      }
    }

    expect(handleStatus('loading')).toBe('Loading...');
    expect(handleStatus('success')).toBe('Success!');
    expect(handleStatus('error')).toBe('Error occurred');
    expect(() => handleStatus('unexpected' as unknown as Status)).toThrow(
      AssertError,
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

    const isAdmin = (user: IUser): user is IAdminUser => user.role === 'admin';

    const regularUser: IUser = { id: 1, name: 'John', role: 'user' };
    const adminUser: IUser = {
      id: 2,
      name: 'Jane',
      role: 'admin',
      permissions: ['read', 'write'],
    } as IAdminUser;

    expect(() => ensure(regularUser, isAdmin)).toThrow(AssertError);

    const admin = ensure(adminUser, isAdmin);
    expect(admin.permissions).toEqual(['read', 'write']);
  });
});
