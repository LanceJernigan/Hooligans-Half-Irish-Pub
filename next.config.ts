import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				pathname: `/images/${process.env.SANITY_PROJECT_ID}/**`,
			},
		],
	},
};

export default nextConfig;
