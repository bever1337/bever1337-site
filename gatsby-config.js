require("dotenv")

module.exports = {
  siteMetadata: {
    title: "I Love the Internet",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: { modulePath: `${__dirname}/modules/cms` },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cms-data",
        path: `${__dirname}/modules/data`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:

              // the github handler whose gists are to be accessed
              username: process.env.GITHUB_USERNAME,

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              // gistDefaultCssInclude: true,

              // a flag indicating whether the github default gist css should be preloaded or not
              // use this if you want to load the default css asynchronously.
              // default: false
              // gistCssPreload: true || false,

              // a string that represents the github default gist css url.
              // defaults: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
              // gistCssUrlAddress: "<string>",
            },
          },
        ],
      },
    },
  ],
}
