"use client";

import Image from "next/image";
import styles from "./header.module.css";
import Menu from "@/components/shared/icons/menu";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [previousScroll, setPreviousScroll] = useState(0);
	const [scrollDirection, setScrollDirection] = useState("up");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		window.document.body.style.overflowY = menuOpen ? "hidden" : "auto";
	}, [menuOpen]);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;

			setHasScrolled(currentY > 0);
			setPreviousScroll(currentY);
			setScrollDirection(currentY < previousScroll ? "up" : "down");
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [previousScroll]);

	return (
		<>
			<header
				className={styles.header}
				data-scrolled={hasScrolled && !menuOpen}
				data-visible={scrollDirection === "up" || !hasScrolled}
			>
				<div className={styles.wrapper}>
					<Link href="/">
						<Image
							src="/assets/images/logo.png"
							height={50}
							width={50}
							alt="Hooligan's Logo"
						/>
					</Link>
					<button
						className={styles.menuToggle}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<Menu />
					</button>
				</div>
			</header>
			<div
				className={styles.menu}
				data-open={menuOpen}
				onClick={() => setMenuOpen(!menuOpen)}
				aria-hidden={!menuOpen}
			>
				<div className={styles.menuWrapper}>
					<nav className={styles.nav}>
						<ul className={styles.list}>
							<li className={styles.item}>
								<Link
									href="/"
									tabIndex={menuOpen ? 0 : -1}
								>
									Home
								</Link>
							</li>
							<li className={styles.item}>
								<Link
									href="https://order.toasttab.com/online/hooliganstn"
									target="_blank"
									tabIndex={menuOpen ? 0 : -1}
								>
									Food
								</Link>
							</li>
							<li className={styles.item}>
								<Link
									href="/drinks"
									tabIndex={menuOpen ? 0 : -1}
								>
									Drinks
								</Link>
							</li>
							<li className={styles.item}>
								<Link
									href="https://order.toasttab.com/egiftcards/hooliganstn"
									target="_blank"
									tabIndex={menuOpen ? 0 : -1}
								>
									Gift Cards
								</Link>
							</li>
							<li className={styles.item}>
								<Link
									href="/contact"
									tabIndex={menuOpen ? 0 : -1}
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Header;
