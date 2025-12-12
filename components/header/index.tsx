"use client";

import Image from "next/image";
import styles from "./header.module.css";
import Menu from "@/components/shared/icons/menu";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useScrollState from "@/hooks/useScrollState";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isStuck, setIsStuck] = useState(false);
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
	const sentinelRef = useRef<HTMLDivElement>(null);

	useScrollState(setIsStuck, setScrollDirection, sentinelRef);

	useEffect(() => {
		window.document.body.style.overflowY = menuOpen ? "hidden" : "auto";
		window.document.body.style.borderRight = menuOpen
			? "solid 15px black"
			: "none";
	}, [menuOpen]);

	return (
		<>
			<div
				ref={sentinelRef}
				style={{ height: 1 }}
			/>
			<header
				className={styles.header}
				data-stuck={isStuck && !menuOpen}
				data-visible={scrollDirection === "up" || !isStuck}
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
