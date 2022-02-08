import { combineReducers } from "redux";

const bookmarksReducer = (state = [], action) => {
    switch (action.type) {
        case    'SET_BOOKMARKS':
            return action.payload
            default: return state;
    }

}

export default bookmarksReducer;