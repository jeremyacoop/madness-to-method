import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import BookmarkDetail from '../BookmarkDetail/BookmarkDetail';
import './SessionView.css';

function SessionView() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { id } = useParams();
    const bookmarks = useSelector(store => store.bookmarks);
    // const [checked, setChecked] = useState(false);

    const fetchBookmarks = () => {
        dispatch({
            type: 'FETCH_BOOKMARKS',
        });
    }
    
    useEffect(() => {
        fetchBookmarks();
    }, []);

    // const handleChecked = (id) => {
        // evt.preventDefault();
        // console.log('Changing checkbox', checked);
        
        // setChecked(!checked)
        // let checkStatus = '';
        // console.log(bookmarks[id].id);
        // if(bookmarks[id].importantMark === checked) { 
        //     checkStatus=`
        //         <input 
        //             type="checkbox" 
        //             onClick={evt => 
        //             handleChecked(bookmark.id)} 
        //             defaultChecked={checked} />
        //         `;
            // setChecked(false)
        // } else {
        //     checkStatus = `
        //         <input 
        //             type="checkbox" 
        //             onClick={evt => 
        //             handleChecked(bookmark.id)} 
        //             defaultChecked={checked} />
        //         `;
            // setChecked(true)
        // }
        // dispatchChecked(id);
        // return checkStatus;
    // }

    // const dispatchChecked = (id) => {
    //     dispatch({
    //             type:  'MARK_IMPORTANT',
    //             id:     id,
    //             checked:    checked     
    //     });
    // }

    const deleteBookmark = (id) => {
        console.log('In deleteBookmark', id);
        dispatch({
            type:   'DELETE_BOOKMARK',
            id: id
        });
    }

    // const detailView = (id ) => {
    //     // evt.preventDefault();
    //     console.log('In detailView', id);
    //     history.push(`/details/${id}`) 
    // } 

    return (
        <>
            <h3>Bookmark Session</h3>
            <Link 
                className='navLink' 
                to='/addbookmark'
                >
              Add Bookmark
            </Link>
            <table>
                <thead>
                    <tr>
                        {/* <th>Image</th> */}
                        <th>Details</th>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Priority</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody className="bookmarks-list"> 
                    {bookmarks.map((bookmark) => (
                        <tr key={bookmark.id}>
                            {/* <td>{bookmark.image}</td> */}
                            <td>
                                <Link 
                                    className='navLink' 
                                    id="detail-edit"
                                    to={`/details/${bookmark.id}`}
                                    state={{mark: bookmark}}
                                    >
                                        Details
                                </Link>
                            </td>
                            <td>
                                <a target="_blank" href={bookmark.link}>
                                    {bookmark.title}
                                </a>
                            </td>
                            <td>{bookmark.link}</td>
                            {/* <td>
                                { <input 
                                    type="checkbox" 
                                    onClick={evt => 
                                    handleChecked(bookmark.id)} 
                                    defaultChecked={checked} /> }
                            </td> */}
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