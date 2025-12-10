export interface Location {
	address: string;
	counts: {
		bottle_can: number;
		cocktails: number;
		generic_items: number;
		ondeck: number;
		spirits: number;
		tap_cask: number;
		wines: number;
	};
	facebook_id: string;
	foursquare_id: string;
	geo: string;
	key: string;
	location_type: string;
	logo: {
		logo: string;
		logo_small: string;
	};
	name: string;
	update: string;
	update_slang: {
		digit: number;
		text: string;
	};
	update_timestamp: number;
	update_timestamp_iso8601: string;
}

export interface Beer {
	beer: {
		abv: string;
		beer_name: string;
		ibu: string;
		key: string;
		logo_url: string;
		name: string;
		pintley_id: string;
		public_url: string;
		ratebeer_id: null | number;
		ratebeer_overall_pctl: null | number;
		ratebeer_style_pctl: null | number;
		srm: string;
		style: string;
		style_category: string;
		style_key: string;
	};
	brewery: {
		city: string;
		common_name: string;
		country: string;
		distance: number;
		key: string;
		logo_url: string;
		market: string;
		market_key: string;
		name: string;
		origin: string;
		public_url: string;
		state: string;
	};
	category: {
		id: null | number;
		name: string;
		order: string;
	};
	date_added: string;
	date_added_iso8601: string;
	date_added_timestamp: number;
	descriptions: {
		food_pairings: string;
		short_description: string;
		short_description_override: null | string;
		short_description_with_backup: string;
		style_description: string;
	};
	dm_tags: [];
	featured: boolean;
	is_local: boolean;
	key: string;
	list: {
		key: string;
		name: string;
	};
	location: Location;
	reported_out: number;
	serving_info: {
		calories: string;
		display_pricing: boolean;
		growler_fills: boolean;
		multiple_pour_sizes_list: [];
		price: string;
		size: string;
		sized_calories: [];
		sized_pricing: [];
		tap_number: string;
		type: string;
	};
	tags: [];
}

export interface Cocktail {
	active: boolean;
	category_id: number;
	category_name: string;
	category_sort: number;
	date_added: string;
	descriptions: {
		creator: string;
		story: string;
		taste: string;
		taste_alcohol: number;
		taste_sweet_bitter: number;
	};
	featured: boolean;
	glass: {
		id: null | number;
		name: string;
		url: string;
	};
	ingredients: {
		list: string[];
		string: string;
	};
	key: string;
	location: Location;
	name: string;
	photos: {
		all: [];
		featured: [];
	};
	serving_info: {
		calories: string;
		display_pricing: boolean;
		price: null | string;
	};
}

export interface Spirit {
	abv: number;
	bev_type: string;
	beverage_key: string;
	category_id: number;
	category_name: string;
	category_sort: number;
	date_added: string;
	descriptions: {
		food_pairings: string;
		long_description: string;
		short_description: string;
	};
	featured: boolean;
	ingredients: [];
	is_local: boolean;
	key: string;
	location: Location;
	logo_url: string;
	name: string;
	owner_logo_url: string;
	producer: {
		key: string;
		name: string;
		origin: string;
		region: null | string;
		subregion: null | string;
	};
	proof: number;
	serving_info: {
		age: string;
		barrel: null;
		batch: null;
		calories: string;
		display_pricing: boolean;
		price: null;
		sized_calories: [];
		sized_pricings: [];
		tap_number: null;
		vintage: null;
	};
	type_name: string;
}

export interface DrinkMenus {
	bottles: Beer[];
	cocktails: Cocktail[];
	ondeck: Beer[];
	spirits: Spirit[];
	taps: Beer[];
	wubes: Spirit[];
}

export interface DrinksProps {
	menus: DrinkMenus;
}
