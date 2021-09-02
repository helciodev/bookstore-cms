import React from 'react';
import PropTypes from 'prop-types';

function Book({
  id, title, category, removeBook,
}) {
  return (
    <div className="Book-container">
      <div className="book-info">
        <span className="book-category">
          {category}
        </span>
        <h3 className="book-title">{title}</h3>
        <p className="author">Cristian Dior</p>
        <ul className="action">
          <li className="action-item">Comments</li>
          <li className="action-item"><button type="button" onClick={() => removeBook({ id, title, category })}>Remove</button></li>
          <li className="action-item">Edit</li>
        </ul>
      </div>
      <div className="percentage">
        <div className="progress-ring">
          <svg className="progress-ring__wrapper">
            <circle
              className="progress-ring__circle"
              fill="transparent"
              r="32"
              cx="34"
              cy="34"
            />
          </svg>
        </div>
        <div>
          <p className="percentage-num">64 %</p>
          <p className="completed">completed</p>
        </div>
      </div>
      <div className="update">
        <span className="current">
          current chapter
        </span>
        <p className="chapter">chapter 17</p>
        <button className="update-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
