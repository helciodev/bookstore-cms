import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ handleFilter }) {
  return (
    <tr>
      <td>
        <select className="CATEGORIES" onChange={handleFilter} name="categoryFilter" id="">
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-fi</option>
        </select>
      </td>
    </tr>
  );
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
