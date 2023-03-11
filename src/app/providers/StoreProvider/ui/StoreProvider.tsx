import {FC, PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {StateScheme} from 'app/providers/StoreProvider';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';

interface StoreProviderProps {
    initialState?: DeepPartial<StateScheme>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>;
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
    children,
    initialState,
    asyncReducers
}) => {
    const store = createReduxStore(
        initialState as StateScheme,
        asyncReducers as ReducersMapObject<StateScheme>
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
