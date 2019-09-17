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
        typeName: 'Contentful'
      }
    }
  ]
}
