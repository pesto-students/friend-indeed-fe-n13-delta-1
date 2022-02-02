import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';
import { API } from '../../shared/utils/helper';
import { TherapistInfoCardProps } from './components/TherapistInfoCard/TherapistInfoCard';

export type MeetingCardProps = {
  date: string,
  time: string,
  title: string,
  meetingLink: string,
}

export type CategoryProps = {
  id: string,
  name: string,
  active: boolean,
  createdAt: string,
  updatedAt: string,
}

export type TherapistDataFilters = {
  category?: string,
  experience?: number,
  rating?: number,
  fee?: number
}

export interface HomeState {
  data: TherapistInfoCardProps[];
  categories: CategoryProps[];
  upcomingMeetings: MeetingCardProps[];
  filters: TherapistDataFilters;
  status: 'idle' | 'therapistsloading' | 'categoriesloading' | 'meetingsloading' | 'failed';
}

const initialState: HomeState = {
  data: [],
  categories: [],
  upcomingMeetings: [],
  filters: {
    category: undefined,
    experience: undefined,
    rating: undefined,
    fee: undefined,
  },
  status: 'idle',
};

export const fetchTherapistsAsync = createAsyncThunk(
  'therapists/fetchData',
  async (filters: TherapistDataFilters) => {
    console.log(filters)
    const response = await API.get('/therapist',{ params: filters });
    return response.data?.data;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchData',
  async () => {
    const response = await API.get('/category');
    return response.data?.data;
  }
);

export const fetchUpcomingMeetingsAsync = createAsyncThunk(
  'upcomingMeetings/fetchData',
  async () => {
    const response = await new Promise<{ data: MeetingCardProps[] }>((resolve) =>
    setTimeout(() => resolve({ 
      data:  [
        {
          date: "25 Jan",
          time: "04: 00pm",
          title: "Session between Lakshitha & Dr.Khanchandani",
          meetingLink: "https://meet.google.com/zwb-koam-dgs",
        },
        {
          date: "04 Feb",
          time: "01: 00pm",
          title: "Session between Lakshitha & Dr.Mohini",
          meetingLink: "https://meet.google.com/zwb-koam-dgs",
        },
        {
          date: "16 Feb",
          time: "05: 00pm",
          title: "Session between Lakshitha & Dr.Parag",
          meetingLink: "https://meet.google.com/zwb-koam-dgs",
        }
      ]
    }), 1000)

    );
    return response.data
  }
)

export const homeSlice = createSlice({
  name: 'therapists',
  initialState,
  reducers: {
    setFilters: (state, action) => {     
      state.filters = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTherapistsAsync.pending, (state) => {
        state.status = 'therapistsloading';
      })
      .addCase(fetchTherapistsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'categoriesloading'
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.categories = action.payload;
      });
    builder
      .addCase(fetchUpcomingMeetingsAsync.pending, (state) => {
        state.status = 'meetingsloading'
      })
      .addCase(fetchUpcomingMeetingsAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.upcomingMeetings = action.payload;
      });
  },
});

export const { setFilters } = homeSlice.actions;

export const selectData = (state: RootState) => state.home;

export default homeSlice.reducer;
