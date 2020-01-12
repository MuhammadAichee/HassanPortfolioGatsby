require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Hassan`,
    siteTitleAlt: `M.HassanAhmed`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Can be used for e.g. JSONLD
    siteHeadline: `HassanAhmed`,
    
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.hassan11196.codes`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@hassan11196`,
    // Used for SEO
    siteDescription: `M. Hassan Ahmed Portfolio - I'm a Junior at FAST-NUCES, Python and React-Js Developer and a Budding Data Scientist.`,
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
        name: `Hassan Ahmed Portflio`,
        short_name: `Hassan`,
        description: `M. Hassan Ahmed Portfolio - I'm a Junior at FAST-NUCES, Python and React-Js Developer and a Budding Data Scientist.`,
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
