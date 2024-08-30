const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '/': (x, y) => x / y,
  '*': (x, y) => x * y,
};

const arithmeticConstructor = (numOneDefault, numTwoDefault, operator) => {
  return function (numOne = numOneDefault, numTwo = numTwoDefault) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);

    if (isNaN(numOne) || isNaN(numTwo)) return null;

    return operations[operator](numOne, numTwo);
  };
};

const calculator = {
  add: arithmeticConstructor(0, 0, '+'),
  subtract: arithmeticConstructor(0, 0, '-'),
  divide: arithmeticConstructor(0, 1, '/'),
  multiply: arithmeticConstructor(0, 0, '*'),
};

module.exports = calculator;
