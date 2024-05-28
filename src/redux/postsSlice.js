import { createSlice } from "@reduxjs/toolkit";

import dummyData from "../posts";

const initialState = {
  isLoading: false,
  error: null,
  posts: dummyData?.posts,
};

// Slice
const postsSlice = createSlice({
  name: "postsNormalized",
  initialState,
  reducers: {
    togglePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id
          ? { ...post, isActive: action.payload.value }
          : post
      );
    },
  },
});

export const { togglePost } = postsSlice.actions;

export default postsSlice.reducer;
