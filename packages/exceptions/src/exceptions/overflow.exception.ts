import { RuntimeException } from './runtime.exception';

/**
 * Exception thrown when adding an element to a full container.
 */

export class OverflowException extends RuntimeException {
  name = 'OverflowException';
}
