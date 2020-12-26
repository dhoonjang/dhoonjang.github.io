module.exports = {
  siteMetadata: {
    title: "dhoonjang.github.io",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
