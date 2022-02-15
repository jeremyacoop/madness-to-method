import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';

function BookmarkDetail() {
  const id = useParams().id;
  const mark = useSelector(store => store.bookmarks[id]);
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
    let newValue = tableColumn;
    
    dispatch({
        type:   'UPDATE_BOOKMARK',
        payload: {
            id: id,
            column: tableColumn,
            value: newValue
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
        onChange={(evt) => setTitle(evt.target.value)}
         />
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'title')} >Save</button>
      </form>
      <form action="">
    <select 
        name="priority" id="edit-priority"
        className="update-bookmark-value"
        onChange={evt => setPriority(evt.target.value)} 
        >
        <option value="">_</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
    </select>
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'priority')} >Save</button>
      <input 
        type="text" 
        id="edit-link" 
        placeholder="Link" 
        value={link} 
        onChange={(evt) => setLink(evt.target.value)} />
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'link')} >Save</button>
      </form>
      <form action="">
      <input 
        type="text" 
        id="edit-image" 
        placeholder="Image" 
        value={image} 
        onChange={(evt) => setImage(evt.target.value)} />
      <button className="update-bookmark-value" 
      onSubmit={handleSave(mark.id, 'image')} 
      >Save</button>
      </form>
      <form action="">
      <textarea 
        name="Notes" 
        id="edit-notes" 
        placeholder="Notes" 
        value={notes} 
        onChange={(evt) => setNotes(evt.target.value)} cols="30" rows="10">
        </textarea>
      <button className="update-bookmark-value" onSubmit={handleSave(mark.id, 'notes')} >Save</button>
      </form>
    </div>
  );
}

export default BookmarkDetail;

