import React, { useState, useEffect, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom';
import './BookmarkDetail.css';
// Material-ui
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { ThreeDRotation } from '@mui/icons-material/ThreeDRotation';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function BookmarkDetail() {
  const dispatch = useDispatch();
  const id = useParams().id;
  const bookmark = useSelector(store => store.bookmarks);
  const [heading, setHeading] = useState('');
  // const [editField, setEditField] = useState(false);
  // const [tag, setTag] = useState('');

  const defineBookmark = () => {
    console.log(id);
    dispatch({
      type: 'FETCH_BOOKMARK_DETAIL',
      payload: id
    })   
  }

  useEffect(() => {
    defineBookmark();
  }, [id]);

  const handleSave = (evt, id, mark) => { 
    evt.preventDefault();
    console.log('In handleSave', id);

    dispatch({
        type:   'SEND_UPDATE_BOOKMARK',
          id: id,
          payload: mark
    })
    defineBookmark();
    // history.push('/bookmarks');
  }

  return (
    <div>
      <h2>{heading}</h2>
      {console.log(bookmark)}
      <Box 
        component="form"
        action="submit"
        className="update-bookmark-form"
        onSubmit={(evt) => handleSave(evt, id, bookmark)}  >

      <TextField 
        type="text" 
        id="edit-title" 
        className="update-bookmark-value"
        placeholder="Title" 
        variant="outlined"
        value={bookmark.title} 
        onChange={(evt) => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { title: evt.target.value }})}
         />
    <label 
    className="form-label"
    htmlFor="bookmark-priority">
        Priority
    </label>
    <Select 
        name="priority" 
        id="edit-priority"
        label="Priority"
        className="update-bookmark-value"
        value={bookmark.priority}
        onChange={evt => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { priority: evt.target.value }} 
        )}
        >
        <MenuItem value={""}>_</MenuItem>
        <MenuItem value={"A"}>A</MenuItem>
        <MenuItem value={"B"}>B</MenuItem>
        <MenuItem value={"C"}>C</MenuItem>
        <MenuItem value={"D"}>D</MenuItem>
    </Select>
      <TextField 
        type="text" 
        id="edit-link" 
        className="update-bookmark-value"
        placeholder="Link URL" 
        variant="outlined"
        value={bookmark.link} 
        onChange={(evt) => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { link: evt.target.value }})}
        />
      {/*<TextField 
        type="text" 
        id="edit-image" 
        className="update-bookmark-value" 
        placeholder="Image" 
        variant="outlined"
        value={bookmark.image} 
        onChange={(evt) => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { image: evt.target.value }})}
        />*/}
      <TextField 
        type="textarea"
        name="Notes" 
        id="edit-notes" 
        className="update-bookmark-value"
        placeholder="Notes" 
        multiline
        variant="outlined"
        value={bookmark.notes} 
        onChange={(evt) => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { notes: evt.target.value }})}
        cols="88" rows="10">
        </TextField>
      <Button 
          type="submit"
          id="submit-changes"
          endIcon={<SendIcon />}
          >
          Submit Changes
      </Button>
      </Box>
    </div>
  );
}

export default BookmarkDetail;

