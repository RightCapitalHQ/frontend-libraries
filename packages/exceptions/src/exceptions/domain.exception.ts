import { LogicException } from './logic.exception';

/**
 * Exception thrown if a value does not adhere to a defined valid data domain.
 * @public
 */
export class DomainException extends LogicException {
  name = 'DomainException';
}
