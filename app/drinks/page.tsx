import { headers } from "next/headers";
import { type SanityDocument } from "next-sanity";
import { client } from "@/clients/sanity";
import { Metadata } from "next";
import urlFor from "@/utils/urlFor";
import Drinks from "@/components/drinks";

const CONTENT_QUERY = `*[_type == "drinks"][0]`;

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

const Page = async () => {
	const h = await headers();
	const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
	const protocol = h.get("x-forwarded-proto") ?? "http";
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${protocol}://${host}`;
	const { title, content } = await client.fetch<SanityDocument>(
		CONTENT_QUERY,
		{},
		options,
	);

	const drinksResponse = await fetch(`${baseUrl}/api/menus`, {
		cache: "no-store",
	});

	if (!drinksResponse.ok)
		return (
			<Drinks
				menus={{
					taps: [],
					bottles: [],
					spirits: [],
					cocktails: [],
					ondeck: [],
				}}
				title={title}
				content={content}
			/>
		);
	const menus = await drinksResponse.json();

	return (
		<Drinks
			title={title}
			content={content}
			menus={menus}
		/>
	);
};

export default Page;
