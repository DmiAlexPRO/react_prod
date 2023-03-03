import {ComponentMeta, ComponentStory} from '@storybook/react';
import 'app/styles/index.scss';
import {LoginForm} from './LoginForm';
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
