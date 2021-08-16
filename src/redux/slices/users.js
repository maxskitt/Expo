import { createSlice } from "@reduxjs/toolkit";
import {find} from "lodash";

const initialState = {
  collection: [],
  profile: [],
  meta: {},
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
      state.loading = false
      state.collection = action.payload.users
    },
    usersFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
  },
});

export const { reset, usersRequested, usersSucceeded, usersFailed } = slice.actions;

export default slice.reducer;
