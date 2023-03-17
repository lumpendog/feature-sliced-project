import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ProfileValidationErrors, type Profile } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
Profile,
undefined,
ThunkConfig<ProfileValidationErrors[]>
>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>('/profile', formData);
      const profile = response.data;

      if (!profile) throw new Error();

      return profile;
    } catch (error) {
      return rejectWithValue([ProfileValidationErrors.SERVER_ERROR]);
    }
  },
);