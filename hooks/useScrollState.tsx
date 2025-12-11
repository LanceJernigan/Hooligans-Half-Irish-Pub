"use client";

import { useEffect, useRef } from "react";

function useScrollState(
	setIsStuck: (v: boolean) => void,
	setScrollDirection: (v: "up" | "down") => void,
	sentinelRef: React.RefObject<HTMLDivElement | null>,
	// optional: pass in the sticky offset if your sticky uses `top: 64` etc.
	stickyOffset: number = 0,
) {
	const previousScrollRef = useRef(0);

	useEffect(() => {
		const sentinel = sentinelRef.current;
		let observer: IntersectionObserver | null = null;

		if (sentinel) {
			observer = new IntersectionObserver(
				([entry]) => {
					// Sentinel can be off-screen in two ways:
					// - above viewport (top < 0)
					// - below viewport (top > viewport height)
					//
					// We only want "stuck" when it's ABOVE the sticky line.
					const isAboveStickyLine = entry.boundingClientRect.top < stickyOffset;
					const isStuckNow = !entry.isIntersecting && isAboveStickyLine;

					setIsStuck(isStuckNow);
				},
				{
					root: null,
					threshold: 0,
				},
			);

			observer.observe(sentinel);
		}

		const handleScroll = () => {
			const currentY = window.scrollY;
			const prevY = previousScrollRef.current;

			setScrollDirection(currentY < prevY ? "up" : "down");
			previousScrollRef.current = currentY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (observer) observer.disconnect();
		};
	}, [setIsStuck, setScrollDirection, sentinelRef, stickyOffset]);
}

export default useScrollState;
