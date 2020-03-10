import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = props => <ReactPlayer url={props.url} playing controls />;

export default VideoPlayer;