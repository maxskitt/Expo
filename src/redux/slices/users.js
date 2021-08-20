import {createSlice} from "@reduxjs/toolkit";
import {concat} from "lodash";

const initialState = {
  collection: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: () => initialState,
    usersRequested: (state, action) => {
      state.loading = true
    },
    usersSucceeded: (state, action) => {
      state.collection = concat(state.collection, action.payload.articles)
      state.loading = false
    },
    usersFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    usersClear: (state, action) => {
      state.loading = false
      return initialState
    },
  },
});

export const {
  reset,
  usersRequested,
  usersSucceeded,
  usersFailed,
  usersClear
} = slice.actions;

export default slice.reducer;
