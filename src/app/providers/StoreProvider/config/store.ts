import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateScheme} from './StateScheme';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';

export function createReduxStore(
    initialState?: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>
) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateScheme>({
        reducer: reducerManager.reduce,
        devTools: _IS_DEV,
        preloadedState: initialState
    });


    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
