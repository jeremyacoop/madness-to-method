import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';

function BookmarkDetail(bookmark) {
//   const bookmark = useSelector(store => store.bookmarks[id.id]);
  const dispatch = useDispatch();
  const mark = bookmark.bookmark;
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [priority, setPriority] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [tag, setTag] = useState('');

//   useEffect(() => {
//       console.log('In BookmarkDetail', bookmark.bookmark.id);
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
        value={mark.title} 
        onChange={(evt) => setTitle(evt.target.value)} />
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'title')} >Save</button>
      </form>
      <input 
        type="text" 
        id="edit-link" 
        placeholder="Link" 
        value={mark.link} 
        onChange={(evt) => setLink(evt.target.value)} />
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'link')} >Save</button>
      <input 
        type="text" 
        id="edit-priority" 
        placeholder="Priority" 
        value={mark.priority} 
        onChange={(evt) => setPriority(evt.target.value)} />
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'priority')} >Save</button>
      <input 
        type="text" 
        id="edit-image" 
        placeholder="Image" 
        value={mark.image} 
        onChange={(evt) => setImage(evt.target.value)} />
      <button className="update-bookmark-value" 
      onSubmit={handleSave(mark.id, 'image')} 
      >Save</button>
      <textarea 
        name="Notes" 
        id="edit-notes" 
        placeholder="Notes" 
        value={mark.notes} 
        onChange={(evt) => setNotes(evt.target.value)} cols="30" rows="10">
        </textarea>
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'notes')} >Save</button>
    </div>
  );
}

export default BookmarkDetail;

