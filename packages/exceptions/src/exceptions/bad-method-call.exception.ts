import { BadFunctionCallException } from './bad-function-call.exception.ts';

/**
 * Exception thrown if a callback refers to an undefined method or if some arguments are missing.
 * @public
 */
export class BadMethodCallException extends BadFunctionCallException {
  public name = 'BadMethodCallException';
}
