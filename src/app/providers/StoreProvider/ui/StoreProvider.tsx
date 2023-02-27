import {FC, PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {StateScheme} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';

interface StoreProviderProps {
    initialState?: DeepPartial<StateScheme>;
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
    children,
    initialState
}) => {
    const store = createReduxStore(initialState as StateScheme);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
