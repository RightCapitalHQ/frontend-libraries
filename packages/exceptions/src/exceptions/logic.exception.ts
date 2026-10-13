import { BaseException } from './base.exception.ts';

/**
 * Exception that represents error in the program logic. This kind of exception should lead directly to a fix in your code.
 * @public
 */
export class LogicException extends BaseException {
  public name = 'LogicException';
}
