import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SessionView() {
    const dispatch = useDispatch();
    const bookmarks = useSelector(store => store.bookmarksReducer);

    const fetchBookmarks = () => {
        dispatch({
            type: 'FETCH_BOOKMARKS',
        })
    }

    useEffect(() => {
        fetchBookmarks();
    }, []);

    return (
        <>
        <div>There's supposed to be text under this.</div>
        <div>{JSON.stringify(bookmarks)}</div>
            {/*<table>
                <thead>Bookmark Session
                <th>Title</th>
                <th>Link</th></thead>
                <tbody classId="default-list">
                    {bookmarks.map(bookmark => (
                        <tr key={bookmark.id}>
                            <td>{bookmark.title}</td>
                            <td>{bookmark.link}</td>
                        </tr>
                    ))}
                </tbody>
            </table>*/}
        </>
    )
}

export default SessionView;