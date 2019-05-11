// let value = 0;
//
// let increase = () => {
//   value++;
// };
//
// let decrease = () => {
//   value--;
// };

'use strict';

const { createStore } = require('redux');


const DEFAULT_STATE = 0; // Vinicio - this is NOT state right now
// -----------------------------------------------------------------------
// CREATE REDUCERS & ACTIONS
// -----------------------------------------------------------------------
// Let's define three actions: INCREASE, DECREASE, RESET
const simpleReducer = (state = DEFAULT_STATE, action) => {
  // Vinicio - de-structuring our action
  const { type, payload } = action;
  // Vinicio - you may notice a lack of validation here

  switch(type) {
    case 'INCREASE':
      return state + payload;
    case 'DECREASE':
      if(state - payload < 0){
        return DEFAULT_STATE;

      }
      return state - payload;
    case 'RESET':
      return DEFAULT_STATE;
    default:
      return state;
  }
};

// const simpleReducer = (state, {type, payload}) => {
//   // Vinicio - de-structuring our action
// };

// -----------------------------------------------------------------------
// CREATE STORE
// -----------------------------------------------------------------------
const testStore = createStore(simpleReducer);
// -----------------------------------------------------------------------
// DISPATCH ACTIONS TO THE STORE
// -----------------------------------------------------------------------
testStore.dispatch({type:'INCREASE', payload:100});
testStore.dispatch({type:'DECREASE', payload:1000});
console.log(testStore.getState());
testStore.dispatch({type:'RESET', payload:null});
console.log(testStore.getState());












