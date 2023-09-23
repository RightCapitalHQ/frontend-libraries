/**
 * The Base Exception that be used to emulate the PHP Base Exception
 * All exception should be based on this Error type
 *
 * @see https://www.php.net/manual/en/spl.exceptions.php
 * @see https://javascript.info/custom-errors
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
