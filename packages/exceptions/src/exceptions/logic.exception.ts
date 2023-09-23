import { BaseException } from './base.exception';

/**
 *
 * Exception that represents error in the program logic. This kind of exception should lead directly to a fix in your code.
 */

export class LogicException extends BaseException {
  name = 'LogicException';
}
