import Image from "next/image";
import styles from "./hero.module.css";
import Button from "@/components/shared/button";

const Hero = () => {
	return (
		<section className={`${styles.component}`}>
			<div className={`${styles.wrapper}`}>
				<Image
					src="/assets/images/logo.png"
					alt="Hooligan's Logo"
					width={125}
					height={125}
				/>
				<h1>
					Half Irish.
					<br />
					Fully Unforgettable.
				</h1>
				<p>
					Your neighborhood pub for great food, cold drinks, and every big game.
				</p>
				<div className={styles.actions}>
					<Button>ORDER</Button>
					<Button>DRINK MENU</Button>
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
