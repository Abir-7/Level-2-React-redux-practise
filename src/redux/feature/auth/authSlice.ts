import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IUser {
  userId: string;
  role: string;
  iat: number;
  exp: number;
}

export interface IAuthState {
  user: null | IUser;
  token: null | string;
}

const initialState: IAuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export const userToken = (state: RootState) => state.auth.token;
export const userInfo = (state: RootState) => state.auth.user;
export default authSlice.reducer;
