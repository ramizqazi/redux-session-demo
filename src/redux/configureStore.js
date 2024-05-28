import { configureStore } from '@reduxjs/toolkit';

import postsNormalizedReducer from './postSlice-normalized';
import postsReducer from './postsSlice';

const store = configureStore({
  reducer: {
    postsNormalized: postsNormalizedReducer,
    posts: postsReducer
  },
});

export default store;
