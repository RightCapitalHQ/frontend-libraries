import { LogicException } from './logic.exception.ts';

/**
 * Exception thrown if an argument is not of the expected type.
 * @public
 */
export class InvalidArgumentException extends LogicException {
  public name = 'InvalidArgumentException';
}
