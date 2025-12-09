import Image from "next/image";
import Button from "../shared/button";
import styles from "./orderOnline.module.css";

const OrderOnline = () => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h2>Order Online</h2>
				<p>
					Skip the wait and grab your favorites with fast and easy online
					ordering.
				</p>
				<Button>Order</Button>
			</div>
			<div className={styles.image}>
				<Image
					src="/assets/images/order-online.jpg"
					alt="Order Online"
					width={500}
					height={350}
				/>
			</div>
		</div>
	</section>
);

export default OrderOnline;
