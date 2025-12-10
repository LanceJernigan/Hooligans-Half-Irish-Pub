import styles from "./contactForm.module.css";

const ContactForm = () => (
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
				<form className={styles.form}>
					<div className={styles.formRow}>
						<label className={styles.formLabel}>
							Name:
							<input
								type="text"
								className={styles.formInput}
							/>
						</label>
						<label className={styles.formLabel}>
							Email:
							<input
								type="text"
								className={styles.formInput}
							/>
						</label>
					</div>
					<label className={styles.formLabel}>
						Message:
						<textarea
							className={`${styles.formInput} ${styles.formTextarea}`}
						/>
					</label>
					<button
						type="submit"
						className={styles.submit}
					>
						Submit
					</button>
				</form>
				<div className={styles.other}>
					<h2 className={styles.otherTitle}>Other ways to Connect</h2>
					<ul className={styles.list}>
						<li className={styles.item}>
							<a
								href=""
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
								href=""
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

export default ContactForm;
