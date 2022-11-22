import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd'

import { RootState } from '../../redux/store';
import { API } from '../../shared/utils/helper';
import { STORAGE_KEY_CONSTANT, STORAGE_USER_CONSTANT } from '../../shared/utils/constants';


export interface ChatState {
  senderId: any;
  receiverId: any;
  content: string;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}
export interface ProfileState {
  data:  ChatState| null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  
}
const initialState: ProfileState = {
  data: null,
  status: 'idle',
  error: null
};


export const sendMessage = createAsyncThunk(
  `chat/sendMessage`,
  async () => {
    const response = await new Promise<{ data: ChatState }>((resolve) =>
    setTimeout(() => resolve({ 
        data: {
            senderId:"",
            receiverId:"",
            content:"hi",
            status: "idle",
            error: "",

          },
    }), 1000)
    );
    return response.data
  }
)


export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed'
        state.error = String(action.payload)
      })
  },
});


export const selectData = (state: RootState) => state.chat;

export default chatSlice.reducer;
