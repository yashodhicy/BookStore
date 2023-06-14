import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((bookitem) => bookitem.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
