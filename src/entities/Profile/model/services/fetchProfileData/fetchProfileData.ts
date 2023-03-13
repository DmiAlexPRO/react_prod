import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {ErrorType} from 'shared/types/ErrorType';
import {Profile} from '../../types/Profile';

interface FetchProfileDataProps {
    username: string;
    password: string;
}

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileDataProps',
    async (_, {
        rejectWithValue,
        extra
    }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (e) {
            if (_IS_DEV) {
                console.log(e); // TEMP
            }
            return rejectWithValue(ErrorType.AUTH_ERROR);
        }
    }
);
