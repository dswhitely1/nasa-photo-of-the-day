import { useEffect, useState } from 'react';
import axiosNasa from './axiosConfig';

export const useAxios = url => {
	const [ data, setData ] = useState('');
	const [ error, setError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);
	console.log('useAxios');
	useEffect(
		() => {
			setIsLoading(true);
			axiosNasa
				.get(url)
				.then(res => {
					console.log(res.data);
					setIsLoading(false);
					setData(res.data);
				})
				.catch(err => {
					console.log(err);
					setIsLoading(false);
					setError(err);
				});
		},
		[ url ],
	);

	return [ data, error, isLoading ];
};
