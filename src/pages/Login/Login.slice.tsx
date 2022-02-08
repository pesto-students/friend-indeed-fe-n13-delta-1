import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd'

import { RootState } from '../../redux/store';
import { API } from '../../shared/utils/helper';

export enum User {
  patient = 'Patient',
  therapist = 'Therapist'
}

export interface LoginState {
  persona: User;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  currentUser: any;
}

const initialState: LoginState = {
  persona: User.patient,
  status: 'idle',
  error: null,
  currentUser: null
};

export const loginTherapistAsync = createAsyncThunk(
  'therapist/login',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get(`/therapist/login`)
      if(data.success) {
        return data?.data
      } else {
        return rejectWithValue(data?.error)
      }
    } catch (err: any) {
      return rejectWithValue(err?.response?.data)
    }
  }
)

export const loginPatientAsync = createAsyncThunk(
  'patient/login',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get(`/patient/login`)
      if(data.success) {
        return data?.data
      } else {
        return rejectWithValue(data?.error)
      }
    } catch (err: any) {
      return rejectWithValue(err?.response?.data)
    }
  }
)

export const initiatePaymentAsync = createAsyncThunk(
  'patientProfile/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.post(`/payment/initiate`)
      if(data.success) {
        return data?.data
      } else {
        return rejectWithValue(data?.error)
      }
    } catch (err: any) {
      return rejectWithValue(err?.response?.data)
    }
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLoginPersona: (state, action) => {
      state.persona = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPatientAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginPatientAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentUser = action.payload;
      })
      .addCase(loginPatientAsync.rejected, (state, action) => {
        state.status = 'idle'
        state.error = String(action.payload)
      })
    builder
      .addCase(loginTherapistAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginTherapistAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.currentUser = action.payload
      })
      .addCase(loginTherapistAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = String(action.payload)
      })
  },
});

export const selectData = (state: RootState) => state.auth;

export default loginSlice.reducer;
