import React, { useRef } from 'react';
import Image from 'next/image';
import Input from '@components/Input';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import qr from '@assets/images/ws_qr_code.png';
import { useForm } from '@formspree/react';
import styles from '@styles/sass/containers/Contact.module.sass';


const Contact = () => {
	const [formState, setFormState] = useForm("mayvzwjz");
	
	const form = useRef(null);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('name'),
			email: formData.get('email'),
			telf: formData.get('phone'),
			website: formData.get('website'),
			message: formData.get('message')
		}
		setFormState(data);
	}


	if (formState.succeeded) {
			return window.location = "/";
	}


  return (
		<section className={`${styles.container} ${styles.contactsBox}`}>
			<h2 className={styles.titles}>Contactame.</h2>
			<div className={styles.contact}>
				<div className={styles.form}>
					<form ref={form} action="https://formspree.io/f/mayvzwjz" onSubmit={handleSubmit} method="POST" encType="text/plain" >
						<Input
							tag="input"
							label="*Name"
							forLabel="name"
							name="name"
							type="text"
							id="name"
							placeholder="Ej. Daniel"
							autocomplete="autocomplete"
							required="required"
						/>

						<Input
							tag="input"
							label="E-mail"
							forLabel="email"
							name="email"
							type="email"
							id="email"
							placeholder="example@email.com"
							required="required"
						/>

						<Input
							tag="input"
							label="Telf."
							forLabel="phone"
							name="phone"
							type="tel"
							id="phone"
							placeholder="+00 33 3322 3322"
						/>

						<Input
							tag="input"
							label="Website"
							forLabel="website"
							name="website"
							type="url"
							id="website"
							placeholder="https://www.tuweb.com"
						/>

						<Input
							tag="textarea"
							label="Puedo Ayudarte?"
							forLabel="message"
							name="message"
							id="message"
							cols="20"
							rows="10"
						/>

						<button type="submit" disabled={formState.submitting} >
							<ChevronDoubleRightIcon className={styles.submitIcon} />
						</button>
					</form>
				</div>

				<div className={styles.qr}>
					<Image src={qr} alt="qr" width="260" height="260" layout="intrinsic"/>
				</div>
			</div>
		</section>
  );
}

export default Contact;