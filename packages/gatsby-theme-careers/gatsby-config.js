module.exports = ({
  basePath = '/',
  title = 'Gatsby Theme Careers',
  spaceId,
  accessToken,
} = {}) => ({
  siteMetadata: {
    title,
    basePath,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        downloadLocal: true,
        spaceId,
        accessToken,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`
      }
    }
  ],
})
