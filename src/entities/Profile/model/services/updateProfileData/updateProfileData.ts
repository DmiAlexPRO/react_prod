import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {ErrorType} from 'shared/types/ErrorType';
import {Profile} from '../../types/Profile';
import {getProfileForm} from 'entities/Profile';

interface FetchProfileDataProps {
    username: string;
    password: string;
}

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, {
        rejectWithValue,
        extra,
        getState
    }) => {
        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            if (_IS_DEV) {
                console.log(e); // TEMP
            }
            return rejectWithValue(ErrorType.AUTH_ERROR);
        }
    }
);
