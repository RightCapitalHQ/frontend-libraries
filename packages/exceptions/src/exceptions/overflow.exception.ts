import { RuntimeException } from './runtime.exception.ts';

/**
 * Exception thrown when adding an element to a full container.
 * @public
 */
export class OverflowException extends RuntimeException {
  public name = 'OverflowException';
}
