import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddBook, FetchBooks } from '../redux/books/booksSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    item_id: '',
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(AddBook(newBook));

        setNewBook({
          item_id: '',
          title: '',
          author: '',
        });
        setTimeout(() => {
          dispatch(FetchBooks());
        }, 1300);
      }}
      >
        <input type="text" name="title" placeholder="Book title" value={newBook.title} onChange={handleInputChange} />
        <input type="text" name="author" placeholder="Book author" value={newBook.author} onChange={handleInputChange} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBook;
