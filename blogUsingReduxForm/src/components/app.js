import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
         {/* this.props.children 으로 렌더링 해줘야 routes.js에 설정한 자식이 보인다. -> 부모라우트가 자식 라우트를 렌더링할때 필요하다. */}
        {this.props.children}
      </div>
    );
  }
}
