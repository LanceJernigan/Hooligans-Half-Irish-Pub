import type { Metadata } from "next";
import { Sigmar, Hanken_Grotesk, Permanent_Marker } from "next/font/google";
import Image from "next/image";
import "material-icons/iconfont/outlined.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

export const metadata: Metadata = {
	title: "Hooligan's Half/Irish Pub",
	description:
		"Your neighborhood pub for great food, cold drinks, and every big game.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sigmar.variable} ${hanken.variable} ${permanentMarker.variable} antialiased relative`}
			>
				<Header />
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
