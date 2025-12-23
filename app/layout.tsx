import { Sigmar, Hanken_Grotesk, Permanent_Marker } from "next/font/google";
import Image from "next/image";
import "material-icons/iconfont/outlined.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { client } from "@/clients/sanity";
import { SanityDocument } from "next-sanity";
import urlFor from "@/utils/urlFor";

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;
const options = { next: { revalidate: 30 } };

const sigmar = Sigmar({
	variable: "--font-sigmar",
	weight: "400",
	subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
	variable: "--font-hanken",
	subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
	variable: "--font-permanent-marker",
	weight: "400",
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { logo, siteTitle } = await client.fetch<SanityDocument>(
		SETTINGS_QUERY,
		{},
		options,
	);

	return (
		<html lang="en">
			<body
				className={`${sigmar.variable} ${hanken.variable} ${permanentMarker.variable} antialiased relative`}
			>
				<Header
					logo={
						urlFor(logo)
							?.width(200)
							?.height(200)
							?.quality(100)
							?.auto("format")
							?.url() || ""
					}
					siteTitle={siteTitle}
				/>
				<main className="-mt-[1px]">{children}</main>
				<Footer />
				<div className="fixed top-0 left-0 h-screen w-screen -z-10 mix-blend-color-burn">
					<Image
						src="/assets/images/background.jpg"
						alt="Background Image"
						fill
						priority
						className="object-cover opacity-20"
					/>
				</div>
			</body>
		</html>
	);
}
