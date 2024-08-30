const analyzeArray = require('../lib/analyzeArray');

describe('analyzeArray', () => {
  const arr = [21, 56, 13, 7, 41, 22, 81, 15, 32, 77, 3, 11, 27, 62, 45];

  test('should exist', () => {
    expect(analyzeArray).not.toBeUndefined();
  });

  test('should return an object with expected properties', () => {
    expect(analyzeArray(arr)).toHaveProperty('average');
    expect(analyzeArray(arr)).toHaveProperty('min');
    expect(analyzeArray(arr)).toHaveProperty('max');
    expect(analyzeArray(arr)).toHaveProperty('length');
  });

  test('should calculate the average number', () => {
    expect(analyzeArray(arr).average).toBe(34.2);
  });

  test('should contain the minimum number', () => {
    expect(analyzeArray(arr).min).toBe(3);
  });

  test('should contain the maximum number', () => {
    expect(analyzeArray(arr).max).toBe(81);
  });

  test('should contain the length of the array', () => {
    expect(analyzeArray(arr).length).toBe(15);
  });

  test('should work with a single number', () => {
    expect(analyzeArray([100])).toStrictEqual({
      average: 100,
      min: 100,
      max: 100,
      length: 1,
    });
  });

  test('should throw an error when first argument is not an array', () => {
    const expectedError = new Error('Argument is not an array');

    expect(() => analyzeArray({ one: 1, four: 4 })).toThrow(expectedError);
    expect(() => analyzeArray('12345')).toThrow(expectedError);
  });

  test('should return an empty object when the array is empty', () => {
    expect(analyzeArray([])).toStrictEqual({});
  });

  test(`should return an empty object when the array doesn't contain any numbers`, () => {
    expect(analyzeArray([[0], '10', {}, 'home'])).toStrictEqual({});
  });

  test('should ignore non numeric array elements', () => {
    expect(analyzeArray(['2', null, 4, [], 10, {}, 7])).toStrictEqual({
      average: 7,
      min: 4,
      max: 10,
      length: 7,
    });
  });

  test('should work with negative numbers', () => {
    expect(analyzeArray([-2, -10, 5, 2, 0, -7])).toStrictEqual({
      average: -2,
      min: -10,
      max: 5,
      length: 6,
    });
  });
});
