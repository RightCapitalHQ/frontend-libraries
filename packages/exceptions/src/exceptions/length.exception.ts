import { LogicException } from './logic.exception';

/**
 * Exception thrown if a length is invalid.
 * @public
 */
export class LengthException extends LogicException {
  name = 'LengthException';
}
