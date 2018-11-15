/**
 * BooksReducer를 가져온다.(reducer_books.js reudcer 에서)
 * 
 * 키는 스테이트의 이름(books)이고, 값은 리듀서 그자체이다. 
 * 이 객체를 combineReducers로 넘길때, 리덕스가 어플리케이션 스테이트를 생성한다.
 * 
 * 어떠한 키건간에 combineReducer로 들어와서 설정되면, global key가 된다.
 * import 받은곳에서 여러가지 리턴값들이 날아올텐데, 거기서 리턴받은 값들을 컴바인리듀서에서 열심히 합쳐서 딴곳에서 쓸수 있게 해준당.
 */

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
