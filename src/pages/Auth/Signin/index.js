import React, { useState } from "react";

import { Form, Button } from 'react-bootstrap';

import { fetchLogin } from "../../../api";

import { useAuth } from "../../../contexts/AuthContext";

function Signin({ history }) {
	const { login } = useAuth();

	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	const { email, password } = formData;

	const onInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('handleLogin')

		try {
			const loginResponse = await fetchLogin({
				email: email,
				password: password,
			});

			login(loginResponse);

			history.push("/profile");
			console.log(loginResponse);
		} catch (e) {
			// bag.setErrors({ general: e.response.data.message });
			console.error(e)
		}
	}

	return (
		<div>
			<h3>Sign In</h3>
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

				<Button variant="success" type="submit" block>
					Signin
				</Button>
			</Form>
		</div>
	);
}

export default Signin;
