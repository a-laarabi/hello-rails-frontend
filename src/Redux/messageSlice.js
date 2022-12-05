import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/messages';

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
);

const messageReducer = createSlice({
  name: 'message',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchMessages.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default messageReducer.reducer;