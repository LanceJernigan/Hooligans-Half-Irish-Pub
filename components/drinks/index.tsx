"use client";

import styles from "./drinks.module.css";
import { useState } from "react";
import { DrinksProps } from "./types";
import DrinkCard from "../shared/drinkCard";
import Chevron from "../shared/icons/chevron";

const labels = {
	taps: "Tap",
	bottles: "Bottle/Can",
	spirits: "Spirits",
	cocktails: "Cocktails",
	ondeck: "On Deck",
};

const Drinks = ({
	menus: { taps, bottles, spirits, cocktails, ondeck },
}: DrinksProps) => {
	const [currentMenu, setCurrentMenu] = useState<
		"taps" | "bottles" | "spirits" | "cocktails" | "ondeck"
	>("taps");
	const [showMenu, setShowMenu] = useState(false);

	const handleMenuClick =
		(menu: "taps" | "bottles" | "spirits" | "cocktails" | "ondeck") => () => {
			setCurrentMenu(menu);
			setShowMenu(false);
		};

	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h1 className={styles.title}>Drinks for Every Game, Every Night</h1>
					<p className={styles.description}>
						From ice-cold pints to craft cocktails, find your new favorite pour
						while you cheer on your team.
					</p>
				</div>
				<div className={styles.drinks}>
					<div className={styles.navigation}>
						<button
							className={styles.currentMenu}
							onClick={() => setShowMenu(!showMenu)}
							data-open={showMenu}
						>
							{labels[currentMenu]}
							<Chevron />
						</button>
						<ul
							className={styles.menus}
							data-open={showMenu}
						>
							<li className={styles.menu}>
								<button
									className={styles.menuButton}
									data-active={currentMenu === "taps"}
									onClick={handleMenuClick("taps")}
								>
									Tap
								</button>
							</li>
							<li className={styles.menu}>
								<button
									className={styles.menuButton}
									data-active={currentMenu === "bottles"}
									onClick={handleMenuClick("bottles")}
								>
									Bottle/Can
								</button>
							</li>
							<li className={styles.menu}>
								<button
									className={styles.menuButton}
									data-active={currentMenu === "spirits"}
									onClick={handleMenuClick("spirits")}
								>
									Spirits
								</button>
							</li>
							<li className={styles.menu}>
								<button
									className={styles.menuButton}
									data-active={currentMenu === "cocktails"}
									onClick={handleMenuClick("cocktails")}
								>
									Cocktails
								</button>
							</li>
							<li className={styles.menu}>
								<button
									className={styles.menuButton}
									data-active={currentMenu === "ondeck"}
									onClick={handleMenuClick("ondeck")}
								>
									On Deck
								</button>
							</li>
						</ul>
					</div>
					<ul className={styles.list}>
						<li
							className={styles.item}
							data-selected={currentMenu === "taps"}
						>
							<ul className={styles.items}>
								{taps
									.sort((a, b) =>
										a.beer.beer_name.localeCompare(b.beer.beer_name),
									)
									.map((tap) => (
										<DrinkCard
											key={tap.key}
											name={tap.beer.beer_name}
											image={{
												src: tap.beer.logo_url || tap?.brewery.logo_url,
												alt: tap.beer.beer_name,
											}}
											description={tap.descriptions.short_description}
											abv={tap.beer.abv}
											ibu={tap.beer.ibu}
											style={tap.beer.style}
											maker={tap.brewery.name}
											location={tap.brewery.origin}
										/>
									))}
							</ul>
						</li>
						<li
							className={styles.item}
							data-selected={currentMenu === "bottles"}
						>
							<ul className={styles.items}>
								{bottles
									.sort((a, b) =>
										a.beer.beer_name.localeCompare(b.beer.beer_name),
									)
									.map((bottle) => (
										<DrinkCard
											key={bottle.key}
											name={bottle.beer.beer_name}
											image={{
												src: bottle.beer.logo_url || bottle?.brewery.logo_url,
												alt: bottle.beer.beer_name,
											}}
											description={bottle.descriptions.short_description}
											abv={bottle.beer.abv}
											ibu={bottle.beer.ibu}
											style={bottle.beer.style}
											maker={bottle.brewery.name}
											location={bottle.brewery.origin}
										/>
									))}
							</ul>
						</li>
						<li
							className={styles.item}
							data-selected={currentMenu === "spirits"}
						>
							<ul className={styles.items}>
								{spirits
									.sort((a, b) => a.name.localeCompare(b.name))
									.map((spirit) => (
										<DrinkCard
											key={spirit.key}
											name={spirit.name}
											image={{
												src: spirit.logo_url || spirit.owner_logo_url,
												alt: spirit.name,
											}}
											description={spirit.descriptions.short_description}
											abv={`${spirit.abv}`}
											style={spirit.category_name}
											maker={spirit.producer.name}
											location={spirit.producer.origin}
										/>
									))}
							</ul>
						</li>
						<li
							className={styles.item}
							data-selected={currentMenu === "cocktails"}
						>
							<ul className={styles.items}>
								{cocktails
									.sort((a, b) => a.name.localeCompare(b.name))
									.map((cocktail) => (
										<DrinkCard
											key={cocktail.key}
											name={cocktail.name}
											image={{
												src: "",
												alt: cocktail.name,
											}}
											description={cocktail.ingredients.string}
										/>
									))}
							</ul>
						</li>
						<li
							className={styles.item}
							data-selected={currentMenu === "ondeck"}
						>
							<ul className={styles.items}>
								{ondeck
									.sort((a, b) =>
										a.beer.beer_name.localeCompare(b.beer.beer_name),
									)
									.map((tap) => (
										<DrinkCard
											key={tap.key}
											name={tap.beer.beer_name}
											image={{
												src: tap.beer.logo_url || tap?.brewery.logo_url,
												alt: tap.beer.beer_name,
											}}
											description={tap.descriptions.short_description}
											abv={tap.beer.abv}
											ibu={tap.beer.ibu}
											style={tap.beer.style}
											maker={tap.brewery.name}
											location={tap.brewery.origin}
										/>
									))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Drinks;
