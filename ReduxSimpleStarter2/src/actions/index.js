/**
*
* 이안에는 우리가 만들 모든 액션 생성자가 들어간다.
*/

export function selectBook(book) {
	// selectBook is an ActionCreator,it needs to return an action, an object with a type property.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}