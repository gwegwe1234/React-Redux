/**
 *  index.js에서 YTSearch가 끝나기전에 VideoDetail 에서 id를 찾으려고하면
 *  undifined 에러가 발생한다.따라서 if(!video)를 넣어줘서, 처리를 해준다.
 */
import React from 'react';

const VideoDetail = ({video}) => {
	
	if(!video){
		return <div>Loading...</div>;
	}
	
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);	
};

export default VideoDetail;