import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ bookProp }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="book-details">
        <h4 className="genre">fiction</h4>
        <input type="text" className="title" value={bookProp.title} readOnly />
        <h4 className="author">{bookProp.author}</h4>
      </div>
      <div className="actions">
        <ul>
          <li><button type="button">Comment</button></li>
          <li><button type="button" onClick={() => { dispatch(removeBook(bookProp.item_id)); }}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
    </>
  );
};

Book.propTypes = {
  bookProp: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
