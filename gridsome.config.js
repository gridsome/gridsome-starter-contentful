require('dotenv').config()
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CTF_SPACE_ID, // required
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
