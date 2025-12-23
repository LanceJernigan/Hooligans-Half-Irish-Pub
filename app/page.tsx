import About from "@/components/about";
import EatDrinkWatch from "@/components/eatDrinkWatch";
import Hero from "@/components/hero";
import styles from "./page.module.css";
import OrderOnline from "@/components/orderOnline";
import Specials from "@/components/specials";
import Favorites from "@/components/favorites";
import { type SanityDocument } from "next-sanity";
import { client } from "@/clients/sanity";
import { Metadata } from "next";
import urlFor from "@/utils/urlFor";

const CONTENT_QUERY = `*[_type == "home"][0]`;

const options = { next: { revalidate: 30 } };

export async function generateMetadata(): Promise<Metadata> {
	const { metadata } = await client.fetch<SanityDocument>(
		CONTENT_QUERY,
		{},
		options,
	);

	return {
		title: metadata.title,
		description: metadata.description,
		openGraph: {
			title: metadata.title,
			description: metadata.description,
			url: "https://www.thehalfirishpub.com",
			images: [
				{
					url:
						urlFor(metadata.image)
							?.width(1200)
							?.height(630)
							?.auto("format")
							?.url() || "",
					width: 1200,
					height: 630,
					alt: metadata.image.alt,
				},
			],
		},
	};
}

export default async function Home() {
	const { hero, about, onlineOrdering, specials, favorites } =
		await client.fetch<SanityDocument>(CONTENT_QUERY, {}, options);

	return (
		<>
			<Hero
				heading={hero.heading}
				subheading={hero.subheading}
			/>
			<About
				heading={about.heading}
				content={about.content}
			/>
			<section className={styles.transition}>
				<EatDrinkWatch />
			</section>
			<OrderOnline
				heading={onlineOrdering.heading}
				content={onlineOrdering.content}
				image={onlineOrdering.image}
			/>
			<Specials
				heading={specials.heading}
				subheading={specials.subheading}
				content={specials.content}
				specials={specials.specialsList}
			/>
			<Favorites
				heading={favorites.heading}
				subheading={favorites.subheading}
				content={favorites.content}
				favorites={favorites.favoritesList}
			/>
		</>
	);
}
