import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ handleFilter }) {
  return (
    <tr>
      <td>
        <label htmlFor="categoryFIlter">
          category filter:
          <select onChange={handleFilter} name="categoryFilter" id="">
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Biography">Biography</option>
            <option value="Kids">Kids</option>
            <option value="Learning">Learning</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Sci-fi">Sci-fi</option>
          </select>
        </label>
      </td>
    </tr>
  );
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
