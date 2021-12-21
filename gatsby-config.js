module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "a new title???",
  },
  plugins: [{
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`
    }
  }],
};
