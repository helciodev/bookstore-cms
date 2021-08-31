import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList() {
  const books = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();

  function handleRemoveBook(book) {
    dispatch(removeBook(book));
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Books</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              removeBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
