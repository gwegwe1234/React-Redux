import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : ''};

        // overrind처럼 기존의 함수를 이벤트 핸들러의 함수로 바인딩한다. 콜백일경우 발생한다. 보통 컨스트럭터 안에서 다룬다.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});
    }

    //유저가 폼으로 제출을 시도하는것을 막는 함수
    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data -> container는 action 생성자를 불러올 수 있다. 리덕스 연결 필요
        this.props.fetchWeather(this.state.term);
        this.setState({ term : '' });
    }

    // form으로 submit을 만들면, 기본적으로 HTML에서 Form을 통해 페이지를 다시불러온다. -> 리액트랑 맞지않음. 
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);