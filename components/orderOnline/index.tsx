import Image from "next/image";
import Button from "@/components/shared/button/asLink";
import styles from "./orderOnline.module.css";
import { OrderOnlineProps } from "./types";
import { PortableText } from "next-sanity";
import urlFor from "@/utils/urlFor";

const OrderOnline = ({ heading, content, image }: OrderOnlineProps) => {
	const imageURL =
		urlFor(image)?.width(500).height(500)?.auto("format").url() || "";

	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h2>{heading}</h2>
					<PortableText value={content} />
					<Button
						href="https://order.toasttab.com/online/hooliganstn"
						target="_blank"
						className="w-max"
					>
						Order
					</Button>
				</div>
				<div className={styles.image}>
					<Image
						src={imageURL}
						alt={image.alt}
						width={500}
						height={350}
					/>
				</div>
			</div>
		</section>
	);
};

export default OrderOnline;
