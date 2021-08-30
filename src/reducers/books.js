import { REMOVE_BOOK, CREATE_BOOK } from '../actions/index';

const initialState = {
  books: [],
};

function booksReducer(state = initialState, action) {
  if (action.type === REMOVE_BOOK) {
    return {
      books: state.books.filter((book) => book !== book.id),
    };
  }

  if (action.type === CREATE_BOOK) {
    return {
      books: state.books.push({
        id: action.id,
        title: action.id,
        category: action.category,
      }),
    };
  }

  return state;
}

export default booksReducer;
