import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import MainContent from './components/mainpage/MainContent';
import Navigation from './components/navigation/Navigation';
import { useAxios } from './utils/useAxios';

function App() {
	const [ nasaData, nasaError, nasaLoading, setUrl ] = useAxios('');
	console.log(nasaData, nasaError);
	return (
		<div className='App'>
			<Navigation />
			<MainContent data={nasaData} />
			<Footer />
		</div>
	);
}

export default App;
