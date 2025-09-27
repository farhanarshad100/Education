import { configureStore } from "@reduxjs/toolkit";
import cardShoping from "./cartSlice";
import themeReducer from "./themeSlice"
import taskSection from "./taskSlice"
export const store = configureStore({
  reducer: {
    cart: cardShoping,
    theme: themeReducer,
    tasks: taskSection
  },
});
