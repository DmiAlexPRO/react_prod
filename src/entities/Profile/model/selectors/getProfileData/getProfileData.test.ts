import { StateScheme } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Belarus,
            lastname: 'chikchirik',
            firstname: 'Sanyok',
            city: 'Minsk',
            currency: Currency.USD
        };
        const state: DeepPartial<StateScheme> = {
            profile: {
                data
            }
        };
        expect(getProfileData(state as StateScheme)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});
