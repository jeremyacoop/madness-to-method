import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchBookmarks() {
    console.log('Help');
}

function* bookmarkSaga() {
    console.log(`I'm trapped in an IDE`);
}

export default bookmarkSaga;