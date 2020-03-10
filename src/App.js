import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import MainContent from './components/mainpage/MainContent';
import Navigation from './components/navigation/Navigation';
import { useAxios } from './utils/useAxios';
import Loader from 'react-loader-spinner';

function App() {
	const [ loading, setLoading ] = useState(true);
	const [ nasaData, nasaError, nasaLoading, setNasaUrl ] = useAxios('');
	const changeDate = date => {
		setNasaUrl(date);
	};
	useEffect(
		() => {
			setLoading(nasaLoading);
		},
		[ nasaLoading ],
	);
	if (loading) {
		return (
			<div className='w-full h-screen flex justify-center items-center'>
				<Loader width={500} height={500} type='Rings' color='#670300' />
			</div>
		);
	}
	return (
		<div className='App'>
			<Navigation urlDate={changeDate} reqDate={nasaData.date} />
			<MainContent data={nasaData} />
			<Footer />
		</div>
	);
}

export default App;
