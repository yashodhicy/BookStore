import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookArray = useSelector((state) => state.books.books);
  return (
    <>
      <ul>
        { bookArray.map((bookitem) => (
          <li key={bookitem.item_id}><Book bookProp={bookitem} /></li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
