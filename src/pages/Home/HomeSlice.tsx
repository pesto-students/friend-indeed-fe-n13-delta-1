import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';
import { API } from '../../shared/utils/helper';
import { TherapistInfoCardProps } from './components/TherapistInfoCard/TherapistInfoCard';

export type CategoryProps = {
  id: string,
  name: string,
  active: boolean,
  createdAt: string,
  updatedAt: string,
}

export interface UCMeetingsState {
  data: TherapistInfoCardProps[];
  categories: CategoryProps[];
  status: 'idle' | 'therapistsloading' | 'categoriesloading' | 'failed';
}

const initialState: UCMeetingsState = {
  data: [],
  categories: [],
  status: 'idle',
};

export const fetchTherapistsAsync = createAsyncThunk(
  'therapists/fetchData',
  async () => {
    const response = await API.get('/therapist');
    return response.data;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchData',
  async () => {
    const response = await API.get('/category');
    return response.data;
  }
);

export const homeSlice = createSlice({
  name: 'therapists',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTherapistsAsync.pending, (state) => {
        state.status = 'therapistsloading';
      })
      .addCase(fetchTherapistsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload?.data;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'categoriesloading'
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.categories = action.payload?.data;
      });
  },
});

export const selectData = (state: RootState) => state.home;

export default homeSlice.reducer;
