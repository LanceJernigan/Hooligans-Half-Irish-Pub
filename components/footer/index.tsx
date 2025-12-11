import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.wrapper}>
			<Link href="/">
				<Image
					src="/assets/images/logo.png"
					height={50}
					width={50}
					alt="Hooligan's Logo"
					className={styles.logo}
				/>
			</Link>

			<p className={styles.copyright}>© 2025 Hooligans Half/Irish Pub</p>
		</div>
	</footer>
);

export default Footer;
