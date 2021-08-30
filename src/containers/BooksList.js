import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

function BooksList() {
  const books = useSelector((state) => state.booksReducer);
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
