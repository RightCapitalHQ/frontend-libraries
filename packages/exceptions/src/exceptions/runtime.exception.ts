import { BaseException } from './base.exception';

/**
 * Exception thrown if an error which can only be found on runtime occurs.
 * @public
 */
export class RuntimeException extends BaseException {
  name = 'RuntimeException';
}
