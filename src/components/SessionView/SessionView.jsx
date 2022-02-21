import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import './SessionView.css';
// Material-ui
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { ThreeDRotation } from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/DeleteSharp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {/* <th>Image</th> */}
                        <TableCell 
                            align="center" >
                                <h4>Details</h4>
                        </TableCell>
                        <TableCell 
                            align="center" >
                                <h4>Title</h4>
                        </TableCell>
                        <TableCell 
                            align="center" >
                                <h4>Link</h4>
                        </TableCell>
                        <TableCell 
                            align="center" >
                                <h4>Priority</h4>
                        </TableCell>
                        <TableCell 
                            align="center" >
                                <h4>Notes</h4>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody 
                    className="bookmarks-list" > 
                    {bookmarks.map((bookmark) => (
                        <TableRow key={bookmark.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* <TableCell>{bookmark.image}</TableCell> */}
                            <TableCell>
                                <Link 
                                    className='navLink' 
                                    id="detail-edit"
                                    to={`/details/${bookmark.id}`}
                                    state={{mark: bookmark}}
                                    >
                                        Details
                                </Link>
                            </TableCell>
                            <TableCell>
                                <a target="_blank" href={bookmark.link}>
                                    {bookmark.title}
                                </a>
                            </TableCell>
                            <TableCell>{bookmark.link}</TableCell>
                            {/* <TableCell>
                                { <input 
                                    type="checkbox" 
                                    onClick={evt => 
                                    handleChecked(bookmark.id)} 
                                    defaultChecked={checked} /> }
                            </TableCell> */}
                            <TableCell>{bookmark.priority}</TableCell>
                            <TableCell>{bookmark.notes}</TableCell>
                            <TableCell>
                                <Button
                                    color="primary"
                                    startIcon={<DeleteIcon />}
                                    onClick={evt => deleteBookmark(bookmark.id)}>
                                </Button>
                                    </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}

export default SessionView;