import { PortableTextBlock } from "next-sanity";

export type ContactProps = {
	title: string;
	content: PortableTextBlock[];
	other: {
		title: string;
		phone: string;
		mapLink: string;
		email: string;
	};
	form: {
		successTitle: string;
		successMessage: string;
		errorTitle: string;
		errorMessage: string;
	};
};
