import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

const urlFor = (source: SanityImageSource) =>
	process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET
		? createImageUrlBuilder({
				projectId: process.env.SANITY_PROJECT_ID,
				dataset: process.env.SANITY_DATASET,
			}).image(source)
		: null;

export default urlFor;
