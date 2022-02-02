import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../redux/store';
import { API } from '../../shared/utils/helper';

export type Profile = {
  name: string,
  email: string,
  imageUrl?: string,
}

export interface ProfileState {
  data: Profile | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProfileState = {
  data: null,
  status: 'idle',
};

export const fetchProfileAsync = createAsyncThunk(
  'profile/fetchData',
  async () => {
    const response = await new Promise<Profile>((resolve) =>
      setTimeout(() => resolve({ 
        name: "Brindavan",
        email: "brindi@gmail.com"
      }), 1000)
    );
    return response
  }
)

export const uploadPhotoAsync = createAsyncThunk(
  'profile/uploadPicture',
  async (data) => {
    const response = await axios.post(`https://api.cloudinary.com/v1_1/friendindeed/image/upload`, {
      file: {},
      timestamp: new Date().toLocaleDateString(),
      api_key: '437741655674911',
      signature: 'BJk-ociOBpdvGhtYgiRWegpqitU'
    })
    return response.data
  }
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfileAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
  },
});

export const selectData = (state: RootState) => state.profile;

export default profileSlice.reducer;
