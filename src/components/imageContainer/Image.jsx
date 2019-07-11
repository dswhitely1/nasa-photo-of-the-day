import React from 'react';

const Image = ({ url, title }) => (
	<a href={url}>
		<img className='w-auto h-auto' src={url} alt={title} />
	</a>
);

export default Image;
