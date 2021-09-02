import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BooksList />
      <hr className="hr" />
      <BooksForm />
    </div>
  );
}

export default App;
