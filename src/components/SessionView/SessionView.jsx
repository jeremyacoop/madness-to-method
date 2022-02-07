import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SessionView() {
    const bookmarks = useSelector(store => store.bookmarksReducer);

    const fetchBookmarks = () => {
        console.log('Peekaboo');

    }

    useEffect(() => {
        fetchBookmarks();
    }, []);

    return (
        <>
        </>
    )
}

export default SessionView;