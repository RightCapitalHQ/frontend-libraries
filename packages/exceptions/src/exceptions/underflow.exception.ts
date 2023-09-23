import { RuntimeException } from './runtime.exception';

/**
 * Exception thrown when performing an invalid operation on an empty container, such as removing an element.
 */

export class UnderflowException extends RuntimeException {
  name = 'UnderflowException';
}
