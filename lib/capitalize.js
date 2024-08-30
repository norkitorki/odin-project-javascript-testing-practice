function capitalize(str) {
  if (typeof str !== 'string') return null;

  str = str.toLowerCase();
  return str.replace(/^\w/, (str[0] || '').toUpperCase());
};

module.exports = capitalize;
