import { useEffect, useState } from 'react';
import axios from 'axios';
import { api_key } from '../secrets/secret';

export const useAxios = url => {
	const [ newUrl, setNewUrl ] = useState(url);
	const [ data, setData ] = useState('');
	const [ error, setError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);
	const baseUrl =
		newUrl === ''
			? `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
			: `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${newUrl}`;
	const axiosRequest = axios.create({
		baseURL : baseUrl,
	});
	useEffect(
		() => {
			setIsLoading(true);
			axiosRequest
				.get()
				.then(res => {
					setIsLoading(false);
					setData(res.data);
				})
				.catch(err => {
					setIsLoading(false);
					setError(err);
				});
		},
		[ newUrl ],
	);

	return [ data, error, isLoading, setNewUrl ];
};
