import ContactForm from "@/components/contactForm";
import { type SanityDocument } from "next-sanity";
import { client } from "@/clients/sanity";
import { Metadata } from "next";
import urlFor from "@/utils/urlFor";

const CONTENT_QUERY = `*[_type == "contact"][0]`;

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

const Contact = async () => {
	const { title, content, other, form } = await client.fetch<SanityDocument>(
		CONTENT_QUERY,
		{},
		options,
	);

	return (
		<ContactForm
			title={title}
			content={content}
			other={other}
			form={form}
		/>
	);
};

export default Contact;
