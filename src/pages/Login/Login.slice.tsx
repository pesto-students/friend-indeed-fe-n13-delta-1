import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd'

import { RootState } from '../../redux/store';
import { API } from '../../shared/utils/helper';
import { STORAGE_KEY_CONSTANT, STORAGE_USER_CONSTANT } from '../../shared/utils/constants';

export enum User {
  patient = 'Patient',
  therapist = 'Therapist',
  none = ''
}

export interface LoginState {
  persona: User;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  currentUser: any;
}

const initialState: LoginState = {
  persona: User.none,
  status: 'idle',
  error: null,
  currentUser: null
};

export const userLoginAsync = createAsyncThunk(
  'user/login',
  async ({ role, profileObj }: { role: User, profileObj: any}, { rejectWithValue }) => {
    try {
      const { data } = await API.post(`/auth/login?role=${role}`, {
         ...profileObj?.profileObj
      })
      localStorage.setItem(STORAGE_KEY_CONSTANT, data?.access_token)
      const { data: user } = await API.get('/auth/me', {
        headers: { Authorization: `Bearer ${data?.access_token}` }
      })
      localStorage.setItem(STORAGE_USER_CONSTANT, JSON.stringify({
        ...user,
        role,
      }))
      notification.success({ message: 'Successfully logged in!' })
      return {
        ...user,
        role,
      }
    } catch (err: any) {
      console.log("here",err)
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
      .addCase(userLoginAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(userLoginAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.currentUser = action.payload
        window.location.href = '/dashboard'
      })
      .addCase(userLoginAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = String(action.payload)
      })
  },
});

export const { changeLoginPersona } = loginSlice.actions

export const selectData = (state: RootState) => state.auth;

export default loginSlice.reducer;
