export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'FILTER';

export function createBook(book) {
  return {
    type: CREATE_BOOK,
    book,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}

export function createFilter() {
  return {
    type: CHANGE_FILTER,
  };
}
