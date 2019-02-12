// For developers, it's really important to know how 'fast' our code is
// If we think about it, the word fast is very vague
// 12ms/seconds/hours
// THe code is running on a specific computer

// Old computer 50 seconds
// New computer 0.001 second
// IT"S THE SAME CODE


// Big O assumes a theoretical computer RAM (random Access Machine)
// +
// -
// *
// /
// if
// call a function
// assign values (i.e. x = 5)
// we call this BASIC OPERATIONS

// Several examples of big O notation
// O(1) (fastest)
// O(n) --> We are going to start talking about this one
// O(n^2)
// O(log n)
// O(n log n) (slowest)

// Less Common:
// O(n!)
// O(2^n)


//-------------------------------------------------------------------
// O(N)
//-------------------------------------------------------------------
let array = [];
// INPUT = ARRAY
let operations = 0;// EXTRA
//------------------------------------------------------------------
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
  operations++;// EXTRA
}
//------------------------------------------------------------------
console.log(array.length);//EXTRA (We call the size of the input N)
console.log(operations);//EXTRA
// BASIC OPERATIONS = console.log (call a function)

// Vinicio - THE BIG QUESTION TO ASK OURSELVES IS
// How does the number of basic operations change as the size of
// the input changes

// I'm calling console.log as many times as elements I have in my array
// We cal this O(n)
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// O(1)
//-------------------------------------------------------------------
array = [];
// INPUT = ARRAY
operations = 0;// EXTRA
//------------------------------------------------------------------
for(let i = 0; i < 5; i++) {
  console.log('Kali is Cute');
  operations++;// EXTRA
}
//------------------------------------------------------------------
console.log(array.length);
console.log(operations);

// Vinicio - THE BIG QUESTION TO ASK OURSELVES IS
// How does the number of basic operations change as the size of
// the input changes
// I'm calling console.log (Or any other basic operations) independently of the size of the input => O(1)

// O(5) -> O(1)

//-------------------------------------------------------------------
// 2 types of big O -> Time and Space (Part of the infinity stones ;) )
// TIME
// How does the number of basic operations change as the size of
// the input changes

// SPACE
// How does the amount of space used change as the size of
// the input changes
