import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//SearchBar를 임포트하면 SearchBar 안에있는 <input / > 가져온다.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB0Pf2wYZ12ptV7fq_JfCcKWUQi2D0uoPc';

// Create a new Component. This component should produce some HTMl
// App은 Class다. ReactDOM에 적용시키기위해선, 인자가 Instance 형태여야한다. <App /> 이런형태 .

//const App = function(){
//	return <div> Hi ! </div>;   // HTML 태그처럼 보이지만 , JSX 이다.
//}

// es6 함수로, () => 이렇게 화살표 함수는 function이랑 같다. 좀더 특정한 제어가 가능.
//searchBar.js에서 가져오는거(export) 한거를 JSX 형태로 써주면 적용된다.

// Fucntion
//const App = () => {
//	return (
//	<div>
//		<SearchBar />
//	</div> 
//)};


/**
 * setState 하면서 state에 값을 저장한다.
 * 
 * onVideoSelect={selectedVideo => this.setState({selectedVideo})} 이건 하는 역할이 state를 갱신하는건데, 여기서 이 함수를 
 * video_list.js로 던져주고, 그걸 videolist에서 받아서 다시 video_list_item으로 던져줘서, 그함수를 실행하면 쫙 받아서
 * 넘겨주고, state를 변경하게 된다.   ==> 이런건 콜백이라 한다.
 */
// Class
class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = { 
			videos: [], 
			selectedVideo: null,
			videoSearch: null
		};		
		
		this.videoSearch('김유진');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term :term }, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
				
			});
		});
	}
	
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={ videoSearch }/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}


// Take this component's generated HTML and put it on the page( in the Dom)
// 이런식으로 <App/ > 으로 인스턴스화 시켜야한다. 이 App 인스턴스를 타겟 DOM에 넣어야한다. (위치를 알아야한다 like div class = 'ass' 이런거 알아야한다.)
ReactDOM.render(<App />, document.querySelector('.container'));
