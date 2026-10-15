/**
 * Assertion functions provide type-safe assertions and validation.
 * When assertions fail, they throw `AssertionError`.
 *
 * @author lixiaoyan <lxy.lixiaoyan@gmail.com>
 * @example
 * ```typescript
 * // Basic assertion
 * assert(user.age >= 18, 'User must be at least 18 years old');
 *
 * // Non-nullable assertion with type narrowing
 * assertNonNullable(user, 'User cannot be null');
 * // user is now typed as NonNullable<T>
 *
 * // Ensure with type guard
 * const admin = ensure(currentUser, isAdminUser, 'Admin required');
 * // admin is now typed as AdminUser
 * ```
 */

/**
 * Error thrown when an assertion fails.
 */
export class AssertionError extends Error {
  public override readonly name = 'AssertionError';
}

/**
 * Throws an AssertionError with a message prefixed by the assertion name.
 */
function throwError(name: string, message: string): never {
  throw new AssertionError(`${name}: ${message}`);
}

/**
 * Throws an AssertionError for an unexpected value.
 */
function throwUnexpectedValueError(
  name: string,
  value: unknown,
  message = `Unexpected ${String(value)}`,
): never {
  throwError(name, message);
}

/**
 * Basic assertion: verifies that a value or expression is `true`, otherwise throws an exception.
 *
 * @param value - The boolean condition to assert as `true`
 * @param message - Optional custom error message
 * @throws {AssertionError} Throws an error if `value` is not `true`.
 *
 * @example
 * ```typescript
 * // Basic usage
 * assert(user.age >= 18, 'User must be at least 18 years old');
 *
 * // Condition validation
 * const isValid = validateData(data);
 * assert(isValid, 'Data validation failed');
 * ```
 */
export function assert(value: boolean, message?: string): asserts value {
  if (value !== true) {
    throwUnexpectedValueError('assert', value, message);
  }
}

/**
 * Asserts that a value is not `null` or `undefined`, providing TypeScript type narrowing to `NonNullable<T>`.
 * Ensures subsequent code can safely access the value.
 *
 * @param value - The value to check for null/undefined
 * @param message - Optional custom error message
 * @throws {AssertionError} Throws an error if `value` is `null` or `undefined`.
 *
 * @example
 * ```typescript
 * function processUser(user: User | null | undefined) {
 *   assertNonNullable(user, 'User cannot be null');
 *   // user is now typed as User
 *   console.log(user.name); // Safe to access
 * }
 * ```
 */
export function assertNonNullable<T>(
  value: T,
  message?: string,
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throwUnexpectedValueError('assertNonNullable', value, message);
  }
}

/**
 * Similar to `assert`, but returns the value. Ensures a value matches a type predicate and returns it with narrowed type.
 *
 * @param value - The value to validate
 * @param predicate - Type guard function that validates the value
 * @param message - Optional custom error message
 * @returns The value with narrowed type
 * @throws {AssertionError} Throws an error if `predicate` returns `false`.
 *
 * @example
 * ```typescript
 * // Define type guard
 * function isAdminUser(user: User): user is AdminUser {
 *   return user.role === 'admin';
 * }
 *
 * // Use ensure to get type-safe value
 * const admin = ensure(
 *   currentUser,
 *   isAdminUser,
 *   'Admin privileges required'
 * );
 * // admin is typed as AdminUser
 * ```
 */
export function ensure<T, S extends T>(
  value: T,
  predicate: (value: T) => value is S,
  message?: string,
): S {
  assert(predicate(value), message);
  return value;
}

/**
 * Similar to `assertNonNullable`, but returns the value. Ensures a value is not null/undefined and returns it.
 *
 * @param value - The value to check for null/undefined
 * @param message - Optional custom error message
 * @returns The non-nullable value
 * @throws {AssertionError} Throws an error if `value` is `null` or `undefined`.
 *
 * @example
 * ```typescript
 * // Use in expressions
 * const config = ensureNonNullable(
 *   getConfig(),
 *   'Configuration not found'
 * );
 *
 * // Chain calls
 * const userName = ensureNonNullable(user, 'User not found').name;
 * ```
 */
export function ensureNonNullable<T>(
  value: T,
  message?: string,
): NonNullable<T> {
  if (value === null || value === undefined) {
    throwUnexpectedValueError('ensureNonNullable', value, message);
  }
  return value;
}

/**
 * Marks code branches that should theoretically never be reached.
 * Used for defensive programming to prevent unexpected code execution when data or logic doesn't match expectations.
 *
 * @param message - Optional custom error message
 * @returns Never returns (always throws)
 * @throws {AssertionError} Always thrown.
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
 *     assertUnreachable(`Unexpected status value: ${status}`);
 *   }
 * }
 * ```
 */
export function assertUnreachable(message = 'Reached unreachable code'): never {
  throwError('assertUnreachable', message);
}

/**
 * Used for exhaustiveness checking of union types. Ensures switch or if-else statements cover all possible types.
 * Leverages TypeScript's `never` type to catch missing branches at compile time.
 *
 * @param value - The value that should be `never` if all cases are handled
 * @param message - Optional custom error message
 * @returns Never returns (always throws)
 * @throws {AssertionError} Always thrown.
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
 *       return assertExhaustive(action);
 *                               // ^ never
 *   }
 * }
 * ```
 */
export function assertExhaustive(value: never, message?: string): never {
  throwUnexpectedValueError('assertExhaustive', value, message);
}

/**
 * Marks methods or code paths that are intentionally not implemented yet.
 *
 * @param message - Optional custom error message
 * @returns Never returns (always throws)
 * @throws {AssertionError} Always thrown.
 *
 * @example
 * ```typescript
 * function saveDraft(): never {
 *   return unimplemented('Draft saving is not available yet');
 * }
 * ```
 */
export function unimplemented(message = 'Not implemented'): never {
  throwError('unimplemented', message);
}
