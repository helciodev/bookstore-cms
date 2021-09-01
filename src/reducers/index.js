import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

export default combineReducers({ booksReducer, filterReducer });
