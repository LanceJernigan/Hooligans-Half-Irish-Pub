import { PortableTextBlock } from "next-sanity";

export type OrderOnlineProps = {
	heading: string;
	content: PortableTextBlock[];
	image: {
		alt: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
};
