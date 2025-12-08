import About from "@/components/about";
import EatDrinkWatch from "@/components/eatDrinkWatch";
import Hero from "@/components/hero";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<section className={styles.transition}>
				<EatDrinkWatch />
			</section>
		</>
	);
}
