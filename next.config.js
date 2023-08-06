/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mongodburl: "mongodb://localhost:27017/my-store",
  },
};

module.exports = nextConfig;
