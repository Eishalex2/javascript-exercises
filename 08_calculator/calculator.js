const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, number) => {
    return total + number;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, number) => {
    return total * number;
  }, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(number) {
	if (number === 0) return 1;
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
