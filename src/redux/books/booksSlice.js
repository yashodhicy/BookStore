import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ikr08Eaq8b4oLKCQJpOk/books';

export const FetchBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      // console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

// export const removeBook = (state, action) => {
//     state.books = state.books.filter((bookitem) => bookitem.item_id !== action.payload);
// },

export const AddBook = createAsyncThunk(
  'books/addBook',
  async (newBook, rejectWithValue) => {
    const book = {
      item_id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      category: 'fiction',
    };
    try {
      const resp = await axios.post(url, book);
      return resp.data;
    } catch (error) {
      // console.log(error);
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
  reducers: {
    // addBook: (state, action) => {
    //   const newBook = {
    //     item_id: uuidv4(),
    //     title: action.payload.title,
    //     author: action.payload.author,
    //     category:'fiction',
    //   };
    //   state.books.push(newBook);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchBooks.fulfilled, (state, action) => {
      // console.log(action);
        state.isLoading = false;
        state.books = action.payload;
        console.log(state.books);
      })
      .addCase(FetchBooks.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
