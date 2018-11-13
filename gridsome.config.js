module.exports = {
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'YOUR_SPACE', // required
        accessToken: 'YOUR_ACCESS_TOKEN', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
