import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/area/login/state/login.slice'

const store = configureStore({
  reducer: {
    login: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;