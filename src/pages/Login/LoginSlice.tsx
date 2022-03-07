import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { API } from '../../shared/utils/helper';

export type userAuthorizationState  = {
    name: string,
    email: string,
    role: string,
    loggedIn: boolean,
    accessToken: string,
}

interface AuthorizationState {
  userInfo: userAuthorizationState,
  status: 'idle' | 'loading' | 'failed';

}

const initialState: AuthorizationState = {
  userInfo:{
    name: '',
    email: '',
    role: '',
    loggedIn: false,
    accessToken: '',
  },
  status: 'idle',

};



export const loginUser = createAsyncThunk(
  `user/login`,
  async () => {
    const response = await new Promise<{ data: userAuthorizationState }>((resolve) =>
    setTimeout(() => resolve({ 
        data: {
            name: 'Joel',
            email: 'lavotivinay@gmal.com',
            role: 'therapist',
            loggedIn: true,
            accessToken: "Agdfbdujfjkfjhgf",
          },
    }), 1000)
    );
    return response.data
  }
)

  
export const loginSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    logoutUser: () => initialState,
  },
  extraReducers: (builder)=>{
    // login user
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled,(state,{payload}) => {
        state.status =  'idle';
        state.userInfo=  payload
      });
  },
});
export const { logoutUser } = loginSlice.actions;


export const userData = (state: RootState) => state.auth;

export default loginSlice.reducer;