"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validations = {
	name: (value: string) => !!value.length,
	email: (value: string) => emailRegex.test(value),
	message: (value: string) => !!value.length,
};

const testValues = ({
	name,
	email,
	message,
}: {
	name: string;
	email: string;
	message: string;
}) => ({
	name: validations.name(name) ? "" : "You must enter a name.",
	email: validations.email(email) ? "" : "You must enter a valid email.",
	message: validations.message(message)
		? ""
		: "You must enter a valid message.",
});

const ContactForm = () => {
	const [status, setStatus] = useState("new");
	const [fields, setFields] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({
		name: "You must enter a name.",
		email: "You must enter a valid email.",
		message: "You must enter a valid message.",
	});

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		setStatus("submitting");

		const res = await fetch("/api/sendContact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(fields),
		});

		if (res.ok) {
			setStatus("submitted");
		} else {
			setStatus("error");
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setErrors(
			testValues({
				...fields,
				[e.target.name]: e.target.value,
			}),
		);
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h1 className={styles.title}>
						Your Neighborhood Pub Is Just a Message Away
					</h1>
					<p className={styles.description}>
						Reach out to us anytime. We’ll get back to you soon.
					</p>
				</div>
				<div className={styles.contact}>
					{(status === "new" || status === "submitting") && (
						<form
							className={styles.form}
							onSubmit={handleSubmit}
							name="contact"
							data-submitting={status === "submitting"}
						>
							<div className={styles.formRow}>
								<label
									className={styles.formLabel}
									htmlFor="name"
								>
									Name:
									<input
										type="text"
										id="name"
										name="name"
										onChange={handleChange}
										value={fields.name}
										className={styles.formInput}
									/>
								</label>
								<label
									className={styles.formLabel}
									htmlFor="name"
								>
									Email:
									<input
										type="text"
										id="email"
										name="email"
										onChange={handleChange}
										value={fields.email}
										className={styles.formInput}
									/>
								</label>
							</div>
							<label
								className={styles.formLabel}
								htmlFor="message"
							>
								Message:
								<textarea
									className={`${styles.formInput} ${styles.formTextarea}`}
									id="message"
									name="message"
									onChange={handleChange}
									value={fields.message}
								/>
							</label>
							<button
								type="submit"
								className={styles.submit}
								disabled={
									status === "submitting" ||
									!!errors.name.length ||
									!!errors.email.length ||
									!!errors.message.length
								}
							>
								Send
							</button>
						</form>
					)}
					<div className={styles.other}>
						<h2 className={styles.otherTitle}>Other ways to Connect</h2>
						<ul className={styles.list}>
							<li className={styles.item}>
								<a
									href="https://maps.app.goo.gl/Ymmjk1A6JnxJ6GYx5"
									target="_blank"
									className={styles.link}
								>
									<span className={`${styles.icon} material-icons-outlined`}>
										explore
									</span>
									<p className={styles.label}>Directions</p>
								</a>
							</li>
							<li className={styles.item}>
								<a
									href=""
									className={styles.link}
								>
									<span className={`${styles.icon} material-icons-outlined`}>
										send
									</span>
									<p className={styles.label}>Email</p>
								</a>
							</li>
							<li className={styles.item}>
								<a
									href="tel:+19315262927"
									className={styles.link}
								>
									<span className={`${styles.icon} material-icons-outlined`}>
										phone_enabled
									</span>
									<p className={styles.label}>Call</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
