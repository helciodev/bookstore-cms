import { REMOVE_BOOK, CREATE_BOOK } from '../actions/index';

const initialState = {
  books: [],
};

function booksReducer(state = initialState, action) {
  if (action.type === REMOVE_BOOK) {
    return {
      books: [
        ...state.books.filter((book) => book.id !== action.book.id),
      ],
    };
  }

  if (action.type === CREATE_BOOK) {
    return {
      books: [
        ...state.books,
        {
          id: Date.now(),
          title: action.book.title,
          category: action.book.category,
        },
      ],
    };
  }

  return state;
}

export default booksReducer;
