'use strict';

let countEvenNumbers = (array) => {
  let counter = 0;

  for(let item of array) {
    if(item %2 === 0) {
      counter++;
    }
  }

  return counter
};

let countEvenRecursively = (array) => {
  // ---------------------------------------------------------
  // Base Case || Stop Case
  // ---------------------------------------------------------
  if(array.length === 0) {
    return 0;
  }
  // ---------------------------------------------------------
  // Recursive Case
  // ---------------------------------------------------------
  let item = array.shift();

  if(item % 2 === 0) {
    return 1 + countEvenRecursively(array);
  } else {
    return 0 + countEvenRecursively(array);
  }
};

let countEvenRecursively = (array) => {
  return countEvenRecursivelyHelper(array,0);
};

let countEvenRecursivelyHelper = (array,counter) => {
  // ---------------------------------------------------------
  // Base Case || Stop Case
  // ---------------------------------------------------------
  if(array.length === 0) {
    return counter;
  }
  // ---------------------------------------------------------
  // Recursive Case
  // ---------------------------------------------------------
  const item = array.shift();

  if (item % 2 === 0) {
    return countEvenRecursivelyHelper(array, counter + 1);
  } else {
    return countEvenRecursivelyHelper(array, counter + 0);
  }
};

console.log(countEvenRecursively([1,2,2,8,1]));