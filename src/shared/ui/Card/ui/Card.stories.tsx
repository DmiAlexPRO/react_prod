import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import {Card} from './Card';
import {Text} from 'shared/ui/Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" text="text text" />
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="test" text="text text" />
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
