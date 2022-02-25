/** @type {import('next').NextConfig} */

const { withPlugins } = require("next-compose-plugins")
const witgPlugins = require("next-compose-plugins")
const optimizationImages = require("next-optimized-images")

// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = withPlugins([optimizationImages], { target: "serverless" })
