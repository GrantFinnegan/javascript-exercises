const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(array) {
	let total = 0;
  for (element of array) {
    total += element;
  }
  return total;
};

const multiply = function(array) {
  let product = 1;
  for (element of array) {
    product *= element;
  }
  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let product = 1;
  for (let i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
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
