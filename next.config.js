/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	images: {
		domains: [
			"localhost",
			"strapi-portfolio-admin-jared.herokuapp.com",
			"jaredriver.tech",
			"www.jaredriver.tech",
			"https://www.jaredriver.tech",
			"jaredriver.com",
			"www.jaredriver.com",
			"http://www.jaredriver.com",
		],
		formats: ["image/avif", "image/webp"],
	},
};
