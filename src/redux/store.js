import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./slices/querySlice.js";
import weatherReducer from "./slices/weatherSlice.js";

export const store = configureStore({
  reducer: {
    queri: queryReducer,
    weather: weatherReducer,
  },
});
