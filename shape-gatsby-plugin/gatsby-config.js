require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Shape Portfolio"
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        url: `https://api.takeshape.io/project/${
          process.env.TAKESHAPE_PROJECT
        }/graphql`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`
        },
        fetchOptions: {}
      }
    },
    {
      resolve: "@takeshape/gatsby-source-takeshape",
      options: {}
    }
  ]
};
