const withNextra = require('nextra')({
    theme: 'nextra-theme-blog',
    themeConfig: './theme.config.jsx'
  })
   
  let nextConfig = {
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    output: "export",
  };

  if (process.env.GITHUB_REPOSITORY) {
    const repositoryName = process.env.GITHUB_REPOSITORY.split('/')[1]
  
    nextConfig = {
      ...nextConfig,
      assetPrefix: `/${repositoryName}/`,
      basePath: `/${repositoryName}`,
    }
  }
  
  module.exports = {
    ...withNextra(),
    ...nextConfig,
  };