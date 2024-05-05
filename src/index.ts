import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./store/reducers/count-reducer";

const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
