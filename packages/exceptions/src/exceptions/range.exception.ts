import { RuntimeException } from './runtime.exception';

/**
 * Exception thrown to indicate range errors during program execution. Normally this means there was an arithmetic error other than under/overflow.
 * This is the runtime version of @see DomainException.
 * @public
 */
export class RangeException extends RuntimeException {
  name = 'RangeException';
}
