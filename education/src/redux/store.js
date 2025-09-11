import { configureStore } from "@reduxjs/toolkit";
import cardShoping from "./cartSlice";
import themeReducer from "./themeSlice"
import tasksReducer from "./taskSlice"
export const store = configureStore({
  reducer: {
    cart: cardShoping,
    theme: themeReducer,
    tasks: tasksReducer
  },
});
