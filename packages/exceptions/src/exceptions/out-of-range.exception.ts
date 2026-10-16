import { LogicException } from './logic.exception.ts';

/**
 * Exception thrown when an illegal index was requested. This represents errors that should be detected at compile time.
 * @public
 */
export class OutOfRangeException extends LogicException {
  public name = 'OutOfRangeException';
}
