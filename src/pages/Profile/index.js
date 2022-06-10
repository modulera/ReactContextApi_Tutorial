import { useEffect, useState } from 'react'
// import { useAuth } from "../../contexts/AuthContext";

import { Button } from 'react-bootstrap';

import { fetchUsers } from "../../api";

function Profile() {
	// const { user } = useAuth();
	// console.log(user);

	const [users, setUsers] = useState();
	const [fetching, setFetching] = useState(false);

	const fetchData = async () => {
		console.log('fetching', fetching);
		if (!fetching) return;

		const users = await fetchUsers();
		console.log('users', users);

		setUsers(users);
	};

	useEffect(fetchData, [fetching]);

	return (
		<div>
			<h3 fontSize="22">Profile</h3>
			{/* <code>{user ? JSON.stringify(user) : {}}</code> */}

			<br />
			<br />

			<ul>
				{users?.status === 'success' && users?.description.map((user, i) => {
					return <li key={i}>{user.fullName}</li>
				})}
			</ul>
			<Button variant="success" type="button" onClick={() => setFetching(true)}>
				Get users {users?.status || (fetching && '...')}
			</Button>
		</div>
	);
}

export default Profile;
