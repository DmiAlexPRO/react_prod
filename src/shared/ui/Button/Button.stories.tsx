import {ComponentMeta, ComponentStory} from '@storybook/react';
import 'app/styles/index.scss';
import {Button, ButtonTheme} from './Button';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> =
    (args) => <Button {...args} />;

// light theme
export const DefaultLight = Template.bind({});
DefaultLight.args = {
    children: 'Button'
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY
};

export const NegativeLight = Template.bind({});
NegativeLight.args = {
    children: 'Button',
    theme: ButtonTheme.NEGATIVE
};

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED
};

// dark theme
export const DefaultDark = Template.bind({});
DefaultDark.args = {
    children: 'Button'
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NegativeDark = Template.bind({});
NegativeDark.args = {
    children: 'Button',
    theme: ButtonTheme.NEGATIVE
};
NegativeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
