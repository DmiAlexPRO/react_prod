import {Story} from '@storybook/react';

import 'shared/config/i18n/i18nextForTests';

// Не пашет, скорее всего, не хватает объвленных неймспейсов, перечитать доку и сделать кастомный конфиг, как для тестов
export const I18NextDecorator = (StoryComponent: Story) => <StoryComponent />;
