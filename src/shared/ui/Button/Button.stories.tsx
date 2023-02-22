import {ComponentMeta, ComponentStory} from '@storybook/react';
import 'app/styles/index.scss';
import {Button, ButtonSize, ButtonTheme} from './Button';
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

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED
};

export const BackgroundLight = Template.bind({});
BackgroundLight.args = {
    children: 'Button',
    theme: ButtonTheme.BG
};

export const BackgroundInvertedLight = Template.bind({});
BackgroundInvertedLight.args = {
    children: 'Button',
    theme: ButtonTheme.BG_INVERTED
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

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: 'Button',
    theme: ButtonTheme.BG
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: 'Button',
    theme: ButtonTheme.BG_INVERTED
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];


// size square
export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '<',
    size: ButtonSize.M,
    square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '<',
    size: ButtonSize.L,
    square: true
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '<',
    size: ButtonSize.XL,
    square: true
};

// size
export const SizeM = Template.bind({});
SizeM.args = {
    children: 'Button',
    size: ButtonSize.M
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: 'Button',
    size: ButtonSize.L
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Button',
    size: ButtonSize.XL
};
