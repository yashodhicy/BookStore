import PropTypes from 'prop-types';

const Book = ({ bookProp, delbook }) => (
  <>
    <div className="book-details">
      <h4 className="genre">fiction</h4>
      <input type="text" className="title" value={bookProp.title} readOnly />
      <h4 className="author">{bookProp.author}</h4>
    </div>
    <div className="actions">
      <ul>
        <li><button type="button">Comment</button></li>
        <li><button type="button" onClick={() => delbook(bookProp.id)}>Remove</button></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
  </>

);

Book.propTypes = {
  bookProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  delbook: PropTypes.func.isRequired,
};

export default Book;
