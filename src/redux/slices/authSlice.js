// src/redux/slices/authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const token = Cookies.get('access_token');

const initialState = {
  isLoggedIn: !!token 
     // true if token exists, false otherwise
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeUserState: (state, action) => {
      state.isLoggedIn = action.payload;
      
    }
  }
});

export const { changeUserState } = authSlice.actions;
export default authSlice.reducer;
