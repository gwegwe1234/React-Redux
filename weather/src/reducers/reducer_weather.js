import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //새로운 배열을 만들어 두개의 요소를 다 집어넣는것. 리덕스의 핵심같은것. state를 바로 바꾸거나 하는식으로는 하지 않는게 좋다.
            return [action.payload.data, ...state];
    }
    return state;
}