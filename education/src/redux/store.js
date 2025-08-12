import { configureStore } from "@reduxjs/toolkit";
import cardShoping from "./cartSlice";
import themeReducer from "./themeSlice"

export const store = configureStore({
  reducer: {
    cart: cardShoping,
    theme: themeReducer
  },
});
