import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook, FetchBooks } from '../redux/books/booksSlice';

const Book = ({ bookProp, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="book-details">
        <h4 className="genre">fiction</h4>
        <input type="text" className="title" value={bookProp[0].title} readOnly />
        <h4 className="author">{bookProp[0].author}</h4>
      </div>
      <div className="actions">
        <ul>
          <li><button type="button">Comment</button></li>
          <li>
            <button
              type="button"
              onClick={() => {
                dispatch(RemoveBook(id));
                setTimeout(() => {
                  dispatch(FetchBooks());
                }, 1300);
              }}
            >
              {' '}
              Remove
            </button>
          </li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
    </>
  );
};

Book.propTypes = {
  bookProp: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
