import React from 'react';
import PropTypes from 'pro-types';

function Book({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>Title</td>
      <td>Category</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.obj.isRequired,

};

export default Book;
