import { createStore } from 'redux';
import mainReducer from './reducer/main-reducer';
// Vinicio - this is just a development tool
import {composeWithDevTools} from "redux-devtools-extension";

export default () => {
  return createStore(mainReducer, composeWithDevTools());
};