import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SessionView.css';

function SessionView() {
    const dispatch = useDispatch();
    const bookmarks = useSelector(store => store.bookmarks);

    const fetchBookmarks = () => {
        dispatch({
            type: 'FETCH_BOOKMARKS',
        });
    }

    useEffect(() => {
        fetchBookmarks();
    }, []);

    return (
        <>
            <h3>Bookmark Session</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Priority</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody className="bookmarks-list"> 
                    {bookmarks.map((bookmark) => (
                        <tr key={bookmark.id}>
                            <td>{bookmark.title}</td>
                            <td>{bookmark.link}</td>
                            <td>{bookmark.priority}</td>
                            <td>{bookmark.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default SessionView;