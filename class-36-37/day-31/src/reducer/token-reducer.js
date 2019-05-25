const initialState = null;

export default (state = initialState, {type, payload}) => {
  // What is our payload?
  const token = payload;
  switch(type) {
    case 'TOKEN_SET': // login
      // Vinicio - our payload is a TOKEN
      return token;
    case 'TOKEN_REMOVE': // log out
      return null;
    default:
      return state;
  }
};