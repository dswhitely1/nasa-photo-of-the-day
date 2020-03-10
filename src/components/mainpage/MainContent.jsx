import React from 'react';
import VideoPlayer from '../movieContainer/VideoPlayer';
import Image from '../imageContainer/Image';

const MainContent = ({ data: { title, url, explanation, media_type, hdurl } }) => {
	return (
		<div className='container mx-auto px-2'>
			<div className='my-5'>
				<h1 className='text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-primary'>
					Nasa Picture of the Day
				</h1>
				<h2 className='text-base sm:text-1xl md:text-2xl lg:text-3xl xl:text-5xl font-display text-primary'>{title}</h2>
			</div>
			<div className={`flex flex-col items-center`}>
				{media_type && media_type === 'video' ? (
					<VideoPlayer url={url} />
				) : (
					<Image url={hdurl} title={title} className='shadow my-5' />
				)}
				<p className='shadow py-5 px-4 text-left my-3'>{explanation}</p>
			</div>
		</div>
	);
};

export default MainContent;
