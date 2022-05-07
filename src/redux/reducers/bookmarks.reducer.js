// import { combineReducers } from "redux";

const bookmarksReducer = (state = [], action) => {
    switch (action.type) {
        case    'SET_BOOKMARKS':
            return action.payload;
        // case    'BOOKMARK_IMPORTANT':
        //     return state, action.payload.importantMark //pseudocode
        // case    'SET_BOOKMARK':
        //     return action.payload;
        // case    'UPDATE_BOOKMARK':
        //     return {...state, ...action.payload};
            default: return state;
    }
}

export default bookmarksReducer;