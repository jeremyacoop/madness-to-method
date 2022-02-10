import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchTags() {
    try{
        let response = yield axios.get('/tags')
        console.log('Response:', response);
        yield put({
            type:   'SET_TAGS',
            payload:    response.data
        });
    }
    catch (err) {
        console.log('Fetch tags failed!', err);
        yield put({
            type:   'SET_ERROR',
            payload: 'Yikes!'
        })
    }
}

function* createTag(action) {
    console.log('In createTag saga', action);
    try {
        yield axios.post('/tags', action.payload);
        yield put({
            type:   'FETCH_TAGS'
        });
    }
    catch (err) {
        console.log('Error in createTag', err);
    }
}

function* deleteTag(action) {
    try {
        console.log('In deleteTag');
        yield axios.delete(`/tags/${action.id}`);
        yield put({
            type:   'FETCH_TAGS'
        });
    }
    catch (err) {
        console.error('DELETE tag failed!', err);
    }
}

function* tagSaga() {
    console.log('Help');
    yield takeEvery('FETCH_TAGS', fetchTags);
    yield takeEvery('CREATE_TAG', createTag);
    yield takeEvery('DELETE_TAG', deleteTag);
}

export default tagSaga;

