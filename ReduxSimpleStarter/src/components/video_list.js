import React from 'react';
import VideoListItem from './video_list_item';

/**
 * index.js에서 받은 videos={this.state.videos} 에서 {} 안의 것은 아래 익명함수에서 (props)와 같음. 즉 props = this.state랑 같다고 보면됨.
 * 
 * videoItems 에 Youtube에서 찾은 video객체를 가지고, map에 넣고 돌려서 반복문을 돌린다. 
 * 그러면 VideoListItem JSX를 리턴하는데, 그건 video_list_item의 props에 video 배열을 넣어서 나온 값을 리턴해서 나온 값들을
 * 맵을 통해 돌게되고, 그값을 videoItems에 넣어준다. 그갤 아래 ul태그 아래에다 넣으면, list를 만들어 줄 수 있다.
 * 
 * props 에서 이전에 넘겨준거(여기선 index.js) 를 받아서 쓰려면, props."이전에 넘겨준 js에서 변수명(여기선 videos)" 로 쓴다. 
 * 즉 props는 받아서 쓰는건데, 이전에 넘겨준거를 .을 써서 받아오는거 같음 
 * 
 * 배열에서 리스트 만들땐 키를 넣어 매칭해주는게 좋음. 백단에서 뭔가 작업하는거같다. 
 */
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return(
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		) 
	});
	
	return(	
		<div>
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>	
		</div>
	);
};

export default VideoList;