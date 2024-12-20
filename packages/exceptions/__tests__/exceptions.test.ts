import {
  BadFunctionCallException,
  BadMethodCallException,
  BaseException,
  DomainException,
  IgnorableException,
  InvalidArgumentException,
  LengthException,
  LogicException,
  OutOfBoundsException,
  OutOfRangeException,
  OverflowException,
  RangeException,
  RuntimeException,
  UnderflowException,
  UnexpectedValueException,
} from '../src/index';

const exceptionCtorList = [
  LogicException,
  RuntimeException,
  IgnorableException,
  BadFunctionCallException,
  BadMethodCallException,
  DomainException,
  InvalidArgumentException,
  LengthException,
  OutOfBoundsException,
  OutOfRangeException,
  OverflowException,
  RangeException,
  UnderflowException,
  UnexpectedValueException,
];

const exceptionNameList = exceptionCtorList.map(
  (exceptionCtor) => exceptionCtor.name,
);

describe('Exceptions', () => {
  const runtimeException = new RuntimeException('This is a runtime exception');

  test('Instanceof Error', () => {
    expect(runtimeException instanceof Error).toBe(true);
  });

  test('Instanceof RuntimeException', () => {
    expect(runtimeException instanceof RuntimeException).toBe(true);
  });
  test('Name is RuntimeException', () => {
    expect(runtimeException.name).toBe('RuntimeException');
  });

  test('toString()', () => {
    expect(String(runtimeException)).toBe(
      'RuntimeException: This is a runtime exception',
    );
  });

  test('Can throw', () => {
    expect(() => {
      throw runtimeException;
    }).toThrow();
  });

  test('BadMethodCallException is (inherited from) LogicException', () => {
    expect(() => {
      throw new BadMethodCallException('Bad Method Call');
    }).toThrowError(LogicException);
  });

  test('All Exception has own name property', () => {
    exceptionCtorList.forEach((ExceptionCtor) => {
      expect(new ExceptionCtor('Exception', {})).toHaveProperty('name');
    });
  });

  test('All Exception has name that equals to class name', () => {
    exceptionCtorList.forEach((ExceptionCtor, index) => {
      expect(new ExceptionCtor('Exception', {}).name).toEqual(
        exceptionNameList[index],
      );
    });
  });

  test('Test cause by another exception', () => {
    const originalException = new BaseException('Original Exception');
    const newException = new BaseException('New Exception', originalException);

    expect(newException.isCausedBy(originalException)).toBe(true);
  });
});
