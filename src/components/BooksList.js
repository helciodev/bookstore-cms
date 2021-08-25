import React from 'react';
import Book from 'Book';

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
          <Book book={{ id: 2, title: '', category: '' }} />
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
