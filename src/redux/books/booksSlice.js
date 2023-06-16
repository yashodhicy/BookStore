import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ikr08Eaq8b4oLKCQJpOk/books';

export const FetchBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const RemoveBook = createAsyncThunk(
  'books/deleteBooks',
  async (itemId, thunkAPI) => {
    try {
      const resp = await axios.delete(`${url}/${itemId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const AddBook = createAsyncThunk(
  'books/addBook',
  async (newBook, rejectWithValue) => {
    const book = {
      item_id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      category: 'Fiction',
    };
    try {
      const resp = await axios.post(url, book);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// export const RemoveBookAPI
const initialState = {
  books: {},
  isLoading: false,
};

const bookSlice = createSlice({

  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(FetchBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default bookSlice.reducer;
