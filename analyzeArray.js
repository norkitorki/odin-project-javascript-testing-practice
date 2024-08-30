function analyzeArray(arr = []) {
  if (!Array.isArray(arr)) throw new Error('Argument is not an array');

  let min,
    max,
    sum = 0,
    numCount = 0;

  arr.forEach((el) => {
    if (typeof el === 'number') {
      sum += el;
      numCount++;
      if (!min || el < min) min = el;
      if (!max || el > max) max = el;
    }
  });

  if (numCount === 0) return {};

  return { average: sum / numCount, min, max, length: arr.length };
}

module.exports = analyzeArray;
