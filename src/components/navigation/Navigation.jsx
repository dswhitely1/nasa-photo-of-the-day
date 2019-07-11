import React, { useState, useEffect } from 'react';

const Navigation = ({ urlDate, reqDate }) => {
	const [ date, setDate ] = useState(reqDate);
	const handleSubmit = e => {
		e.preventDefault();
		setDate(e.target.value);
		urlDate(e.target.value);
	};

	useEffect(() => setDate(reqDate), [ reqDate ]);

	return (
		<nav className='font-display bg-primary'>
			<div className='container mx-auto flex justify-between items-center h-20 px-12'>
				<h3 className='text-white text-xs sm:text-base md:text-lg lg:text-2xl xl:text-3xl'>Digital Solutions by Don</h3>
				<form>
					<input
						type='date'
						value={date}
						onChange={handleSubmit}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					/>
				</form>
				<p className='text-white hidden lg:block'>Images provided by Nasa</p>
			</div>
		</nav>
	);
};

export default Navigation;
