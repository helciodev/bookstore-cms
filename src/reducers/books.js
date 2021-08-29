import { REMOVE_BOOK, CREATE_BOOK } from '../actions/index';

const initialState = {
  books: [],
};

function booksReducer(state = initialState, action) {
  if (action.type === REMOVE_BOOK) { /* */ }

  if (action.type === CREATE_BOOK) { /* */ }

  return state;
}

export default booksReducer;
