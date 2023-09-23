import { LogicException } from './logic.exception';

/**
 * Exception thrown if a callback refers to an undefined function or if some arguments are missing.
 */

export class BadFunctionCallException extends LogicException {
  name = 'BadFunctionCallException';
}
