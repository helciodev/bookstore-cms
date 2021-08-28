import initialState from '../index';

const REMOVE_BOOK = 'REMOVE_BOOK';
const CREATE_BOOK = 'CREATE_BOOK';

function booksReducer(state = initialState, action) {
  if (action.type === REMOVE_BOOK) { /* */ }

  if (action.type === CREATE_BOOK) { /* */ }

  return state;
}

export default booksReducer;
