import {Spinner} from './Spinner';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Spinner',
    component: Spinner,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> =
    (args) => <Spinner {...args} />;

// light theme
export const Light = Template.bind({});

// dark theme
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
