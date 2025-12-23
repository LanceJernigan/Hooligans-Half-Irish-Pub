import Image from "next/image";
import styles from "./hero.module.css";
import Button from "@/components/shared/button/asLink";
import { HeroProps } from "./types";
import { PortableText, SanityDocument } from "next-sanity";
import { client } from "@/clients/sanity";
import urlFor from "@/utils/urlFor";

const CONTENT_QUERY = `*[_type == "siteSettings"][0]`;

const options = { next: { revalidate: 30 } };

const Hero = async ({ heading, subheading }: HeroProps) => {
	const { logo, siteTitle } = await client.fetch<SanityDocument>(
		CONTENT_QUERY,
		{},
		options,
	);

	return (
		<section className={`${styles.component}`}>
			<div className={`${styles.wrapper}`}>
				<Image
					src={
						urlFor(logo)
							?.width(250)
							?.height(250)
							?.quality(100)
							?.auto("format")
							?.url() || ""
					}
					alt={siteTitle}
					width={125}
					height={125}
				/>
				<h1>{heading}</h1>
				<PortableText value={subheading} />
				<div className={styles.actions}>
					<Button
						href="https://order.toasttab.com/online/hooliganstn"
						target="_blank"
					>
						ORDER
					</Button>
					<Button href="/drinks">DRINK MENU</Button>
				</div>
			</div>
			<Image
				src="/assets/images/chalkboard.jpg"
				alt="chalkboard texture"
				fill
				className="object-cover object-center z-0 mix-blend-hard-light"
				sizes="100vw"
			/>
		</section>
	);
};

export default Hero;
