import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginScheme} from '../types/loginScheme';
import {loginByUsername} from '../services/loginByUsername/loginByUsername';

const initialState: LoginScheme = {
    username: '',
    isLoading: false,
    password: ''
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, {payload}: PayloadAction<string>) => {
            state.username = payload;
        },
        setPassword: (state, {payload}: PayloadAction<string>) => {
            state.password = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, {payload}) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false;
            });
    }
});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;
