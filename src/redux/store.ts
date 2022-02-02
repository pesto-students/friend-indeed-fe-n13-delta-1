import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// slices
import counterReducer from '../counter/counterSlice'
import homeReducer from '../pages/Home/HomeSlice'
import profileReducer from '../pages/MyProfile/MyProfile.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
    profile: profileReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
