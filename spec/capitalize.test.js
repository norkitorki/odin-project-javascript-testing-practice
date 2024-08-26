const capitalize = require('../capitalize');

describe('capitalize', () => {
  test('should exist', () => {
    expect(capitalize).not.toBeUndefined();
  });

  test('should capitalize a string', () => {
    expect(capitalize('SoMeTHInG')).toBe('Something');
    expect(capitalize('CAPITALIZED')).toBe('Capitalized');
    expect(capitalize('My Name is Matt')).toBe('My name is matt');
    expect(capitalize('j')).toBe('J');
  });

  test('should return the string if string is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('should return null if first argument is not a string', () => {
    expect(capitalize()).toBeNull();
    expect(capitalize(null)).toBeNull();
    expect(capitalize({ one: 1 })).toBeNull();
    expect(capitalize(['my', 'string'])).toBeNull();
  });
});
