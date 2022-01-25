import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../redux/store';
import { fetchCount } from './upcomingMeetingsAPI';

interface MeetingCardProps {
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
  data: [
    {
      date: "25 Jan",
      time: "04: 00pm",
      title: "Session between Lakshitha & Dr.Khanchandani",
      meetingLink: "https://meet.google.com/zwb-koam-dgs",
    },
    {
      date: "04 Feb",
      time: "01: 00pm",
      title: "Session between Lakshitha & Dr.Khanchandani",
      meetingLink: "https://meet.google.com/zwb-koam-dgs",
    },
    {
      date: "16 Feb",
      time: "05: 00pm",
      title: "Session between Lakshitha & Dr.Khanchandani",
      meetingLink: "https://meet.google.com/zwb-koam-dgs",
    }
  ],
  status: 'idle',
};

export const ucMeetingsSlice = createSlice({
  name: 'upcomingMeetings',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
  },

});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state: RootState) => state.upcomingMeetings.data;

export default ucMeetingsSlice.reducer;
