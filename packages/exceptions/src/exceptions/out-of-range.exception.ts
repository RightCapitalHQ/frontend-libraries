import { LogicException } from './logic.exception';

/**
 * Exception thrown when an illegal index was requested. This represents errors that should be detected at compile time.
 * @public
 */
export class OutOfRangeException extends LogicException {
  name = 'OutOfRangeException';
}
