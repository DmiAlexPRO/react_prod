import {getLoginPassword} from './getLoginPassword';
import {DeepPartial} from '@reduxjs/toolkit';
import {StateScheme} from 'app/providers/StoreProvider';

describe('getLoginPassword', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '12345678'
            }
        };
        expect(getLoginPassword(state as StateScheme)).toEqual('12345678');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginPassword(state as StateScheme)).toEqual('');
    });
});
