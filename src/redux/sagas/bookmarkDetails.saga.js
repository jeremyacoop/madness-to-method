import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* fetchBookmarkDetail(action) {
    console.log('In fetchBookmarkDetail', action.payload);
    const id = action.payload;
    try{
        let response = yield axios.get(`/bookmarks/${id}`, {id: id});
        console.log('Response:', response);
        yield put({
            type:   'SET_BOOKMARK',
            payload:    response.data
        });
    }
    catch (err) {
        console.log('Fetch element failed!', err);
        yield put({
            type:   'SET_ERROR',
            payload: 'Ack!'
        })
    }
}

function* updateBookmark(action) {
    try {
        console.log('In updateBookmark saga', action.payload);
        yield axios.put(`/bookmarks/${action.id}`, action.payload)
        yield put({
           type:   'FETCH_BOOKMARKS',
        });
    }
    catch (err) {
        console.error('UPDATE bookmark failed!', err);
    }
}

// function* markImportant(action) {
//     try {
//         console.log('In markImportant saga', action);
//         yield axios.put(`/bookmarks/${action.id}`, action)
//         yield put({
//             type:   'FETCH_BOOKMARKS',
//         });
//     }
//     catch (err) {
//         console.error('UPDATE bookmark failed!', err);
//     }
// }

function* bookmarkDetailsSaga() {
    console.log('Help');
    yield takeEvery('FETCH_BOOKMARK_DETAIL', fetchBookmarkDetail);
    yield takeEvery('SEND_UPDATE_BOOKMARK', updateBookmark);
    // yield takeEvery('MARK_IMPORTANT', markImportant);
}

export default bookmarkDetailsSaga;