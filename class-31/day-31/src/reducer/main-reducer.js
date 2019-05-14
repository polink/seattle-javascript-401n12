import {combineReducers} from 'redux';
import sections from './section-reducer';
import cards from './card-reducer';

export default combineReducers({
  sections,
  cards,
});