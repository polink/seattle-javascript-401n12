import { createStore } from 'redux';
import sectionReducer from './reducer/section-reducer';

export default () => {
  return createStore(sectionReducer);
};