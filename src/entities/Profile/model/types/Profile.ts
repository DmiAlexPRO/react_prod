import {Currency} from 'shared/types/Currency';
import {Country} from 'shared/types/Country';

export interface Profile {
    firstname: string;
    lastname: string;
    age: 22,
    currency: Currency,
    country: Country;
    city: string,
    username: string;
    avatar: string;
}

export interface ProfileScheme {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
