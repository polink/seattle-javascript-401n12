export default (state = [], {type, payload}) => {
  // Vinicio - remember to understand your payload
  // Vinicio - in this case, the payload is a section
  switch (type) {
    case 'SECTION_CREATE':
      return [...state, payload];
    case 'SECTION_UPDATE':
      // Vinicio - we are going to use map
      return null;
    case 'SECTION_DELETE':
      // Vinicio - we are going to use filter
      return null;
    default:
      return state;
  }
};