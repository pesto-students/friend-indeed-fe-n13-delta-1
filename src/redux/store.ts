import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// slices
import upcomingMeetingsReducer from '../UpcomingMeetings/upcomingMeetingsSlice';
import counterReducer from '../counter/counterSlice'
import homeReducer from '../pages/Home/HomeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    upcomingMeetings: upcomingMeetingsReducer,
    home: homeReducer
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
