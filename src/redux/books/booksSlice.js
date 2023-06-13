import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      const newBook = {
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.books.push(newBook);
    },
    RemoveBook: (state, action) => {
      state.books = state.books.filter((bookitem) => bookitem.id !== action.payload);
    },
  },
});

export const { AddBook, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;
