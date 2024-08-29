const caesarCipher = require('../caesarCipher');

describe('caesarCipher', () => {
  test('should exist', () => {
    expect(caesarCipher).not.toBeUndefined();
  });

  test('should work without shift', () => {
    expect(caesarCipher('hello')).toBe('hello');
    expect(caesarCipher('abc', 0)).toBe('abc');
  });

  test('should work with an empty string', () => {
    expect(caesarCipher('', 9)).toBe('');
    expect(caesarCipher('      ')).toBe('      ');
  });

  test('should work with small positive shifts', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
    expect(caesarCipher('abc', 10)).toBe('klm');
  });

  test('should work with larger positive shifts', () => {
    expect(caesarCipher('caesar', 12147)).toBe('hfjxfw');
  });

  test('should work without negative shift', () => {
    expect(caesarCipher('hello', -0)).toBe('hello');
  });

  test('should work with small negative shifts', () => {
    expect(caesarCipher('klm', -10)).toBe('abc');
  });

  test('should work with larger negative shifts', () => {
    expect(caesarCipher('CaeSaR', -243245)).toBe('NlpDlC');
  });

  test('should work with multiple words', () => {
    expect(caesarCipher('hello beautiful world', 42)).toBe(
      'xubbe ruqkjyvkb mehbt'
    );
    expect(caesarCipher('Super Secret Code', -333)).toBe('Xzujw Xjhwjy Htij');
  });

  test('should work with uppercase letters', () => {
    expect(caesarCipher('CaEsAR cIpHeR', 201)).toBe('VtXlTK vBiAxK');
    expect(caesarCipher('HELLO WORLD', 56)).toBe('LIPPS ASVPH');
  });

  test('should ignore non-alphabetical characters', () => {
    expect(caesarCipher('hello world!!!', 17)).toBe('yvccf nficu!!!');
    expect(caesarCipher('.,!=()blOb"#=-_', 542)).toBe('.,!=()xhKx"#=-_');
    expect(caesarCipher('39545420', 112)).toBe('39545420');
  });

  test('should round shift to the nearest integer', () => {
    expect(caesarCipher('Caesar', 10.4)).toBe('Mkockb');
    expect(caesarCipher('Caesar', -10.2)).toBe('Squiqh');
    expect(caesarCipher('hello world', 24.7)).toBe('gdkkn vnqkc');
  });

  test(`should return null if first argument isn't a string`, () => {
    expect(caesarCipher([], 10)).toBeNull();
    expect(caesarCipher({}, 2)).toBeNull();
    expect(caesarCipher(334, 300)).toBeNull();
    expect(caesarCipher(/someREGXP/, 5)).toBeNull();
  });

  test(`should return null if second argument isn't a number`, () => {
    expect(caesarCipher('hello', '5')).toBeNull();
    expect(caesarCipher('world', [])).toBeNull();
    expect(caesarCipher('', { one: 1 })).toBeNull();
    expect(caesarCipher('caesar', /10/)).toBeNull();
  });
});
