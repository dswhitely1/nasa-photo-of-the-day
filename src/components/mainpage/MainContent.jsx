import React from 'react';
import VideoPlayer from '../movieContainer/VideoPlayer';
import Image from '../imageContainer/Image';

const MainContent = ({ data: { title, url, explanation, media_type, hdurl } }) => {
	return (
		<div className='container mx-auto px-20'>
			<div className='my-5'>
				<h1 className='text-6xl font-display text-primary'>Nasa Picture of the Day</h1>
				<h2 className='text-5xl font-display text-primary'>{title}</h2>
			</div>
			<div className={`flex ${media_type && media_type === 'image' && 'flex-col'}`}>
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
