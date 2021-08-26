import React from 'react';
import BooksForm from '../reducers/BooksForm';
import BooksList from '../reducers/BooksList';

function App() {
  return (
    <>
      <BooksForm />
      <BooksList />
    </>
  );
}

export default App;
