import React from 'react';
//------------------------------------------------------------------------------
// TESTING
//------------------------------------------------------------------------------
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux'; // Vinicio -we need to establish a connection
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import configureStore from 'redux-mock-store';
//------------------------------------------------------------------------------
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });


const initialState = {
  sections: [
    {title:'Kali', id:'0.123', createdOn: new Date()},
    {title:'Khal', id:'0.111', createdOn: new Date()}
    ],
  cards: {
    0.123 : [],
    0.111 : []
  },
};

describe("#Landing", () => {
  test('testing connection to the store', () => {
    const mockStore = configureStore([]);

    const mountedApp = mount(<Provider store={mockStore(initialState)}><App/></Provider>);

    expect(mountedApp.find('SectionForm')).toBeTruthy();
    expect(mountedApp.contains('Kali')).toBeTruthy();
    expect(mountedApp.contains('Khal')).toBeTruthy();
  });
});
