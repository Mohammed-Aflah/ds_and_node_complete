// Function to double a number
const double = (x) => x * 2;
const add5 = (x) => x + 5;

const doubleAndAdd5 = (x) => add5(double(x));
console.log(doubleAndAdd5(3));
