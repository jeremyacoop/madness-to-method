import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SessionView() {
    const dispatch = useDispatch();
    const bookmarks = useSelector(store => store.bookmarks);

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
            <table>
                <thead>Bookmark Session</thead>
                <th>Title</th>
                <th>Link</th>
                <tbody classId="default-list">
                    {bookmarks.map(bookmark => (
                        <tr key={bookmark.id}>
                            <td>{bookmark.title}</td>
                            <td>{bookmark.link}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default SessionView;