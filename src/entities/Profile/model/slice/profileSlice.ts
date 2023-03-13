import {Profile, ProfileScheme} from '../types/Profile';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileScheme = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                })
            .addCase(fetchProfileData.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
