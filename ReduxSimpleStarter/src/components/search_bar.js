import React, { Component } from 'react';

//const SearchBar = () => {
//	return <input />
//};


// Class 기반 Component. Function 기반 Component에 비해서 다른 Component와 연관되게 사용이 가능하다.  
// Class 기반 Component에는 state가존재. 특정 이벤트가 발생하거나, state가 변경되면 
// 해당 class + 상속되어있는 모든것들이 Re-Rendering된다.-> constructor로 초기화해줌.
class SearchBar extends Component {
	 
	constructor(props) {
		super(props);
		
		this.state = { term : '' };
	}
	
	//render function에는 전부 JSX를 반환해야한다.
	// this.state.term => 제어요소. 넣어두면 아래 onChange 없을시, 실행이안된다. 즉 값에 state.term을넣어서 관리.
	render() {	
		return (
			<div className="search-bar">
				<input 
				value = 	{this.state.term}
				onChange={event => this.onInputChange(event.target.value)} /> 
			</div>
		);
	}
	
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	
	//event handler.
	//Input이 change되면 함수 안의 것들이 실행된다. 
//	onInputChange(event) {
//		console.log(event.target.value);
//	}
}

export default SearchBar;