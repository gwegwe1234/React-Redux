/**
 *  redux를 component에 연결해 줘야 한다. 
 *  react-redux 를 쓴다. 
 *  컨테이너를 사용해서 연결해준다. 리액트에서 제공하는것.
 *  분리된 리액트와 리덕스를 react-redux 사용. 컨테이너에서 해준다.
 *  
 *  컨테이너는 리덕스에 속한 스테이트를 다룰 수 있는 컴포넌트 이다.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
	
	renderList(){
		return this.props.books.map((book) => {
			return(
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item"> 
					{book.title} </li>
			);
		});
	}
	
	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
		
	}
}


//Whatever is returned will show up as porps
//inside of BookList
// state는 책배열과 활성화된 책을 가지고 있다. 
// 이는 어플리케이션 스테이트를 가져와 무엇이든지 함수로 반환하고, 컨테이너 안에 어떤 것을 props로 보여줄지 나타낸다. 
// 즉 이 함수가 리액트와 리덕스를 연결해주는 역할을 한다. 리덕스에서 얻은 데이터를 리액트(뷰단) 에 뿌려줌...
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

/**
 * 
 * @param dispatch
 * @returns
 * 
 * selectBook은 위의 import한 액션 생성자.
 * 
 * Anything returned from this function will end up as props on the BookList container
 * 이 함수로 반환받은 것은 북리스트 컨테이너의 props로 연결될 것이다.
 * 즉 이함수 안의 bindActionCreators로 반환되는 첫번째 것은, 무엇이든지 간에 컨테이너의 props로 활용이 가능하다. 
 * ex) this.props.selectBook 이렇게 사용하면 액션 생성자를 호출하는 것.
 */
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all of our reducers.
	// 이 모든 액션들을 가져와 어플리케이션 안에 모든 리듀서로 전달하는 것.
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// 컴포넌트에서 컨테이너로 북 리스트를 바꿔야하는데 이는 새로운 dispatch메소드인 selectBook을 알아야 하고, 이는 prop으로 이용이 가능하다.

export default connect(mapStateToProps, mapDispatchToProps)(BookList);