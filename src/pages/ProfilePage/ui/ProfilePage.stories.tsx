import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {ProfilePageAsync as ProfilePage} from './ProfilePage.async';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
