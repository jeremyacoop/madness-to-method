import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';

function BookmarkDetail() {
  const id = useParams().id;
  const mark = useSelector(store => store.bookmarks);
  const dispatch = useDispatch();
//   const mark = bookmark.bookmark;
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [priority, setPriority] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [tag, setTag] = useState('');

//   useEffect(() => {
      console.log('In BookmarkDetail', mark);
//       console.log(bookmark.bookmark);
//       
//   }, []);
  
const handleSave = (id, tableColumn) => { 
    console.log('In handleSave', id, tableColumn);
    
    dispatch({
        type:   'UPDATE_BOOKMARK',
        payload: {
            id: id,
            column: tableColumn
        }
    })
}

  return (
    <div>
      <h2>{heading}</h2>
      <form action="">

      <input 
        type="text" 
        id="edit-title" 
        placeholder="Title" 
        value={title} 
        onChange={(evt) => setTitle(evt.target.value)} />
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'title')} >Save</button>
      </form>
      <input 
        type="text" 
        id="edit-link" 
        placeholder="Link" 
        value={link} 
        onChange={(evt) => setLink(evt.target.value)} />
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'link')} >Save</button>
      <input 
        type="text" 
        id="edit-priority" 
        placeholder="Priority" 
        value={priority} 
        onChange={(evt) => setPriority(evt.target.value)} />
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'priority')} >Save</button>
      <input 
        type="text" 
        id="edit-image" 
        placeholder="Image" 
        value={image} 
        onChange={(evt) => setImage(evt.target.value)} />
      <button className="update-bookmark-value" 
      onSubmit={handleSave(mark.id, 'image')} 
      >Save</button>
      <textarea 
        name="Notes" 
        id="edit-notes" 
        placeholder="Notes" 
        value={notes} 
        onChange={(evt) => setNotes(evt.target.value)} cols="30" rows="10">
        </textarea>
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'notes')} >Save</button>
    </div>
  );
}

export default BookmarkDetail;

