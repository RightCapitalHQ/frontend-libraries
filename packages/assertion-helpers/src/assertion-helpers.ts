import { UnexpectedValueException } from '@rightcapital/exceptions';

/**
 * AssertionHelpers is a utility class for type-safe assertions and validation.
 * When assertions fail, it throws `UnexpectedValueException`.
 *
 * @example
 * ```typescript
 * // Basic assertion
 * AssertionHelpers.assert(user.age >= 18, 'User must be at least 18 years old');
 *
 * // Non-nullable assertion with type narrowing
 * AssertionHelpers.assertNonNullable(user, 'User cannot be null');
 * // user is now typed as NonNullable<T>
 *
 * // Ensure with type guard
 * const admin = AssertionHelpers.ensure(currentUser, isAdminUser, 'Admin required');
 * // admin is now typed as AdminUser
 * ```
 */
export class AssertionHelpers {
  private static throwError(
    name: string,
    value: unknown,
    message: string | undefined,
  ): never {
    throw new UnexpectedValueException(
      message ?? `${name}: Unexpected ${String(value)}`,
    );
  }

  /**
   * Basic assertion: verifies that a value or expression is `true`, otherwise throws an exception.
   *
   * @param value - The value to assert as truthy
   * @param message - Optional custom error message
   *
   * @example
   * ```typescript
   * // Basic usage
   * AssertionHelpers.assert(user.age >= 18, 'User must be at least 18 years old');
   *
   * // Condition validation
   * const isValid = validateData(data);
   * AssertionHelpers.assert(isValid, 'Data validation failed');
   * ```
   */
  static assert(value: unknown, message?: string): asserts value {
    if (value !== true) {
      this.throwError('assert', value, message);
    }
  }

  /**
   * Asserts that a value is not `null` or `undefined`, providing TypeScript type narrowing to `NonNullable<T>`.
   * Ensures subsequent code can safely access the value.
   *
   * @param value - The value to check for null/undefined
   * @param message - Optional custom error message
   *
   * @example
   * ```typescript
   * function processUser(user: User | null | undefined) {
   *   AssertionHelpers.assertNonNullable(user, 'User cannot be null');
   *   // user is now typed as User
   *   console.log(user.name); // Safe to access
   * }
   * ```
   */
  static assertNonNullable<T>(
    value: T,
    message?: string,
  ): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
      this.throwError('assertNonNullable', value, message);
    }
  }

  /**
   * Similar to `assert`, but returns the value. Ensures a value matches a type predicate and returns it with narrowed type.
   *
   * @param value - The value to validate
   * @param predicate - Type guard function that validates the value
   * @param message - Optional custom error message
   * @returns The value with narrowed type
   *
   * @example
   * ```typescript
   * // Define type guard
   * function isAdminUser(user: User): user is AdminUser {
   *   return user.role === 'admin';
   * }
   *
   * // Use ensure to get type-safe value
   * const admin = AssertionHelpers.ensure(
   *   currentUser,
   *   isAdminUser,
   *   'Admin privileges required'
   * );
   * // admin is typed as AdminUser
   * ```
   */
  static ensure<T, S extends T>(
    value: T,
    predicate: (value: T) => value is S,
    message?: string,
  ): S {
    this.assert(predicate(value), message);
    return value;
  }

  /**
   * Similar to `assertNonNullable`, but returns the value. Ensures a value is not null/undefined and returns it.
   *
   * @param value - The value to check for null/undefined
   * @param message - Optional custom error message
   * @returns The non-nullable value
   *
   * @example
   * ```typescript
   * // Use in expressions
   * const config = AssertionHelpers.ensureNonNullable(
   *   getConfig(),
   *   'Configuration not found'
   * );
   *
   * // Chain calls
   * const userName = AssertionHelpers.ensureNonNullable(user, 'User not found').name;
   * ```
   */
  static ensureNonNullable<T>(value: T, message?: string): NonNullable<T> {
    if (value === null || value === undefined) {
      this.throwError('ensureNonNullable', value, message);
    }
    return value;
  }

  /**
   * Marks code branches that should theoretically never be reached.
   * Used for defensive programming to prevent unexpected code execution when data or logic doesn't match expectations.
   *
   * @param message - Optional custom error message
   * @returns Never returns (always throws)
   *
   * @example
   * ```typescript
   * function processStatus(status: 'active' | 'inactive' | 'activating') {
   *   if (status === 'active') {
   *     // Handle active state
   *   } else if (status === 'inactive') {
   *     // Handle inactive state
   *   } else {
   *     // According to business logic, this should never be reached
   *     AssertionHelpers.assertUnreachable(`Unexpected status value: ${status}`);
   *   }
   * }
   * ```
   */
  static assertUnreachable(message?: string): never {
    this.throwError('assertUnreachable', null, message);
  }

  /**
   * Used for exhaustiveness checking of union types. Ensures switch or if-else statements cover all possible types.
   * Leverages TypeScript's `never` type to catch missing branches at compile time.
   *
   * @param value - The value that should be of type `never` if all cases are handled
   * @param message - Optional custom error message
   * @returns Never returns (always throws)
   *
   * @example
   * ```typescript
   * type Action =
   *   | { type: 'ADD'; payload: number }
   *   | { type: 'SUBTRACT'; payload: number }
   *   | { type: 'MULTIPLY'; payload: number };
   *
   * function reducer(action: Action) {
   *   switch (action.type) {
   *     case 'ADD':
   *       return state + action.payload;
   *     case 'SUBTRACT':
   *       return state - action.payload;
   *     case 'MULTIPLY':
   *       return state * action.payload;
   *     default:
   *       // If all types are exhausted, action is of type never
   *       // If new Action types are added but not handled, TypeScript will report error
   *       return AssertionHelpers.assertExhaustive(action);
   *                                             // ^ never
   *   }
   * }
   * ```
   */
  static assertExhaustive(value: never, message?: string): never {
    this.throwError('assertExhaustive', value, message);
  }
}
