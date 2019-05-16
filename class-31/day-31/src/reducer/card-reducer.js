export default (state = {}, {type, payload}) => {
  let updatedState = null;
  let sectionCards = null;
  let updatedCards = null;

  switch (type) {
    case 'SECTION_CREATE':
      // vinicio - here the payload is the section we just created
      return {...state,[payload.id]: []};
    case 'SECTION_DELETE':
      updatedState = {...state};
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE':
      // Vinicio - CARD_CREATE assumes that it runs AFTER SECTION_CREATE
      // Vinicio - payload is a card
      sectionCards = state[payload.sectionId];
      updatedCards = [...sectionCards, payload];
      return {...state, [payload.sectionId]: updatedCards};
    case 'CARD_DELETE':
      return state;
    case 'CARD_UPDATE':
      sectionCards = state[payload.sectionId];
      updatedCards = sectionCards.map(currentCard => {
        return currentCard.id === payload.id ? payload : currentCard;
      });
      return {...state, [payload.sectionId]:updatedCards};
    default:
      return state;
  }
};