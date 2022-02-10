import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './CreateTagForm.css';

function CreateTagForm() {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('Create Tag');
    const [tagTitle, setTagTitle] = useState('');

    const createTag = (evt) => {
        evt.preventDefault();
        console.log('Adding tag:', tagTitle);
        dispatch({
            type: 'CREATE_TAG',
            payload: {
                title:    tagTitle,
            }
        })
        clearTagForm();
    }

    const clearTagForm = () => {
        setTagTitle('');
    }

    return (
      <div>
        <h2>{heading}</h2>
            <div id="tag-form-labels">
                <label htmlFor="tag-category">Title</label>
            </div> 
            <div>
                <form action="submit" className="create-tag-form" onSubmit={(evt) => createTag(evt)}>
                    <input 
                        type="text" 
                        id="tag-category"
                        className="form-control"
                        placeholder="Title"
                        value={tagCategory} 
                        onChange={evt => setTagCategory(evt.target.value)} 
                    />
                    <button type="submit">Create Tag</button>
              </form>
          </div>
      </div>
    );
}

export default CreateTagForm;


