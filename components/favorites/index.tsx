import Image from "next/image";
import Button from "@/components/shared/button/asLink";
import styles from "./favorites.module.css";
import { FavoritesProps } from "./types";
import { PortableText } from "next-sanity";
import urlFor from "@/utils/urlFor";

const Favorites = ({
	heading,
	subheading,
	content,
	favorites,
}: FavoritesProps) => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<header className={styles.header}>
					<h2 className={styles.title}>{heading}</h2>
					<h3 className={styles.subtitle}>{subheading}</h3>
				</header>
				<PortableText value={content} />
				<Button
					href="https://order.toasttab.com/online/hooliganstn"
					target="_blank"
					className="w-max mx-auto"
				>
					Full Menu
				</Button>
			</div>
			<ul className={styles.list}>
				{favorites.map((favorite) => {
					const imageURl =
						urlFor(favorite.image)?.width(500)?.height(500).url() || "";

					return (
						<li
							className={styles.item}
							key={favorite._key}
						>
							<div className={styles.itemImage}>
								<Image
									src={imageURl}
									alt={favorite.image.alt}
									fill
									className="object-cover object-center"
									sizes="(min-width: 768px) 400px, 100vw"
								/>
							</div>
							<div className={styles.itemContent}>
								<h4 className={styles.itemTitle}>{favorite.title}</h4>
								<PortableText value={favorite.content} />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	</section>
);

export default Favorites;
