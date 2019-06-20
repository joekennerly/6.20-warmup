let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log('original array', integers);


let newNums = integers
// Sort the numbers in descending order (10, 9, 8, 7, etc).
  .sort((current, next) => current - next)
  .reverse()
  // Remove any integers greater than 19.
  .filter(number => number < 19)
  // Multiply each remaining number by 1.5 and then substract 1.
  .map(num => (num * 1.5) - 1)
  // Then output (either in the DOM or the console) the sum of all the resulting numbers.
  .reduce((current, next) => current + next)

console.log('sum total', newNums);

