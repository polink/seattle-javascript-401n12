import cardReducer from '../reducer/card-reducer';


describe('#CardReducer', () => {
  test('initial state', () => {
    const initialState = cardReducer(undefined,{type:'UNDEF', payload:null});
    expect(initialState).toEqual({});
  });

  test('adding a new section', () => {
    const newState = cardReducer({},
      {type:'SECTION_CREATE', payload:{id: 0.28}});

    expect(newState).toEqual({0.28: []});
  });
});