require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Shape Portfolio"
  },
  plugins: [
    {
      resolve: "@takeshape/gatsby-source-takeshape",
      options: {}
    }
  ]
};
