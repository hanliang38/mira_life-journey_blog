import type { GatsbyConfig, PluginRef } from "gatsby";
import "dotenv/config";

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.mjs
    siteTitle: `mira-life-journey_blog`,
    siteTitleAlt: `mira - Gatsby Blog & Portfolio`,
    siteHeadline: `mira - Gatsby Blog & Portfolio`,
    siteUrl: `https://mira-life-journey_blog.me`,
    siteDescription: `My blog and portfolio, (IT news, TIL..) many category, It can download my CV, Can using transfer language switch.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@hanliang38`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
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
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
