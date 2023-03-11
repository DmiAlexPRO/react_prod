import {loginActions, loginReducer} from './loginSlice';
import {DeepPartial} from '@reduxjs/toolkit';
import {LoginScheme} from 'features/AuthByUsername';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginScheme> = {username: 'Bob'};
        expect(loginReducer(
            state as LoginScheme,
            loginActions.setUsername('Tony')
        )).toEqual({username: 'Tony'});
    });

    test('test set password', () => {
        const state: DeepPartial<LoginScheme> = {password: 'neBob123'};
        expect(loginReducer(
            state as LoginScheme,
            loginActions.setPassword('tochnoNeBob1452989765')
        )).toEqual({password: 'tochnoNeBob1452989765'});
    });
});
