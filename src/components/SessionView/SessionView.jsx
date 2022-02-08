import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SessionView() {
    const dispatch = useDispatch();
    const bookmarks = useSelector(store => store.bookmarksReducer);

    const fetchBookmarks = () => {
        console.log('Peekaboo');
        dispatch({
            type: 'FETCH_BOOKMARKS',
        })
    }

    useEffect(() => {
        fetchBookmarks();
    }, []);

    return (
        <>
            <div>Placeholder 
                {JSON.stringify(bookmarks)}
            </div>
        </>
    )
}

export default SessionView;