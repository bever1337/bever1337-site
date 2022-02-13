require("dotenv")

module.exports = {
  siteMetadata: {
    hash: process.env.GIT_HASH,
    title: "I Love the Internet",
    // description: "Foo Bar Baz",
    author: "Bever1337 <bever1337@posteo.net>",
    // siteUrl: "https://example.com/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: { manualInit: true, modulePath: `${__dirname}/modules/cms` },
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
