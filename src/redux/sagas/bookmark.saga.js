import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchBookmarks() {
    try{
        let response = yield axios.get('/bookmarks')
        console.log('Response:', response);
        yield put({
            type:   'SET_BOOKMARKS',
            payload:    response.data
        });
    }
    catch (err) {
        console.log('Fetch elements failed!', err);
        yield put({
            type:   'SET_ERROR',
            payload: 'Ack!'
        })
    }
}

function* addBookmark(action) {
    console.log('In addBookmark saga', action);
    try {
        yield axios.post('/bookmarks', action.payload);
        yield put({
            type:   'FETCH_BOOKMARKS'
        });
    }
    catch (err) {
        console.log('Error in addBookmark', err);
    }
}

function* markImportant(action) {
    try {
        console.log('In markImportant saga', action);
        yield axios.put(`/bookmarks/${action.id}`, action)
        yield put({
            type:   'FETCH_BOOKMARKS',
        });
    }
    catch (err) {
        console.error('UPDATE bookmark failed!', err);
    }
}

function* deleteBookmark(action) {
    try {
        console.log('In deleteBookmark');
        yield axios.delete(`/bookmarks/${action.id}`);
        yield put({
            type:   'FETCH_BOOKMARKS'
        });
    }
    catch (err) {
        console.error('DELETE bookmark failed!', err);
    }
}

function* bookmarkSaga() {
    console.log('Help');
    yield takeEvery('FETCH_BOOKMARKS', fetchBookmarks);
    yield takeEvery('ADD_BOOKMARK', addBookmark);
    yield takeEvery('DELETE_BOOKMARK', deleteBookmark);
    yield takeEvery('MARK_IMPORTANT', markImportant);
}

export default bookmarkSaga;