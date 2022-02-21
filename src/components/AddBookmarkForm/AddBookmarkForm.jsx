import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddBookmarkForm.css';
// Material-ui
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { ThreeDRotation } from '@mui/icons-material/ThreeDRotation';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function AddBookmarkForm() {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('Add Bookmark');
    const [bookmarkTitle, setBookmarkTitle] = useState('');
    const [bookmarkLink, setBookmarkLink] = useState('');
    const [bookmarkPriority, setBookmarkPriority] = useState('');
    const [bookmarkImage, setBookmarkImage] = useState('');
    const [bookmarkNotes, setBookmarkNotes] = useState('');

    const addBookmark = (evt) => {
        evt.preventDefault();
        console.log('Adding bookmark:', bookmarkTitle);
        dispatch({
            type: 'ADD_BOOKMARK',
            payload: {
                title:    bookmarkTitle,
                link:     bookmarkLink,
                priority: bookmarkPriority,
                image:    bookmarkImage,
                notes:    bookmarkNotes
            }
        })
        clearBookmarkForm();
    }

    const clearBookmarkForm = () => {
        setBookmarkTitle('');
        setBookmarkLink('');
        setBookmarkPriority('');
        setBookmarkImage('');
        setBookmarkNotes('');
    }

    return (
      <div>
        <h2>{heading}</h2>
            <div>
                < Box 
                    component="form" 
                    action="submit" 
                    className="add-bookmark-form" 
                    onSubmit={(evt) => addBookmark(evt)}>
                    <TextField 
                        type="text" 
                        id="bookmark-title"
                        label="Title"
                        className="form-control"
                        placeholder="Title"
                        variant="outlined"
                        value={bookmarkTitle} 
                        onChange={evt => setBookmarkTitle(evt.target.value)} 
                        required
                    />
                    <label 
                    className="form-label"
                    htmlFor="bookmark-priority">
                        Priority
                    </label>
                    <Select 
                        id="item-priority"
                        label="Priority"
                        className="form-control"
                        onChange={evt => setBookmarkPriority(evt.target.value)} 
                        >
                        <MenuItem value={''}>_</MenuItem>
                        <MenuItem value={'A'}>A</MenuItem>
                        <MenuItem value={'B'}>B</MenuItem>
                        <MenuItem value={'C'}>C</MenuItem>
                        <MenuItem value={'D'}>D</MenuItem>
                    </Select>
                    <TextField 
                        type="text" 
                        id="bookmark-url"
                        label="Link URL"
                        className="form-control"
                        placeholder="Link URL"
                        variant="outlined"
                        value={bookmarkLink} 
                        onChange={evt => setBookmarkLink(evt.target.value)} 
                        required
                    />
                    {/*<label 
                    className="form-label"
                    htmlFor="bookmark-image">
                        Image
                    </label>
                    <TextField 
                        type="text" 
                        id="bookmark-image"
                        className="form-control"
                        placeholder="Image"
                        variant="outlined"
                        value={bookmarkImage} 
                        onChange={evt => setBookmarkImage(evt.target.value)} 
                    />*/}
                    <TextField 
                        type="textarea" 
                        id="bookmark-notes"
                        label="Notes"
                        className="form-control"
                        placeholder="Notes"
                        multiline 
                        variant="outlined"
                        value={bookmarkNotes} 
                        onChange={evt => setBookmarkNotes(evt.target.value)} 
                    />
                    <Button 
                        type="submit"
                        endIcon={<SendIcon />}
                        >
                        Add Bookmark
                    </Button>
              </Box>
          </div>
      </div>
    );
}

export default AddBookmarkForm;

