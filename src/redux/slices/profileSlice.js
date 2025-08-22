import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  userDetails: null,
  onboarded: JSON.parse(localStorage.getItem("onboarded")) || false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setUserDetails(state, action) {
      state.userDetails = action.payload;
      // Remove automatic onboarded update here
    },
    setOnboarded(state, action) {
  state.onboarded = action.payload;
  localStorage.setItem("onboarded", JSON.stringify(action.payload)); // ✅ persist to localStorage
},

    setLoading(state, action) {
      state.loading = action.payload;
    },
    logout(state) {
      state.user = null;
      state.userData = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, setUserDetails, setOnboarded, setLoading, logout } = profileSlice.actions;
export default profileSlice.reducer;
