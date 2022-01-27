import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, AppThunk } from '../redux/store';
import { fetchMeetings } from './upcomingMeetingsAPI';

export interface MeetingCardProps {
  date: string;
  time: string;
  title: string;
  meetingLink: string;
}

export interface UCMeetingsState {
  data: MeetingCardProps[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UCMeetingsState = {
  data: [],
  status: 'idle',
};

export const fetchMeetingsAsync = createAsyncThunk(
  'upcomingMeetings/fetchData',
  async () => {
    console.log('hello')
    const response = await fetchMeetings();
    return response.data;
  }
);

export const ucMeetingsSlice = createSlice({
  name: 'upcomingMeetings',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeetingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMeetingsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state: RootState) => state.upcomingMeetings;

export default ucMeetingsSlice.reducer;
