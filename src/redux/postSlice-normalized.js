import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import dummyData from "../posts";

// Create entity adapter
const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
  isLoading: false,
  error: null,
});
const filledState = postsAdapter.setAll(initialState, dummyData.posts);

// Slice
const postsSlice = createSlice({
  name: "posts",
  initialState: filledState,
  reducers: {
    togglePost: (state, action) => {
      postsAdapter.updateOne(state, {
        id: action.payload.id,
        isActive: action.payload.value,
      });
    },
  },
});

export const { togglePost } = postsSlice.actions;

export const {
  selectAll: selectAllposts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.postsNormalized);

export default postsSlice.reducer;
