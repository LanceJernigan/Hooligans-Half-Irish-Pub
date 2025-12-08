import Image from "next/image";
import styles from "./eatDrinkWatch.module.css";

const EatDrinkWatch = () => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h3 className={styles.title}>Eat</h3>
					<Image
						src="/assets/images/eat.jpg"
						alt="Chicken Wings"
						fill
						className="object-cover object-center"
						sizes="(min-width: 768px) 400px, 100vw"
						quality={100}
					/>
				</li>
				<li className={styles.item}>
					<h3 className={styles.title}>Drink</h3>
					<Image
						src="/assets/images/drink.jpg"
						alt="Chicken Wings"
						fill
						className="object-cover object-center"
						sizes="(min-width: 768px) 400px, 100vw"
						quality={100}
					/>
				</li>
				<li className={styles.item}>
					<h3 className={styles.title}>Watch</h3>
					<Image
						src="/assets/images/watch.jpg"
						alt="Chicken Wings"
						fill
						className="object-cover object-center"
						sizes="(min-width: 768px) 400px, 100vw"
						quality={100}
					/>
				</li>
			</ul>
		</div>
	</section>
);

export default EatDrinkWatch;
