import React, { useState, useEffect, useRef } from 'react';
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
  const editTitle = useRef();
  const editPriority = useRef(null);
  const editLink = useRef(null);
  const editImage = useRef(null);
  const editNotes = useRef(null);

//   useEffect(() => {
      console.log('In BookmarkDetail', id);
//       console.log(bookmark.bookmark);
//       
//   }, []);
  
const handleSave = (id, tableColumn) => { 
    console.log('In handleSave', id, tableColumn);
    console.log(editTitle.current);
    console.log(editPriority.current);
    console.log(editLink.current);
    console.log(editImage.current);
    console.log(editNotes.current);
    // console.log(id, tableColumn, newValue);

    // how do I tell the function which of the save 
    // buttons are being clicked? And/or which of the 
    // fields has changed from its pre-edit state?
    
    // if(button with __ value is clicked)
    //     newValue = __

    // dispatch({
    //     type:   'UPDATE_BOOKMARK',
    //     payload: {
    //         id: id,
    //         column: tableColumn,
    //         value: newValue
    //     }
    // })
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
      <button className="update-bookmark-value"
        ref={editTitle}
        onSubmit={handleSave(id, 'title')} >Save</button>
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
      <button className="update-bookmark-value"
        ref={editPriority}
        onSubmit={handleSave(id, 'priority')} >Save</button>
      <input 
        type="text" 
        id="edit-link" 
        placeholder="Link" 
        value={link} 
        onChange={(evt) => setLink(evt.target.value)} />
      <button className="update-bookmark-value"
        ref={editLink}
        onSubmit={handleSave(id, 'link')} >Save</button>
      </form>
      <form action="">
      <input 
        type="text" 
        id="edit-image" 
        placeholder="Image" 
        value={image} 
        onChange={(evt) => setImage(evt.target.value)} />
      <button className="update-bookmark-value" 
        ref={editImage}
        onSubmit={handleSave(id, 'image')} 
        >Save</button>
      </form>
      <form action="">
      <textarea 
        name="Notes" 
        id="edit-notes" 
        placeholder="Notes" 
        value={notes} 
        onChange={(evt) => setNotes(evt.target.value)} cols="60" rows="10">
        </textarea>
      <button className="update-bookmark-value"
        ref={editNotes}
        onSubmit={handleSave(id, 'notes')} >Save</button>
      </form>
    </div>
  );
}

export default BookmarkDetail;

