import { type UserSchema, type User } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUser/getUserAuthData';

export {
  userActions,
  userReducer,
  type UserSchema,
  type User,
  getUserAuthData,
};