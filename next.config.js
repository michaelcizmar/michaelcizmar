const withNextra = require('nextra')({
    theme: 'nextra-theme-blog',
    themeConfig: './theme.config.jsx'
  })
   
  const nextConfig = {
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    output: "export",
  };

  
  module.exports = {
    ...withNextra(),
    ...nextConfig,
  };