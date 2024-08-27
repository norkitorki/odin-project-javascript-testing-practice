const calculator = require('../calculator');

describe('calculator', () => {
  test('should exist', () => {
    expect(calculator).not.toBeUndefined();
  });

  describe('add', () => {
    const add = calculator.add;

    test('should exist', () => {
      expect(add).not.toBeUndefined();
    });

    test('should return the sum', () => {
      expect(add(3, 4)).toBe(7);
      expect(add(-2, 5)).toBe(3);
      expect(add(10, -22)).toBe(-12);
      expect(add(10.5, 12.2)).toBe(22.7);
      expect(add(-10, -4.2)).toBe(-14.2);
    });

    test('should return 0 if no arguments are passed', () => {
      expect(add()).toBe(0);
    });

    test('should convert first addend to 0 if omitted', () => {
      expect(add(undefined, 13)).toBe(13);
    });

    test('should convert second addend to 0 if omitted', () => {
      expect(add(6, undefined)).toBe(6);
    });

    test('should convert arguments to numbers', () => {
      expect(add('20', '10')).toBe(30);
      expect(add('14.7', '12.7')).toBe(27.4);
      expect(add([], 2)).toBe(2);
      expect(add(7, [3])).toBe(10);
      expect(add(null, '4')).toBe(4);
      expect(add(true, false)).toBe(1);
    });

    test(`should return null if arguments aren't convertible to numbers`, () => {
      expect(add({}, 20)).toBeNull();
      expect(add([1, 4], 2)).toBeNull();
      expect(add('one', 'thirteen')).toBeNull();
    });
  });

  describe('subtract', () => {
    const subtract = calculator.subtract;

    test('should exist', () => {
      expect(subtract).not.toBeUndefined();
    });

    test('should return the difference', () => {
      expect(subtract(8, 5)).toBe(3);
      expect(subtract(-4, 10)).toBe(-14);
      expect(subtract(100.0, -200)).toBe(300.0);
      expect(subtract(-24.5, 10.2)).toBe(-34.7);
    });

    test('should return 0 if no arguments are passed', () => {
      expect(subtract()).toBe(0);
    });

    test('should convert minuend to 0 if omitted', () => {
      expect(subtract(undefined, 20)).toBe(-20);
    });

    test('should convert subtrahend to 0 if omitted', () => {
      expect(subtract(12, undefined)).toBe(12);
    });

    test('should convert arguments to numbers', () => {
      expect(subtract('24', '11')).toBe(13);
      expect(subtract('50.4', '20.5')).toBe(29.9);
      expect(subtract([], 4)).toBe(-4);
      expect(subtract(6, [4])).toBe(2);
      expect(subtract(100, null)).toBe(100);
      expect(subtract(false, true)).toBe(-1);
    });

    test(`should return null if arguments aren't convertible to numbers`, () => {
      expect(subtract(120, { twenty: 20 })).toBeNull();
      expect(subtract(200, [2, 6])).toBeNull();
      expect(subtract('twenty', 'ten')).toBeNull();
    });
  });

  describe('divide', () => {
    const divide = calculator.divide;

    test('should exist', () => {
      expect(divide).not.toBeUndefined();
    });

    test('should return the quotient', () => {
      expect(divide(16, 4)).toBe(4);
      expect(divide(4, 16)).toBe(0.25);
      expect(divide(100, -5.0)).toBe(-20.0);
      expect(divide(-20, -2.5)).toBe(8);
    });

    test('should return 0 if no arguments are passed', () => {
      expect(divide()).toBe(0);
    });

    test('should convert dividend to 0 if omitted', () => {
      expect(divide(undefined, 2)).toBe(0);
    });

    test('should convert divisor to 1 if omitted', () => {
      expect(divide(50, undefined)).toBe(50);
    });

    test('should return Infinity when divisor is 0', () => {
      expect(divide(1000, 0)).toBe(Infinity);
    });

    test('should convert arguments to numbers', () => {
      expect(divide('10', '5')).toBe(2);
      expect(divide('12.80', '3.20')).toBe(4);
      expect(divide(20, [5])).toBe(4);
      expect(divide([], 200)).toBe(0);
      expect(divide(2, null)).toBe(Infinity);
      expect(divide(false, true)).toBe(0);
    });

    test(`should return null if arguments aren't convertible to numbers`, () => {
      expect(divide({ two: 2 }, 2)).toBeNull();
      expect(divide(100, [2, 'two'])).toBeNull();
      expect(divide('ten', 'three')).toBeNull();
    });
  });

  describe('multiply', () => {
    const multiply = calculator.multiply;

    test('should exist', () => {
      expect(multiply).not.toBeUndefined();
    });

    test('should return the product', () => {
      expect(multiply(2, 6)).toBe(12);
      expect(multiply(5, -20)).toBe(-100);
      expect(multiply(4.52, 4)).toBe(18.08);
      expect(multiply(2.2, 3.3)).toBe(7.26);
      expect(multiply(-5, -5)).toBe(25);
      expect(multiply(10023, 0)).toBe(0);
    });

    test('should return 0 if no arguments are passed', () => {
      expect(multiply()).toBe(0);
    });

    test('should convert multiplicand to 0 if omitted', () => {
      expect(multiply(undefined, 20)).toBe(0);
    });

    test('should convert multiplier to 0 if omitted', () => {
      expect(multiply(3943, undefined)).toBe(0);
    });

    test('should convert arguments to numbers', () => {
      expect(multiply('10', '12')).toBe(120);
      expect(multiply('10.25', '4.0')).toBe(41);
      expect(multiply([25], 5)).toBe(125);
      expect(multiply(12, [])).toBe(0);
      expect(multiply('4.11', '4')).toBe(16.44);
      expect(multiply(true, false)).toBe(0);
    });

    test(`should return null if arguments aren't convertible to numbers`, () => {
      expect(multiply(20, {})).toBeNull();
      expect(multiply([74, 2], 2)).toBeNull();
      expect(multiply('fourty', 'fourteen')).toBeNull();
    });
  });
});
