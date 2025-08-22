import rootReducer from "@/reducer";
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../redux/slices/authSlice";
import profilereducer from "../redux/slices/profileSlice";
const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    profile: profilereducer,
  },
});

export default store;
