import { LogicException } from './logic.exception.ts';

/**
 * Exception thrown if a length is invalid.
 * @public
 */
export class LengthException extends LogicException {
  public name = 'LengthException';
}
