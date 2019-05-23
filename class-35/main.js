'use strict';


// // Vinicio - O(n) where N is the size of the string
// const simpleHash = (string) => {
//   let hashValue = 0;
//
//   for(let i = 0; i < string.length; i++){
//     hashValue += string.charCodeAt(i);
//   }
//   return hashValue;
// };
//
// const hashV2 = (string) => {
//   let hashValue = 0;
//
//   for(let i = 0; i < string.length; i++){
//     hashValue += i ** string.charCodeAt(i);
//   }
//   return hashValue;
// };
//
// const hashV3 = (string, maxCapacity) => {
//   let hashValue = 0;
//
//   for(let i = 0; i < string.length; i++){
//     hashValue += (i ** string.charCodeAt(i)) % maxCapacity;
//   }
//   return hashValue % maxCapacity;
// };
//
// console.log(hashV3('acb', 1000));
// console.log(hashV3('abc',1000));



// Vinicio - all big O analysis is based on the length of the string
const countCharacters = (bigString) => { // O(n)
  let tracker = new Map();
  let words = bigString.split(' ');
  let biggestWordSoFar = null;
  let biggestWordSoFarCount = 0;

  for(let word of words) {// O(n)

    if(tracker.has(word)) { // O(1)
      tracker.set(word, tracker.get(word) + 1); // O(1)
      if(tracker.get(word) + 1 > biggestWordSoFarCount) {
        biggestWordSoFar = word;
        biggestWordSoFarCount = tracker.get(word) + 1;
      }
    } else{
      tracker.set(word, 1); // O(1)
      if (biggestWordSoFar === null) {
        biggestWordSoFar = word;
        biggestWordSoFarCount = 1;
      }
    }
  }
  return tracker;
};


console.log(countCharacters('kali is is cute cute cute'));











