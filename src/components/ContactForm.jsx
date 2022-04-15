import React, { useRef } from 'react';
import Input from '@templates/Input.jsx';
import qr from '@images/ws_qr_code.png';

const ContactForm = () => {

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

		console.log(data);
	}


  return (
		<div className="form container">
			<form ref={form} action="" method="" encType="multipart/form-data" id="proto_form" className="form-page">
				<h2 className="titles">Contactame.</h2>
				<Input
					label="*Name"
					forLabel="name"
					name="name"
					type="text"
					id="name"
					autofocus="autofocus"
					placeholder="Ej. Daniel"
					autocomplete="autocomplete"
					required="required"
				/>

				<Input
					label="E-mail"
					forLabel="email"
					name="email"
					type="email"
					id="email"
					autofocus="autofocus"
					placeholder="example@email.com"
					required="required"
				/>

				<Input
					label="Telf."
					forLabel="phone"
					name="phone"
					type="tel"
					id="phone"
					placeholder="+00 33 3322 3322"
				/>

				<Input
					label="Website"
					forLabel="website"
					name="website"
					type="url"
					id="website"
					placeholder="https://www.tuweb.com"
				/>

				<Input
					label="Puedo Ayudarte?"
					forLabel="message"
					name="message"
					tag="textarea"
					id="message"
					cols="20"
					rows="10"
				/>

				<input onClick={handleSubmit} type="submit" value="Enviar" />
			</form>

			<div className="info-qr">
				<img src={qr} alt="" className="qr" />
			</div>
		</div>
  )
}

export default ContactForm;