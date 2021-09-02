import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';

function BooksForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'category') {
      setCategory(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createBook({
      id: Date.now().toString(),
      title,
      category,
    }));
    setTitle('');
    setCategory('');
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

  return (
    <div className="add-books">
      <h2 className="title">ADD BOOK</h2>
      <form action="">
        <input className="Lesson-Panel" type="text" name="title" value={title} onChange={handleChange} placeholder="book title" />
        <select
          value={category}
          name="category"
          onChange={handleChange}
          className="Lesson-Panel-category"
        >
          {collection.map((category) => (
            <option key={category} value={category}>
              {' '}
              {category}
              {' '}
            </option>
          ))}
        </select>
        <button className="Rectangle-2" type="submit" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default BooksForm;
