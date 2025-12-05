import React from "react";
import styles from "./button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
};

const Button = ({ children, className = "", ...props }: Props) => {
	return (
		<button
			className={`${styles.button} ${className}`}
			{...props}
		>
			<span className={styles.label}>{children}</span>
		</button>
	);
};

export default Button;
