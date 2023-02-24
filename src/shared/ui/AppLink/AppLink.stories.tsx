import {AppLink, AppLinkTheme} from './AppLink';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        children: 'Link',
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> =
    (args) => <AppLink {...args} />;

// light theme
export const DefaultLight = Template.bind({});
DefaultLight.args = {};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    theme: AppLinkTheme.PRIMARY
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
    theme: AppLinkTheme.INVERTED
};

export const RedLight = Template.bind({});
RedLight.args = {
    theme: AppLinkTheme.RED
};

// dark theme
export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: AppLinkTheme.INVERTED
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    theme: AppLinkTheme.RED
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

