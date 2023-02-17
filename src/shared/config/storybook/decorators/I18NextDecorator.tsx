import {Story} from '@storybook/react';
import {Suspense} from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nextForTests from '../../../../../src/shared/config/i18n/i18nextForTests';

export const I18NextDecorator = (StoryComponent: Story) => (
    <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18nextForTests}>
            <StoryComponent />
        </I18nextProvider>
    </Suspense>
);
