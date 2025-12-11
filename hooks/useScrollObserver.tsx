"use client";

import { useEffect, useRef, useState } from "react";

export default function useScrollObserver() {
	const sentinelRef = useRef<HTMLDivElement>(null);

	const [hasScrolled, setHasScrolled] = useState(false);
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

	const prevY = useRef(0);

	useEffect(() => {
		if (!sentinelRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];

				// Detect if user has scrolled at all
				setHasScrolled(!entry.isIntersecting);

				// Infer direction based on sentinel movement
				const currentY = entry.boundingClientRect.y;
				setScrollDirection(currentY > prevY.current ? "up" : "down");
				prevY.current = currentY;
			},
			{
				root: null,
				threshold: 0,
			},
		);

		observer.observe(sentinelRef.current);

		return () => observer.disconnect();
	}, []);

	return { sentinelRef, hasScrolled, scrollDirection };
}
