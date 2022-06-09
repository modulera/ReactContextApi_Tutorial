import { useAuth } from "../../contexts/AuthContext";

import { Button } from 'react-bootstrap';

function Profile({ history }) {
	const { user, logout } = useAuth();
	console.log(user);

	const handleLogout = async () => {
		logout(() => {
			history.push("/");
		});
	};

	return (
		<div>
			<h3 fontSize="22">Profile</h3>
			<code>{JSON.stringify(user)}</code>

			<br />
			<br />
			<Button variant="danger" type="button" block onClick={handleLogout}>
				Logout
			</Button>
		</div>
	);
}

export default Profile;
