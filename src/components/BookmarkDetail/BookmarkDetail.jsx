import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';

function BookmarkDetail(bookmark) {
//   const bookmark = useSelector(store => store.bookmarks[id.id]);
  const mark = bookmark.bookmark;
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [priority, setPriority] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [tag, setTag] = useState('');

  useEffect(() => {
      console.log('In BookmarkDetail', bookmark.bookmark.id);
      console.log(bookmark.bookmark);
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
      <input type="text" id="edit-title" placeholder="Title" value={mark.title} onChange={(evt) => setTitle(evt.target.value)} />{console.log(mark.id)}
      <input type="text" id="edit-link" placeholder="Link" value={mark.link} onChange={(evt) => setLink(evt.target.value)} />
      <input type="text" id="edit-priority" placeholder="Priority" value={mark.priority} onChange={(evt) => setPriority(evt.target.value)} />
      <input type="text" id="edit-image" placeholder="Image" value={mark.image} onChange={(evt) => setImage(evt.target.value)} />
      <textarea name="Notes" id="edit-notes" placeholder="Notes" value={mark.notes} cols="30" rows="10"></textarea>
    </div>
  );
}

export default BookmarkDetail;

