import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User, userActions} from 'entities/User';
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage';
import {ErrorType} from 'shared/types/ErrorType';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: ErrorType }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            if (_IS_DEV) {
                console.log(e); // TEMP
            }
            return thunkAPI.rejectWithValue(ErrorType.AUTH_ERROR);
        }
    }
);
