require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Ahsan`,
    siteTitleAlt: `M Ahsan Siddiq`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Can be used for e.g. JSONLD
    siteHeadline: `MuahmmadAhsanSiddiq`,
    
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.hassan11196.codes`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@hassan11196`,
    // Used for SEO
    siteDescription: `Muhammad Ahsan Siddiq Portfolio - I'm a Senior at FAST-NUCES, Python and React-Js Developer and a Budding Data Scientist.`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muhammad Ahsan Portflio`,
        short_name: `Ahsan`,
        description: `Muhammad Ahsan Siddiq Portfolio - I'm a Senior at FAST-NUCES, Python and React-Js Developer and a Budding Data Scientist.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,

  ],
}
