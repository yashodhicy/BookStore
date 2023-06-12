import { useState } from 'react';

const NewBook = () => {
  const [newBook, setNewBook] = useState({
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
      <form>
        <input type="text" name="title" placeholder="Book title" value={newBook.title} onChange={handleInputChange} />
        <input type="text" name="author" placeholder="Book author" value={newBook.author} onChange={handleInputChange} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBook;
