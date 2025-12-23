import Image from "next/image";
import styles from "./specials.module.css";
import { SpecialsProps } from "./types";
import { PortableText } from "next-sanity";

const Specials = ({
	heading,
	subheading,
	content,
	specials,
}: SpecialsProps) => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<header className={styles.header}>
					<h2 className={styles.title}>{heading}</h2>
					<h3 className={styles.subtitle}>{subheading}</h3>
				</header>
				<PortableText value={content} />
			</div>
			<ul className={styles.list}>
				{specials.map((special) => (
					<li
						className={styles.item}
						key={special._key}
					>
						<h4 className={styles.itemTitle}>{special.title}</h4>
						<PortableText value={special.content} />
					</li>
				))}
			</ul>
		</div>
		<div className={styles.background}>
			<Image
				src="/assets/images/chalkboard.jpg"
				alt="chalkboard texture"
				fill
				className="object-cover object-center z-0 mix-blend-hard-light"
				sizes="100vw"
			/>
		</div>
	</section>
);

export default Specials;
