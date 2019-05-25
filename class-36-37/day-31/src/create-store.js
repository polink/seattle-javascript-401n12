import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducer/main-reducer';
// Vinicio - this is just a development tool
import {composeWithDevTools} from "redux-devtools-extension";
import reduxReporter from '../src/middleware/redux-reporter';

export default () => {
  return createStore(mainReducer, composeWithDevTools(
    applyMiddleware(reduxReporter)
  ));
};