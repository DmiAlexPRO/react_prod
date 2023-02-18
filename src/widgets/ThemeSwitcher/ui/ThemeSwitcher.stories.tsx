import {ThemeSwitcher} from './ThemeSwitcher';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> =
    (args) => (
        <div style={{backgroundColor: 'var(--inverted-bg-color)', height: '100vh', width: '100%'}}>
            <ThemeSwitcher {...args} />
        </div>
    );

// light theme
export const Light = Template.bind({});

// dark theme
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
