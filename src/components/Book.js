import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook, FetchBooks } from '../redux/books/booksSlice';
import styles from './Book.module.css';

function Book({ bookProp, id }) {
  const dispatch = useDispatch();
  const randomPercentage = Math.floor(Math.random() * 100) + 1;
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return (
    <div className={styles.book}>
      <div className={styles['book-details']}>
        <div className={styles.maininfo}>
          <h4 className={styles.genre}>fiction</h4>
          <input
            type="text"
            className={styles.title}
            value={bookProp[0].title}
            readOnly
          />
          <h4 className={styles.author}>{bookProp[0].author}</h4>
          <div className={styles.actions}>
            <ul className={styles.actionsul}>
              <li className={styles.comment}>
                <button type="button" className={styles.action}>
                  Comment
                </button>
              </li>
              <li className={styles.remove}>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(RemoveBook(id));
                    setTimeout(() => {
                      dispatch(FetchBooks());
                    }, 1300);
                  }}
                  className={styles.action}
                >
                  {' '}
                  Remove
                </button>
              </li>
              <li className={styles.edit}>
                <button type="button" className={styles.action}>
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.readstate}>
          <div className={styles.circle} />
          <article className={styles.statusdetails}>
            <h2>
              {randomPercentage}
              %
            </h2>
            <p className={styles.completed}>Completed</p>
          </article>
        </div>
        <div className={styles.currentchapter}>
          <p className={styles.chaptitle}>CURRENT CHAPTER</p>
          <p>
            Chapter
            {' '}
            {randomNumber}
          </p>
          <button type="button" className={styles.update}>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

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
