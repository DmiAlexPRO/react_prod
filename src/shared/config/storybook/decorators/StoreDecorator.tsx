import {Story} from '@storybook/react';
import {StateScheme, StoreProvider} from 'app/providers/StoreProvider';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm: loginReducer
};

// eslint-disable-next-line react/display-name
export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
    >
        <StoryComponent />
    </StoreProvider>
);
