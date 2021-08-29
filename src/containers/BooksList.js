import React from 'react';
// import { useSelector } from 'react-redux';
import Book from '../components/Book';

function BooksList() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Books</th>
          </tr>
        </thead>
        <tbody>
          <Book id="" title="" category="" />
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
