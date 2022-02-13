import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function BookmarkDetail(id) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [priority, setPriority] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [tag, setTag] = useState('');



  return (
    <div>
      <h2>{heading}</h2>
      <input type="text" id="edit-title" onChange={(evt) => setTitle(evt.target.value)} />
      <input type="text" id="edit-link" onChange={(evt) => setLink(evt.target.value)} />
      <input type="text" id="edit-priority" on
      Change={(evt) => setPriority(evt.target.value)} />
      <input type="text" id="edit-image" onChange={(evt) => setImage(evt.target.value)} />
      <textarea name="Notes" id="edit-notes" cols="30" rows="10"></textarea>
    </div>
  );
}

export default BookmarkDetail;

