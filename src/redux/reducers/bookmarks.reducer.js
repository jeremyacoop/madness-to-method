import { combineReducers } from "redux";

const bookmarksReducer = (state = [], action) => {
    switch (action.type) {
        case    'SET_BOOKMARKS':
            return action.payload
        case    'BOOKMARK_IMPORTANT':
            return state, action.payload.importantMark //pseudocode
        // case    'ADD_BOOKMARK':
        //     return ({
        //         title: action.payload.title, 
        //         link:  action.payload.link,
        //         priority: action.payload.priority,
        //         notes:  action.payload.notes
        //     })
            default: return state;
    }
}

export default bookmarksReducer;