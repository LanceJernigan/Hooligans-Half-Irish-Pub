import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<h2>
					A Local Favorite
					<br />
					Since 2012
				</h2>
				<p>
					Hooligans Half Irish Pub has been Cookeville’s gathering place for
					good food and good company for more than a decade. The bar is locally
					owned and run by people who love their community. Whether you are here
					for a pint, a game, or a meal with friends, you will find friendly
					faces and a laid back atmosphere every time you visit.
				</p>
			</div>
			<div className={styles.background}>
				<Image
					src="/assets/images/bottles.jpg"
					alt="chalkboard texture"
					fill
					className="object-cover object-center z-0"
					sizes="100vw"
				/>
			</div>
		</section>
	);
};

export default About;
