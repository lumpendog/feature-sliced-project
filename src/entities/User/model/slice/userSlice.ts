import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AUTH_DATA_KEY } from 'shared/const/localStorage';
import { type User, type UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      // TODO consider refactor it later in order to have only pure functions in reducers
      const user = localStorage.getItem(AUTH_DATA_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      // TODO consider refactor it later in order to have only pure functions in reducers
      localStorage.removeItem(AUTH_DATA_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;