import { combineReducers } from "redux";

const bookmarksReducer = (state = [], action) => {
    switch (action.type) {
        case    'SET_BOOKMARKS':
            return [...state, action.payload]
            default: return state;
    }

}

export default combineReducers({
    bookmarksReducer
});