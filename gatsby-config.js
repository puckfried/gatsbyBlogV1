module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "A what",
  },
  plugins: [{
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`
    }
  }],
};
