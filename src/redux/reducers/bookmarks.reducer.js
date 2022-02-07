import { combineReducers } from "redux";

const bookmarksReducer = (state = '', action) {
    switch (action.type) {
        case    'FETCH_BOOKMARKS':
            return [...state, action.payload]
            default: return state;
    }

}

export default combineReducers({
    bookmarksReducer
});