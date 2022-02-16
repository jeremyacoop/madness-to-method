import React, { useState, useEffect, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';

function BookmarkDetail() {
  const id = useParams().id;
  const bookmarks = useSelector(store => store.bookmarks);
  const mark = useParams();
  const dispatch = useDispatch();
//   const mark = bookmark.bookmark;
//   const [bookmark, setBookmark] = useState({}); 
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [priority, setPriority] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  // const [tag, setTag] = useState('');

  // const defineBookmark = (bookmarks) => {
  //   // for(let i=0; i<bookmarks.length; i++) {
  //   //     console.log(bookmarks[i].id)
  //   //     console.log(bookmarks[i])
  //   //     if(bookmarks[i].id === id) {
  //   //         setBookmark(bookmarks[i]);
  //   //     }
  //   // }
  //     // console.log(bookmark);
  // }
  
  console.log('In BookmarkDetail', id);
  // useEffect(() => {
  //     defineBookmark(bookmarks);
  // }, []);

const handleSave = (id, bookmark) => { 
    console.log('In handleSave', id);
    const newValues = [title, link, image, priority, notes];
    const editPayload = {
        title:  '',
        link:  '',
        image:  '',
        priority: '',
        notes:  ''
    };
    console.log(bookmark.title);

    // console.log(id, newValues);

    // how do I tell the function which of the save 
    // buttons are being clicked? And/or which of the 
    // fields has changed from its pre-edit state?
    
    // if(button with __ value is clicked)
    //     newValue = __
    if(title === mark.title) {
        editPayload.title = mark.title;
    }
    else {
        editPayload.title = title;
    }
    if(link === mark.link) {
        editPayload.link = mark.link;
    }
    else {
        editPayload.link = link;
    }
    if(image === mark.image) {
        editPayload.image = mark.image;
    }
    else {
        editPayload.image = image;
    }
    if(priority === mark.priority) {
        editPayload.priority = mark.priority;
    }
    else {
        editPayload.priority = priority;
    }
    if(notes === mark.notes) {
        editPayload.notes = mark.notes;
    }
    else {
        editPayload.notes = notes;
    }

    console.log(editPayload);
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
      {console.log(mark)}
      <form action=""
       onSubmit={(evt) => handleSave(id, bookmark)}  >

      <input 
        type="text" 
        id="edit-title" 
        className="update-bookmark-value"
        placeholder="Title" 
        value={title} 
        onChange={(evt) => setTitle(evt.target.value)}
         />
      {/* <button ></button> */}
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
      {/* <button ></button> */}
      <input 
        type="text" 
        id="edit-link" 
        className="update-bookmark-value"
        placeholder="Link" 
        value={link} 
        onChange={(evt) => setLink(evt.target.value)} />
      {/* <button ></button> */}
      <input 
        type="text" 
        id="edit-image" 
        className="update-bookmark-value" 
        placeholder="Image" 
        value={image} 
        onChange={(evt) => setImage(evt.target.value)} />
      {/* <button ></button> */}
      <textarea 
        name="Notes" 
        id="edit-notes" 
        className="update-bookmark-value"
        placeholder="Notes" 
        value={notes} 
        onChange={(evt) => setNotes(evt.target.value)} cols="60" rows="10">
        </textarea>
      {/* <button ></button> */}
      <button type="submit" id="submit-changes">Submit changes</button>
      </form>
    </div>
  );
}

export default BookmarkDetail;

