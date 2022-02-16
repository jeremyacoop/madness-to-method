import React, { useState, useEffect, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom';

function BookmarkDetail() {

  const defineBookmark = () => {
    console.log(id);
    // return marks.findIndex(obj => obj.id === id);
  //   // return bookmarks.map(obj => obj.id).indexOf(id );
    dispatch({
      type: 'FETCH_BOOKMARK_DETAIL',
      payload: id
    })   
  }
  // const bookmarkIndex = defineBookmark(bookmarks);  
  // console.log(bookmarkIndex);
  // const displayFields = () => {
  //   console.log('In displayFields');
  // }

useEffect(() => {
  defineBookmark();
}, []);

const id = useParams().id;
const bookmark = useSelector(store => store.bookmarks);
// const mark = useLocation();
// const { bookmark } = bookmark.state;
const dispatch = useDispatch();
//   const mark = bookmark.bookmark;
//   const [bookmark, setBookmark] = useState({}); 
const [heading, setHeading] = useState('');
const [editField, setEditField] = useState(false);
// const [tag, setTag] = useState('');

const handleSave = (evt, id, mark) => { 
    evt.preventDefault();
    console.log('In handleSave', id);
    console.log(mark.title);

    // dispatch({
    //     type:   'SEND_UPDATE_BOOKMARK',
    //       id: id,
    //       payload: editPayload 
    // })
    // defineBookmark();
}

  return (
    <div>
      <h2>{heading}</h2>
      {console.log(bookmark)}
      <form action=""
       onSubmit={(evt) => handleSave(id, bookmark)}  >

      <input 
        type="text" 
        id="edit-title" 
        className="update-bookmark-value"
        placeholder="Title" 
        value={bookmark.title} 
        onChange={(evt) => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { title: evt.target.value }})}
         />
         {/* {console.log('Test', title)} */}
    <select 
        name="priority" id="edit-priority"
        className="update-bookmark-value"
        value={bookmark.priority}
        onChange={evt => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { priority: evt.target.value}} 
        )}
        >
        <option value="">_</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
    </select>
      <input 
        type="text" 
        id="edit-link" 
        className="update-bookmark-value"
        placeholder="Link" 
        value={bookmark.link} 
        onChange={(evt) => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { link: evt.target.value}})}
        />
      <input 
        type="text" 
        id="edit-image" 
        className="update-bookmark-value" 
        placeholder="Image" 
        value={bookmark.image} 
        onChange={(evt) => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { image: evt.target.value}})}
        />
      <textarea 
        name="Notes" 
        id="edit-notes" 
        className="update-bookmark-value"
        placeholder="Notes" 
        value={bookmark.notes} 
        onChange={(evt) => dispatch({
          type: 'UPDATE_BOOKMARK',
          payload: { notes: evt.target.value}})}
        cols="60" rows="10">
        </textarea>
      <button type="submit" id="submit-changes">Submit changes</button>
      </form>
    </div>
  );
}

export default BookmarkDetail;

