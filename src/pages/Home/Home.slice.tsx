import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';
import { API } from '../../shared/utils/helper';
import { User } from '../MyProfile/MyProfile.slice';
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
  fee?: number,
  page: number
}

export type Patient = {
  id: string,
  name: string,
  imageUrl: string,
  date: string,
  categories: string[]
}

export interface HomeState {
  data: TherapistInfoCardProps[];
  dataCount: number;
  categories: CategoryProps[];
  upcomingMeetings: MeetingCardProps[];
  patients: Patient[];
  filters: TherapistDataFilters;
  status: 'idle' | 'therapistsloading' | 'categoriesloading' | 'meetingsloading' | 'patientsLoading' | 'failed';
  error: string | null;
}

const initialState: HomeState = {
  data: [],
  dataCount: 0,
  categories: [],
  upcomingMeetings: [],
  patients: [],
  filters: {
    category: undefined,
    experience: undefined,
    rating: undefined,
    fee: undefined,
    page: 1
  },
  status: 'idle',
  error: null,
};

export const fetchTherapistsAsync = createAsyncThunk(
  'therapists/fetchData',
  async (filters: TherapistDataFilters, { rejectWithValue }) => {
    try {
      const response = await API.get('/therapist',{ params: filters });
      if(response.data.success) {
        return response.data;
      } else {
        rejectWithValue(response.data.error)
      }
    } catch (e: any) {
      rejectWithValue(e?.response?.data?.message)
    }
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/category');
      if(response.data.success) {
        return response.data?.data;
      } else {
        rejectWithValue(response.data.error)
      }
    } catch (e: any) {
      rejectWithValue(e?.response?.data?.message)
    }
  }
);

export const fetchUpcomingMeetingsAsync = createAsyncThunk(
  'upcomingMeetings/fetchData',
  async (
    { userId, role }: { userId: string, role: User},
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.get(`booking/${userId}/upcoming-meetings`, {
        params: { role }
      })
      if(data?.success) {
        return data?.data
      } else {
        rejectWithValue(data?.error)
      }
    } catch (e: any) {
      rejectWithValue(e?.response?.data)
    }
  }
)

export const fetchPatientsAsync = createAsyncThunk(
  'patients/fetchData',
  async (query?: string) => {
    const response = await new Promise<Patient[]>((resolve) =>
    setTimeout(() => resolve([
        {
          id: 'h24gbb42ikn',
          name: 'Hruday',
          imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Lt6uKVNG--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/322705/1412670d-03f2-4342-bf66-483956dde97a.jpeg',
          date: new Date('13 February, 2022').toUTCString(),
          categories: [
            'Depression',
            'Anxiety'
          ]
        }
      ]), 1000)
    );
    return response
  }
)

export const homeSlice = createSlice({
  name: 'therapists',
  initialState,
  reducers: {
    setFilters: (state, action) => {     
      state.filters = action.payload
    },
    incrementPage: (state) => {
      state.filters.page++ 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTherapistsAsync.pending, (state) => {
        state.status = 'therapistsloading';
      })
      .addCase(fetchTherapistsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = state.data.concat(action.payload?.data?.data);
        state.dataCount = action.payload?.count
      })
      .addCase(fetchTherapistsAsync.rejected, (state, action) => {
        state.status = 'idle'
        state.error = String(action.payload)
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
    builder
      .addCase(fetchPatientsAsync.pending, (state) => {
        state.status = 'patientsLoading'
      })
      .addCase(fetchPatientsAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.patients = action.payload;
      });
  },
});

export const { setFilters, incrementPage } = homeSlice.actions;

export const selectData = (state: RootState) => state.home;

export default homeSlice.reducer;
