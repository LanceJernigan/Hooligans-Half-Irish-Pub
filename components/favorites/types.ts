import { PortableTextBlock } from "next-sanity";

export type FavoritesProps = {
	heading: string;
	subheading: string;
	content: PortableTextBlock[];
	favorites: {
		_key: string;
		title: string;
		content: PortableTextBlock[];
		image: {
			alt: string;
			asset: {
				_ref: string;
				_type: string;
			};
		};
	}[];
};
