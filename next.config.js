const path = require("path")
const createConfig = require("@titicaca/eslint-config-triple/create-config")
const {extends: extendConfigs, overrides} = createConfig({
  type: "frontend",
  project: path.resolve(__dirname, "./tsconfig.json"),
})

module.exports = {
  extends: [...extendConfigs, 'next/core/web-vitals']
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  styledComponents: true,
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = {
  extends: [extendConfigs, 'next/core-web-vitals']
}