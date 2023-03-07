import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateScheme} from './StateScheme';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {loginReducer} from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    };

    return configureStore<StateScheme>({
        reducer: rootReducers,
        devTools: _IS_DEV,
        preloadedState: initialState
    });
}
