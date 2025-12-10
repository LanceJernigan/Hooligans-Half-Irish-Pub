export interface DrinkCardProps {
	name: string;
	image: {
		src: string;
		alt: string;
	};
	description: string;
	abv?: string;
	ibu?: string;
	style?: string;
	maker?: string;
	location?: string;
}
