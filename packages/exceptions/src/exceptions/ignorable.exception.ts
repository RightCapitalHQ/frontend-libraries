import { BaseException } from './base.exception.ts';

/**
 * This Exception could be ignore
 * @public
 */
export class IgnorableException extends BaseException {
  public name = 'IgnorableException';
}
