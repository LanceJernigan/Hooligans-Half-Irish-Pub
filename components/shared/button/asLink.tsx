import React, { ComponentProps } from "react";
import styles from "./button.module.css";
import Link from "next/link";

type Props = ComponentProps<typeof Link> & {
	children: React.ReactNode;
};

const ButtonAsLink = ({ children, className = "", ...props }: Props) => {
	return (
		<Link
			className={`${styles.button} ${className}`}
			{...props}
		>
			<span className={styles.label}>{children}</span>
		</Link>
	);
};

export default ButtonAsLink;
