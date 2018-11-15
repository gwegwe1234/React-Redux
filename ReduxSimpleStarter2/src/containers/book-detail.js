/**
 * combineReducer에서 activeBook을 설정해줬고, 
 * 그걸 컨테이너에서 가져다 쓰는것.
 * 즉 액션이 발생(책선택)하면 mapStateToProps로, 
 * 스테이트를 prop에 설정해주고(이짓을 하면 BookDetail 에서 props로 접근해서 book을 쓸수있다!. 똑똑하다..)
 * 그걸 BookDetail에서 쓰면, 화면에 표시가 가능하다.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
	render(){
		if(!this.props.book){
			return <div>Select a book to get started</div>;
		}
		
		return(
			<div>
				<h3>Details for:</h3>
				<div>Title : {this.props.book.title}</div>
				<div>Pages : {this.props.book.pages}</div>
			</div>
		);
		
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);