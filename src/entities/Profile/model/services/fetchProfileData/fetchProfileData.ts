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

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(ErrorType.AUTH_ERROR);
        }
    }
);
