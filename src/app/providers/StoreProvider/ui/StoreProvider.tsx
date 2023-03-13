import {FC, PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {StateScheme} from 'app/providers/StoreProvider';
import {ReducersMapObject} from '@reduxjs/toolkit';
import {useNavigate} from 'react-router-dom';

interface StoreProviderProps {
    initialState?: DeepPartial<StateScheme>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>;
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
    children,
    initialState,
    asyncReducers
}) => {
    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateScheme,
        asyncReducers as ReducersMapObject<StateScheme>,
        navigate
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
