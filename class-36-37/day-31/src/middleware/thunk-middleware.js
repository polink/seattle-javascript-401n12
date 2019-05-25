// Do we have an async action or a sync action?
//  context: async actions are just functions
// if we have an async action -> execute the action
// else proceed to the store

export default store => next => action =>
  (typeof action === 'function' ? action(store) : next(action));

// if(typeof action === 'function') {
//   return action(store);
// }
// else {
//   return next(action);
// }
