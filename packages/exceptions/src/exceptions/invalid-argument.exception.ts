import { LogicException } from './logic.exception';

/**
 * Exception thrown if an argument is not of the expected type.
 * @public
 */
export class InvalidArgumentException extends LogicException {
  name = 'InvalidArgumentException';
}
