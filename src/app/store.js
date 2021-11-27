import { configureStore } from '@reduxjs/toolkit';
import mainPAgeReducer from "../features/mainPage/mainPageSlice"

export const store = configureStore({
  reducer: {
    mainPage:mainPAgeReducer
  },
});
