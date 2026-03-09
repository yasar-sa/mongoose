import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import addressReducer from "./addressSlice";
import uiReducer from "./uiSlice";


export const store = configureStore({
  reducer: {
    users: userReducer,
    addresses: addressReducer,
    ui: uiReducer
  }
});