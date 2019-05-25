// express -> request,response, next
// redux => store,next,action (BUT CURRIED)

// Vinicio - this is how the function would look if it
// was a regular function
// function(store, next, action) {
//
// }

// Vinicio - this is the industry standard (FP)
export default store => next => action => {
  try {
    console.log('__ACTION__', action);
    // Vinicio - 1 - we are moving the action through the chain
    // Vinicio - 2 - we save the result so that we can go back
    const result = next(action); // -->
    return result; // <--
  } catch (error) {
    console.log('__ERROR__');
    // Vinicio - here you would save this to an API
    action.error = error;
    return action; // <--
  }
}

// Vinicio - intermediate state
// export default store => {
//   return next => {
//     return action => {
//       // Vinicio - here you do your work
//     }
//   };
// }

// Vinicio- raw state
// const x = function(store){
//  return function(next) {
//    return function(action) {
//      // Vinicio- here, you do your work
//    }
//  }
// }