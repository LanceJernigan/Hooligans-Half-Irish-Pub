import Image from "next/image";
import styles from "./drinkCard.module.css";
import { DrinkCardProps } from "./types";

const DrinkCard = ({
	name,
	image,
	description,
	abv,
	ibu,
	style,
	maker,
	location,
}: DrinkCardProps) => (
	<li className={styles.item}>
		<div className={styles.itemImage}>
			{!!image.src ? (
				<Image
					src={image.src.replace(/s=\d+/, "s=s750")}
					alt={image.alt}
					fill
					className="object-contain object-center"
					sizes="(min-width: 768px) 400px, 100vw"
				/>
			) : (
				<Image
					src="/assets/images/logo.png"
					alt={image.alt}
					fill
					className="object-cover object-center p-[25px]"
					sizes="(min-width: 768px) 400px, 100vw"
				/>
			)}
		</div>
		<div className={styles.itemContent}>
			<header className={styles.itemHeader}>
				<h4 className={styles.itemTitle}>{name}</h4>
				{!!maker && !!location && (
					<ul className={styles.itemInfo}>
						<li className={styles.itemInfoItem}>{maker}</li>
						<li className={styles.itemInfoItem}>{location}</li>
					</ul>
				)}
				<ul className={styles.itemInfo}>
					{!!style && <li className={styles.itemInfoItem}>{style}</li>}
					{!!abv && <li className={styles.itemInfoItem}>{abv} ABV</li>}
					{!!ibu && <li className={styles.itemInfoItem}>{ibu} IBU</li>}
				</ul>
			</header>
			{!!description && <p className={styles.itemDescription}>{description}</p>}
		</div>
	</li>
);

export default DrinkCard;
