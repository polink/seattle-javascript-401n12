// vinicio - this is a regular function
const sum = (a,b) => {
  return a + b;
};

// vinicio - this is a recursive function

const recursiveSum = (a, b) => {
  //---------------------------------------
  // BASE CASE
  //---------------------------------------
  // vinicio - base case is when you STOP the recursion
  if(b === 0) {
    // a infinite recursion is similar to an infinite loop
    // but WAY WORSE
    // Vinicio - STAPH
    return a;
  }
  //---------------------------------------
  // RECURSIVE CASE
  //---------------------------------------
  // Vinicio - recursive case is where we make calls
  // to ourselves
  // Vinicio - this happens before I get my return value
  // meaning, here I'm going down
  return recursiveSum(a+1, b-1);
  // Vinicio - this happens after I get my return value
  // meaning, here I'm going up
};


const arrayLength = (array) => {
  return array.length;
};

const recursiveArrayLength = (array, counter) => {
	//--------------------------------------------
	// Vinicio - Base case
	//--------------------------------------------
  if(counter === array.length) {
    return counter;
  }
	//--------------------------------------------
	// Vinicio - Recursive case
	//--------------------------------------------
  return recursiveArrayLength(array,counter +1);
};

const addElementsInArray = (array) => {
	let total = 0;
	for(let element of array) {
		total += element;
	}
	return total;
};

const recursiveAddElementsInArray = (array, total, index) => {
  // Base Case
  if(array.length === index + 1) {
    return total + array[index];
  }
  // Recursive Case
  return recursiveAddElementsInArray(array,total + array[index], index + 1);
};

const recursiveAddElementsInArray2 = (array, index) => {
  // Base Case
  if(array.length === index + 1) {
    return array[index];
  }
  // Recursive Case
  // Vinicio - GOING DOWN
  const restOfTheArray = recursiveAddElementsInArray2(array, index + 1);
  // Vinicio - GOING UP
  return array[index] + restOfTheArray;
};


console.log(recursiveAddElementsInArray2([1,2,3,4],0));
