const path = require('path')

module.exports = {
    "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    "framework": "@storybook/react",
    "typescript": {
        "reactDocgen": "react-docgen",
    },
    core: {
        builder: "webpack5"
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('tailwindcss'), require('autoprefixer')],
                        },
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });
        return config
    },
}
