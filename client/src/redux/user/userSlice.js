import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // reducer for signIn 
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // reducer for updateUser...
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // reducer for deleteUser...
    deleteUserStart: (state) => {
      state.currentUser = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // reducer for signOutUser...
    signOutUserStart: (state) => {
      state.currentUser = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserStart,
  deleteUserSuccess, 
  deleteUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
