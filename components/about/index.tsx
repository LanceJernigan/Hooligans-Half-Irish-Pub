import Image from "next/image";
import styles from "./about.module.css";
import { AboutProps } from "./types";
import { PortableText } from "next-sanity";

const About = ({ heading, content }: AboutProps) => {
	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<h2>{heading}</h2>
				<PortableText value={content} />
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
