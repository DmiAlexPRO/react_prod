import {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {useStore} from 'react-redux';
import {ReduxStoreWithManager} from 'app/providers/StoreProvider';
import {StateSchemeKey} from 'app/providers/StoreProvider/config/StateScheme';
import {Reducer} from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemeKey]?: Reducer;
}

type ReducersListEntry = [StateSchemeKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<PropsWithChildren<DynamicModuleLoaderProps>> = ({
    children,
    reducers,
    removeAfterUnmount= true
}) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};
