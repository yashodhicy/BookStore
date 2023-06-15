import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBooks());
  }, [dispatch]);

  const bookArray = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  return (
    <>
      {isLoading ? (<div>Loading...</div>) : (
        <ul>
          { bookArray && Object.keys(bookArray).map((bookId) => (
            <li key={bookId}><Book bookProp={bookArray[bookId]} id={bookId} /></li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookList;
