import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchSessions() {
    try{
        let response = yield axios.get('/sessions')
        console.log('Response:', response);
        yield put({
            type:   'SET_SESSIONS',
            payload:    response.data
        });
    }
    catch (err) {
        console.log('Fetch sessions failed!', err);
        yield put({
            type:   'SET_ERROR',
            payload: 'Yikes!'
        })
    }
}

function* addSession(action) {
    console.log('In addSession saga', action);
    try {
        yield axios.post('/sessions', action.payload);
        yield put({
            type:   'FETCH_SESSIONS'
        });
    }
    catch (err) {
        console.log('Error in addSession', err);
    }
}

function* sessionSaga() {
    console.log('Help');
    yield takeEvery('FETCH_SESSIONS', fetchSessions);
    yield takeEvery('ADD_SESSION', addSession);
}

export default sessionSaga;
