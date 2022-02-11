import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SessionView.css';

function SessionView() {
    const dispatch = useDispatch();
    const bookmarks = useSelector(store => store.bookmarks);
    const [checked, setChecked] = useState(false);

    const fetchBookmarks = () => {
        dispatch({
            type: 'FETCH_BOOKMARKS',
        });
    }

    useEffect(() => {
        fetchBookmarks();
    }, []);

    const handleChecked = (id) => {
        // evt.preventDefault();
        console.log('Changing checkbox', checked);
        
        // setChecked(!checked)
        let checkStatus = '';
        // let dispatchChecked = {
        //     type:   'MARK_IMPORTANT',
        //     id:     id,
        //     checked: checked
        // }
        console.log(bookmarks[id].importantMark);
        if(bookmarks[id].importantMark === true) { // pseudocode
            checkStatus='';
            setChecked(false),
            dispatch({
                type:  'MARK_IMPORTANT',
                id:     id,
                checked:    checked     
            })
        } else {
            checkStatus = 'checked';
            setChecked(true),
            dispatch({
                type:  'MARK_IMPORTANT',
                id:     id,
                checked:    checked     
            })
        }
        return checkStatus;
    }

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
                        <th>Important</th>
                        <th>Priority</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody className="bookmarks-list"> 
                    {bookmarks.map((bookmark) => (
                        <tr key={bookmark.id}>
                            <td>
                            </td>
                            <td>
                                <a target="_blank" href={bookmark.link}>
                                    {bookmark.title}
                                </a>
                            </td>
                            <td>{bookmark.link}</td>
                            <td>
                                <input 
                                    type="checkbox" 
                                    onClick={evt => 
                                    handleChecked(bookmark.id)} 
                                    defaultChecked={checked} />
                            </td>
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