// import 'storybook-addon-i18n/register.js';

module.exports = {
    'stories': [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    'framework': '@storybook/react',
    'core': {
        'builder': '@storybook/builder-webpack5'
    }
};
