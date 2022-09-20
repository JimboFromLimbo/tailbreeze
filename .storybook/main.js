module.exports = {
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {...config.resolve.alias},
    config.resolve.extensions.push(".ts", ".tsx")
    return config
  },
  typescript: {
    reactDocgen: false,
  },
}