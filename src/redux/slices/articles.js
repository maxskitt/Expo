import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  collection: [],
  meta: {},
  param: {
    page: 1,
    total: 1,
    query: null,
    per: 5
  },
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "aritcles",
  initialState,
  reducers: {
    reset: () => initialState,
    articlesRequested: (state, action) => {
      state.loading = true
    },
    articlesSucceeded: (state, action) => {
      state.collection = action.payload.articles
      state.loading = false
    },
    articlesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
  },
});

export const {
  reset,
  articlesRequested,
  articlesSucceeded,
  articlesFailed,

} = slice.actions;

export default slice.reducer;

// state.param.total = ceil(action.payload.articles.pop() / 3)






