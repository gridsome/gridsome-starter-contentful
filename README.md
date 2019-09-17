# Contentful Starter for Gridsome

## Guide

Add your Contentful Space ID and Access Token to the plugin options.

```js
// gridsome.config.js
module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'SPACE_ID', // required
        accessToken: 'ACCESS_TOKEN', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
```
