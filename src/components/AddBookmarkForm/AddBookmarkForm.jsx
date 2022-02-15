import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddBookmarkForm.css';

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
                <form action="submit" className="add-bookmark-form" onSubmit={(evt) => addBookmark(evt)}>
                    <label 
                        className="form-label"
                        htmlFor="bookmark-title">
                            Title
                    </label>
                    <input 
                        type="text" 
                        id="bookmark-title"
                        className="form-control"
                        placeholder="Title"
                        value={bookmarkTitle} 
                        onChange={evt => setBookmarkTitle(evt.target.value)} 
                    />
                    <label 
                    className="form-label"
                    htmlFor="bookmark-url">Link</label>
                    <input 
                        type="text" 
                        id="bookmark-url"
                        className="form-control"
                        placeholder="Link URL"
                        value={bookmarkLink} 
                        onChange={evt => setBookmarkLink(evt.target.value)} 
                        required
                    />
                    <label 
                    className="form-label"
                    htmlFor="bookmark-priority">
                        Priority
                    </label>
                    <select 
                        name="priority" id="item-priority"
                        className="form-control"
                        onChange={evt => setBookmarkPriority(evt.target.value)} 
                        >
                        <option value="">_</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <label 
                    className="form-label"
                    htmlFor="bookmark-image">
                        Image
                    </label>
                    <input 
                        type="textarea" 
                        id="bookmark-notes"
                        className="form-control"
                        placeholder="Image"
                        value={bookmarkImage} 
                        onChange={evt => setBookmarkImage(evt.target.value)} 
                    />
                    <label 
                    className="form-label"
                    htmlFor="bookmark-notes">
                        Notes
                    </label>
                    <input 
                        type="textarea" 
                        id="bookmark-notes"
                        className="form-control"
                        placeholder="Notes"
                        value={bookmarkNotes} 
                        onChange={evt => setBookmarkNotes(evt.target.value)} 
                    />
                    <button type="submit">Add Bookmark</button>
              </form>
          </div>
      </div>
    );
}

export default AddBookmarkForm;

