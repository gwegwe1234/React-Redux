/**
 *  리듀서의 요소는 state, action을 갖는다. 
 *  리듀서는 액션이 일어날때 호출이 된다. 항상 액션이 있음
 *  state는 어플리케이션 스테이트가 아니고,
 *  스테이트는 리듀서가 권한을 갖고잇다.
 */
export default function(state=null, action){
	switch(action.type){
	case 'BOOK_SELECTED':
		return action.payload;
	}
	return state;
}