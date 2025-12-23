import Link from "next/link";
import { client } from "@/clients/sanity";
import { SanityDocument } from "next-sanity";
import urlFor from "@/utils/urlFor";
import styles from "./footer.module.css";
import Image from "next/image";

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;
const options = { next: { revalidate: 30 } };

const Footer = async () => {
	const { logo, siteTitle } = await client.fetch<SanityDocument>(
		SETTINGS_QUERY,
		{},
		options,
	);
	const date = new Date();

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<Link href="/">
					<Image
						src={
							urlFor(logo)
								?.width(200)
								?.height(200)
								?.quality(100)
								?.auto("format")
								?.url() || ""
						}
						height={50}
						width={50}
						alt={siteTitle}
						className={styles.logo}
					/>
				</Link>

				<p className={styles.copyright}>
					© {date.getFullYear()} {siteTitle}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
