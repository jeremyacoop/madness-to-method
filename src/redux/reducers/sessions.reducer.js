import { combineReducers } from "redux";

const sessionsReducer = (state = [], action) => {
    switch (action.type) {
        case    'SET_SESSION':
            return action.payload
            default: return state;
    }

}

export default sessionsReducer;
