// From PHP https://www.php.net/manual/en/spl.exceptions.php

// Refs: https://javascript.info/custom-errors

// eslint-disable-next-line max-classes-per-file

/**
 * The Base Exception that be used to emulate the PHP Base Exception
 * All exception should be based on this Error type
 */
export class BaseException extends Error {
  /**
   * @param message A human-readable description of the error.
   * @param cause The value of cause can be of any type. You should not make assumptions that the error you caught has an Error as its cause, in the same way that you cannot be sure the variable bound in the catch statement is an Error either. The "Providing structured data as the error cause" example below shows a case where a non-error is deliberately provided as the cause.
   */
  public constructor(
    message: string,
    public cause?: any,
  ) {
    super(message);
  }

  /**
   * If the Error is caused by the cause we passed in the construction method
   *
   * @param cause the cause we assume that cause the current exception
   * @returns true if the cause we passed is the original cause when the Exception constructed. otherwise, it returns false
   */
  public isCausedBy(cause) {
    return cause === this.cause;
  }
}

/**
 *
 * Exception that represents error in the program logic. This kind of exception should lead directly to a fix in your code.
 */
export class LogicException extends BaseException {
  name = 'LogicException';
}

/**
 * Exception thrown if an error which can only be found on runtime occurs.
 */
export class RuntimeException extends BaseException {
  name = 'RuntimeException';
}

/**
 * This Exception could be ignore
 */
export class IgnorableException extends BaseException {
  name = 'IgnorableException';
}

/**
 * Exception thrown if a callback refers to an undefined function or if some arguments are missing.
 */
export class BadFunctionCallException extends LogicException {
  name = 'BadFunctionCallException';
}

/**
 * Exception thrown if a callback refers to an undefined method or if some arguments are missing.
 */
export class BadMethodCallException extends BadFunctionCallException {
  name = 'BadMethodCallException';
}

/**
 * Exception thrown if a value does not adhere to a defined valid data domain.
 */
export class DomainException extends LogicException {
  name = 'DomainException';
}

/**
 * Exception thrown if an argument is not of the expected type.
 */
export class InvalidArgumentException extends LogicException {
  name = 'InvalidArgumentException';
}

/**
 * Exception thrown if a length is invalid.
 */
export class LengthException extends LogicException {
  name = 'LengthException';
}

/**
 * Exception thrown if a value is not a valid key. This represents errors that cannot be detected at compile time.
 */
export class OutOfBoundsException extends RuntimeException {
  name = 'OutOfBoundsException';
}

/**
 * Exception thrown when an illegal index was requested. This represents errors that should be detected at compile time.
 */
export class OutOfRangeException extends LogicException {
  name = 'OutOfRangeException';
}

/**
 * Exception thrown when adding an element to a full container.
 */
export class OverflowException extends RuntimeException {
  name = 'OverflowException';
}

/**
 * Exception thrown to indicate range errors during program execution. Normally this means there was an arithmetic error other than under/overflow.
 * This is the runtime version of @see DomainException.
 */
export class RangeException extends RuntimeException {
  name = 'RangeException';
}

/**
 * Exception thrown when performing an invalid operation on an empty container, such as removing an element.
 */
export class UnderflowException extends RuntimeException {
  name = 'UnderflowException';
}

/**
 * Exception thrown if a value does not match with a set of values.
 * Typically this happens when a function calls another function and
 * expects the return value to be of a certain type or value not including arithmetic or buffer related errors.
 */
export class UnexpectedValueException extends BaseException {
  name = 'UnexpectedValueException';
}
