import React from 'react';
import './App.css';
import { useAxios } from './utils/useAxios';

function App() {
	const [ nasaData, nasaError, nasaLoading ] = useAxios('');
	console.log(nasaData, nasaError);
	return (
		<div className='App'>
			<p>Read through the errors instructions in the README.md file to build your NASA app! Have fun 🚀!</p>
		</div>
	);
}

export default App;
