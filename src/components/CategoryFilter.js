import React from 'react';

function CategoryFilter() {
  return (
    <tr>
      <td>
        <label htmlFor="categoryFIlter">
          category filter:
          <select name="categoryFilter" id="">
            <option value="action">action</option>
            <option value="biography">biography</option>
            <option value="kids">kids</option>
          </select>
        </label>
      </td>
    </tr>
  );
}

export default CategoryFilter;
