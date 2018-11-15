import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

    // 이 함수는 라이프사이클 메소드 이다. Dom이 렌더링 되자마자 실행되는 함수라고 생각하면 된다. 즉 여기서 액션을 부르면 될듯.
    // 이 메소드는 라이프 사이클 메소드로서, 자동적으로 리액트에 의해 호출된다.
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return(
                <li className="list-group-item" key={post.id}>
                <Link to={"posts/" + post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </Link>
            </li>
            );
        });
    }

    //Link 태그는 a태그역할을한다.
    render() {
        return (
            <div> 
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);