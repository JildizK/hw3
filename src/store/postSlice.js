import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk (
  'posts/getPosts',
  async () => {
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return data;
  } 
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getPosts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.posts = action.payload
    }
   )}

})

export default postSlice.reducer