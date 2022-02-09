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

function* sessionSaga() {
    console.log('Help');
    yield takeEvery('FETCH_SESSIONS', fetchSessions);
}

export default sessionSaga;
