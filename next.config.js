/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

const withTM = require("next-transpile-modules")([
	"@pusher/push-notifications-web",
], {
  reactStrictMode: true,
}); // pass the modules you would like to see transpiled

module.exports = withTM();

// module.exports = nextConfig
