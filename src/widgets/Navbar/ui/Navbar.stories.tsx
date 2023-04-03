import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Navbar} from './Navbar';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> =
    (args) => <Navbar {...args} />;

// light theme
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

// dark theme
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
    user: {authData: {}}
})];
