import Image from "next/image";
import styles from "./specials.module.css";

const Specials = () => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<header className={styles.header}>
					<h2 className={styles.title}>Weekly Specials</h2>
					<h3 className={styles.subtitle}>Your week just got better.</h3>
				</header>
				<p className={styles.description}>
					Whether you are here for trivia, wings, or a classic burger, our
					weekly specials keep the energy high and the plates full. Stop in and
					enjoy the deals that make Hooligans the go to spot all week long.
				</p>
			</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h4 className={styles.itemTitle}>Tuesday</h4>
					<p className={styles.itemDescription}>
						Live Trivia
						<br />
						@8PM
					</p>
				</li>
				<li className={styles.item}>
					<h4 className={styles.itemTitle}>Wednesday</h4>
					<p className={styles.itemDescription}>
						Boneless Wing Night
						<br />
						10 Wings | $7.50
						<br />
						6PM - 9PM
					</p>
				</li>
				<li className={styles.item}>
					<h4 className={styles.itemTitle}>Thursday</h4>
					<p className={styles.itemDescription}>
						Traditional Wings
						<br />
						10 Wings | $6.50
						<br />
						ALL DAY
					</p>
				</li>
				<li className={styles.item}>
					<h4 className={styles.itemTitle}>Saturday</h4>
					<p className={styles.itemDescription}>
						Holligan’s
						<br />
						Burger and Fries
						<br />
						OPEN - 4PM
					</p>
				</li>
			</ul>
		</div>
		<div className={styles.background}>
			<Image
				src="/assets/images/chalkboard.jpg"
				alt="chalkboard texture"
				fill
				className="object-cover object-center z-0 mix-blend-hard-light"
				sizes="100vw"
				quality={100}
			/>
		</div>
	</section>
);

export default Specials;
