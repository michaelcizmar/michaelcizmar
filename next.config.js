const withNextra = require('nextra')({
    theme: 'nextra-theme-blog',
    themeConfig: './theme.config.jsx'
  })
   
  const isProduction = process.env.NODE_ENV === "production";
  const assetPrefix = isProduction ? "/michaelcizmar.com" : "";

  const nextConfig = {
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    assetPrefix,
    basePath: assetPrefix,
    output: "export",
  };
  
  module.exports = {
    ...withNextra(),
    ...nextConfig,
  };