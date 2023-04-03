import {Profile, ProfileScheme} from '../types/Profile';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';
import {updateProfileData} from '../services/updateProfileData/updateProfileData';

const initialState: ProfileScheme = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, {payload}: PayloadAction<boolean>) => {
            state.readonly = payload;
        },
        updateForm: (state, {payload}: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...payload
            };
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, {payload}) => {
                state.validateErrors = payload;
                state.isLoading = false;
            });
    }
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
