import {Story} from '@storybook/react';
import {StateScheme, StoreProvider} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateScheme>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
