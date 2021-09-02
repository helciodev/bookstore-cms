import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList() {
  const books = useSelector((state) => state.booksReducer.books);
  const filter = useSelector((state) => state.filterReducer.filter);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const unFiltered = books.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      category={book.category}
      removeBook={handleRemoveBook}
    />
  ));
  const filtered = books.filter((book) => book.category === filter).map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      category={book.category}
      removeBook={handleRemoveBook}
    />
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Books</th>
          </tr>
        </thead>
        <tbody>
          {filter ? filtered : unFiltered}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
