const reverseString = require('../lib/reverseString');

describe('reverseString', () => {
  test('should exist', () => {
    expect(reverseString).not.toBeUndefined();
  });

  test('should reverse a string', () => {
    expect(reverseString('String')).toBe('gnirtS');
    expect(reverseString('Another string')).toBe('gnirts rehtonA');
  });

  test('should return the string if string is empty', () => {
    expect(reverseString('')).toBe('');
  });

  test('should return null if first argument is not a string', () => {
    expect(reverseString(true)).toBeNull();
    expect(reverseString({})).toBeNull();
    expect(reverseString(['something'])).toBeNull();
    expect(reverseString(undefined)).toBeNull();
  });
});
