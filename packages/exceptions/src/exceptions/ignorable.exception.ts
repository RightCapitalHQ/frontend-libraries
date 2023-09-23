import { BaseException } from './base.exception';

/**
 * This Exception could be ignore
 * @public
 */
export class IgnorableException extends BaseException {
  name = 'IgnorableException';
}
