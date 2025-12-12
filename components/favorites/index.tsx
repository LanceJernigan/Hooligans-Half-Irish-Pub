import Image from "next/image";
import Button from "@/components/shared/button/asLink";
import styles from "./favorites.module.css";

const Favorites = () => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<header className={styles.header}>
					<h2 className={styles.title}>Fan Favorites</h2>
					<h3 className={styles.subtitle}>
						What regulars come back for again and again
					</h3>
				</header>
				<p className={styles.description}>
					From big, juicy burgers to crispy wings, these are the Hooligans
					staples guests order on repeat
				</p>
				<Button
					href="https://order.toasttab.com/online/hooliganstn"
					target="_blank"
					className="w-max mx-auto"
				>
					Full Menu
				</Button>
			</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<div className={styles.itemImage}>
						<Image
							src="/assets/images/chicken-wings.jpg"
							alt="Chicken Wings"
							fill
							className="object-cover object-center"
							sizes="(min-width: 768px) 400px, 100vw"
						/>
					</div>
					<div className={styles.itemContent}>
						<h4 className={styles.itemTitle}>Chicken Wings</h4>
						<p className={styles.itemDescription}>
							10 jumbo wings cooked to order. Your choice of flavor. Served with
							ranch or Gorgonzola blue cheese dressing.
						</p>
					</div>
				</li>
				<li className={styles.item}>
					<div className={styles.itemImage}>
						<Image
							src="/assets/images/jalapeno-burger.jpg"
							alt="Chicken Wings"
							fill
							className="object-cover object-center"
							sizes="(min-width: 768px) 400px, 100vw"
						/>
					</div>
					<div className={styles.itemContent}>
						<h4 className={styles.itemTitle}>Signature Burgers</h4>
						<p className={styles.itemDescription}>
							Go all in with our nine ounce signature patties. Juicy, flavorful,
							and crafted to hit the spot whether you are here to eat, drink, or
							watch the game.
						</p>
					</div>
				</li>
				<li className={styles.item}>
					<div className={styles.itemImage}>
						<Image
							src="/assets/images/reuben.jpg"
							alt="Chicken Wings"
							fill
							className="object-cover object-center"
							sizes="(min-width: 768px) 400px, 100vw"
						/>
					</div>
					<div className={styles.itemContent}>
						<h4 className={styles.itemTitle}>The Rueben</h4>
						<p className={styles.itemDescription}>
							Tender corned beef layered with Swiss, sauerkraut, and Thousand
							Island on grilled rye. Rich, tangy, and seriously satisfying.
						</p>
					</div>
				</li>
				<li className={styles.item}>
					<div className={styles.itemImage}>
						<Image
							src="/assets/images/bacon-cheese-fries.jpg"
							alt="Chicken Wings"
							fill
							className="object-cover object-center"
							sizes="(min-width: 768px) 400px, 100vw"
						/>
					</div>
					<div className={styles.itemContent}>
						<h4 className={styles.itemTitle}>Bacon Cheese Fries</h4>
						<p className={styles.itemDescription}>
							Crispy golden fries smothered in melted cheese and loaded with
							smoky bacon. The perfect game day appetizer.
						</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
);

export default Favorites;
