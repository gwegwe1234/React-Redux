/**
 * video_list.js에서 <VideoListItem video={video} /> 이렇게 넘겨줘서, props.video를 받아서 쓴다. 
 * 예를들어, const video = props.video; 이렇게 선언해서 쓰는데, 이거랑 완전히 같은게 ES6에서
 * 넘겨받는 인자를 props가 아닌, { } 안에 이전 js에서 넘겨받은 인자를 넣어두면 같은 의미이다.
 * 
 * 즉 const video = props.video; 이거랑 {video} 이건 같은 의미이다.
 */

import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	
	const imageUrl = video.snippet.thumbnails.default.url;
	
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">  
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
					
				<div className="media-body">
					<div className="media-heading">{video.snippet.title} </div>
				</div>
			</div>
		</li>	
	);
};

export default VideoListItem;