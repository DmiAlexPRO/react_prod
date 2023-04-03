import {getLoginUsername} from './getLoginUsername';
import {StateScheme} from 'app/providers/StoreProvider';

describe('getLoginUsername', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: 'Bob'
            }
        };
        expect(getLoginUsername(state as StateScheme)).toEqual('Bob');
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginUsername(state as StateScheme)).toEqual('');
    });
});
