import { useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [bookArray, setBookArray] = useState([
    {
      id: 1,
      title: 'Hunger Games',
      author: 'R.R.Rolling',
    },
    {
      id: 2,
      title: 'Lord of the Rings',
      author: 'J.J.Victoria',
    },
  ]);

  const delbook = (id) => {
    setBookArray([
      ...bookArray.filter((bookitem) => bookitem.id !== id),
    ]);
  };

  return (
    <>
      <ul>
        { bookArray.map((bookitem) => (
          <li key={bookitem.id}><Book bookProp={bookitem} delbook={delbook} /></li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
