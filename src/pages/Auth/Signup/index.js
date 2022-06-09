import React, { useState } from "react";

import { Form, Button } from 'react-bootstrap';

import { fetchRegister } from "../../../api";

import { useAuth } from "../../../contexts/AuthContext";

function Signin({ history }) {
	const { login } = useAuth();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
		passwordConfirm: "",
	})

	const { email, password, passwordConfirm } = formData;

	const onInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('handleRegister')

		try {
			const registerResponse = await fetchRegister({
				email: email,
				password: password,
				passwordConfirm: passwordConfirm
			});

			login(registerResponse);

			history.push("/profile");
			console.log(registerResponse);
		} catch (e) {
			// bag.setErrors({ general: e.response.data.message });
			console.error(e)
		}
	}

	return (
		<div>
			<h3>Sign Up</h3>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Control
						type="email"
						placeholder="Email *"
						name="email"
						value={email}
						onChange={e => onInputChange(e)}
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={e => onInputChange(e)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Control
						type="password"
						placeholder="Password Confirm"
						name="passwordConfirm"
						value={passwordConfirm}
						onChange={e => onInputChange(e)}
					/>
				</Form.Group>

				<Button variant="success" type="submit" block>
					Sign Up
				</Button>
			</Form>
		</div>
	);
}

export default Signin;
