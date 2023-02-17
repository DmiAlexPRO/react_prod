import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Sidebar} from './Sidebar';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> =
    (args) => <Sidebar {...args} />;

// light theme
export const Light = Template.bind({});
Light.args = {};

// dark theme
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
