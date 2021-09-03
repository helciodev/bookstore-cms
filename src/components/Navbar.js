import React from 'react';
import { useDispatch } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { createFilter } from '../actions/index';

function Navbar() {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const { name, value } = event.target;
    if (name === 'categoryFilter') {
      if (value !== 'All') {
        dispatch(createFilter(value));
      } else {
        dispatch(createFilter(''));
      }
    }
  };

  return (
    <navbar className="navbar">
      <div className="parent">
        <div className="Bookstore-CMS">Bookstore CMS</div>
        <div className="BOOKS">Books</div>
        <div>
          <CategoryFilter handleFilter={handleFilter} />
        </div>
      </div>

      <div>
        <img className="user-profile" src="./user.svg" alt="user-profile-icon" />
      </div>
    </navbar>
  );
}

export default Navbar;
