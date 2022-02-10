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

    const deleteBookmark = (id) => {
        console.log('In deleteBookmark', id);
        dispatch({
            type:   'DELETE_BOOKMARK',
            id: id
        });
    }

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
                            <td>
                                <a target="_blank" href={bookmark.link}>
                                    {bookmark.title}
                                </a>
                            </td>
                            <td>{bookmark.link}</td>
                            <td>{bookmark.priority}</td>
                            <td>{bookmark.notes}</td>
                            <td>
                                <button 
                                onClick={evt => deleteBookmark(bookmark.id)}>
                                    DELETE
                                    </button>
                                    </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default SessionView;