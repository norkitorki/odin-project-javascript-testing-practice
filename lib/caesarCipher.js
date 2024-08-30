function caesarCipher(str = '', shift = 0) {
  if (typeof str !== 'string' || typeof shift !== 'number') {
    return null;
  }

  shift = Math.round(shift);
  const shiftedCodes = str.split('').map((char) => {
    let code = char.charCodeAt(0);
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
      const base = code < 91 ? 65 : 97;
      return (
        (((code % base) + (shift < 0 ? 26 + (shift % 26) : shift)) % 26) + base
      );
    } else {
      return code;
    }
  });

  return String.fromCharCode(...shiftedCodes);
}

module.exports = caesarCipher;
