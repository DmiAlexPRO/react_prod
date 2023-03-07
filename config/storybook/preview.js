import {StyleDecorator} from '../../src/shared/config/storybook/decorators/StyleDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import {addDecorator} from '@storybook/react';
import {Theme} from '../../src/app/providers/ThemeProvider';
import {RouterDecorator} from '../../src/shared/config/storybook/decorators/RouterDecorator';
// import {TranslationDecorator} from '../../src/shared/config/storybook/decorators/TranslationDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

addDecorator(StyleDecorator);
// addDecorator(TranslationDecorator);
// eslint-disable-next-line new-cap
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
