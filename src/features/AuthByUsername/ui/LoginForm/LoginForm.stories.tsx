import {ComponentMeta, ComponentStory} from '@storybook/react';
import 'app/styles/index.scss';
import {LoginForm} from './LoginForm';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,

    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> =
    (args) => <LoginForm {...args} />;

// light theme
export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: {
            username: '123', password: '321'
        }
    })
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
    StoreDecorator({
        loginForm: {
            username: '123', password: '321', error: 'kek'
        }
    })
];
