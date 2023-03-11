import {ComponentMeta, ComponentStory} from '@storybook/react';
import 'app/styles/index.scss';
import {Text, TextTheme} from './Text';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> =
    (args) => <Text {...args} />;

// light theme
export const LightTheme = Template.bind({});
LightTheme.args = {
    title: 'Title',
    text: 'text'
};

export const TitleLightTheme = Template.bind({});
TitleLightTheme.args = {
    title: 'Text'
};

export const TextLightTheme = Template.bind({});
TextLightTheme.args = {
    text: 'Text'
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'text',
    theme: TextTheme.ERROR
};

// dark theme
export const DarkTheme = Template.bind({});
DarkTheme.args = {
    title: 'Title',
    text: 'text'
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleDarkTheme = Template.bind({});
TitleDarkTheme.args = {
    title: 'Text'
};
TitleDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const TextDarkTheme = Template.bind({});
TextDarkTheme.args = {
    text: 'Text'
};
TextDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const TextDarkThemeError = Template.bind({});
TextDarkThemeError.args = {
    title: 'Title',
    text: 'text',
    theme: TextTheme.ERROR
};
TextDarkThemeError.decorators = [ThemeDecorator(Theme.DARK)];

