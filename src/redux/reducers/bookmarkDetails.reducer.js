
const bookmarkDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case    'SET_BOOKMARK':
            return action.payload;
        case    'UPDATE_BOOKMARK':
            return {...state, ...action.payload};
        // case    'BOOKMARK_IMPORTANT':
        //     return state, action.payload.importantMark //pseudocode
            default: return state;
    }
}

export default bookmarkDetailsReducer;