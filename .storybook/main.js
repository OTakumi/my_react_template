const path = require('path')

module.exports = {
    "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: '@storybook/addon-styling',
            options: {
                postCss: true,
            },
        },
    ],
    "framework": "@storybook/react",
    "typescript": {
        "reactDocgen": "react-docgen",
    },
    core: {
        builder: "webpack5"
    },
}
