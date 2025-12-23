import { PortableTextBlock } from "next-sanity";

export type SpecialsProps = {
	heading: string;
	subheading: string;
	content: PortableTextBlock[];
	specials: {
		_key: string;
		title: string;
		content: PortableTextBlock[];
	}[];
};
