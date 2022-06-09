import axios from "axios";

export const API_URL = process.env.REACT_APP_BASE_ENDPOINT + '/api';

axios.interceptors.request.use(
	function (config) {
		// console.log('---- axios config ----', config)

		const { origin } = new URL(config.url);

		const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
		const token = localStorage.getItem("accessToken");

		if (allowedOrigins.includes(origin)) {
			config.headers.authorization = token;
		}

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

export const fetchRegister = async (input) => {
	const { data } = await axios.post(
		`${API_URL}/auth/register`,
		input
	);

	return data;
};

export const fetchLogin = async (input) => {
	const { data } = await axios.post(
		`${API_URL}/auth/login`,
		input
	);

	return data;
};

export const fetchMe = async () => {
	const { data } = await axios.get(
		`${API_URL}/auth/me`
	);
	return data;
};

export const fetchLogout = async () => {
	const { data } = await axios.post(
		`${API_URL}/auth/logout`,
		{
			refresh_token: localStorage.getItem("refreshToken"),
		}
	);

	return data;
};
