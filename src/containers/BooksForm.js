import React, { useState } from 'react';

function BooksForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'category') {
      setCategory(value);
    }
  }

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

  console.log(title, category);
  return (
    <div>
      <form action="">
        <input type="text" name="title" value={title} onChange={handleChange} placeholder="book title" />
        <select
          value={category}
          name="category"
          onChange={handleChange}
        >
          {collection.map((category) => (
            <option key={category} value={category}>
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
