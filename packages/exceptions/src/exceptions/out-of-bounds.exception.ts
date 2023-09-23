import { RuntimeException } from './runtime.exception';

/**
 * Exception thrown if a value is not a valid key. This represents errors that cannot be detected at compile time.
 */

export class OutOfBoundsException extends RuntimeException {
  name = 'OutOfBoundsException';
}
