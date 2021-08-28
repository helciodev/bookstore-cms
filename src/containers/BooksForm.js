import React from 'react';

function BooksForm() {
  const collection = [
    '--categories--',
    'Action',
    'History',
    'Biography',
    'Horror',
    'Kids',
    'Learning',
    'Sci-fi',
  ];
  return (
    <div>
      <form action="">
        <input type="text" placeholder="book title" />
        <select>
          {collection.map((category) => (
            <option key={category.id}>
              {' '}
              {category}
              {' '}
            </option>
          ))}
        </select>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default BooksForm;
