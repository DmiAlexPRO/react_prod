import {FC, PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {StateScheme} from 'app/providers/StoreProvider';

interface StoreProviderProps {
    initialState?: StateScheme;
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
    children,
    initialState
}) => {
    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
