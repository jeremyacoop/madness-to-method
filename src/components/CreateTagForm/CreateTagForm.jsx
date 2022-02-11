import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './CreateTagForm.css';

function CreateTagForm() {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('Create Tag');
    const [tagCategory, setTagCategory] = useState('');

    const createTag = (evt) => {
        evt.preventDefault();
        console.log('Adding tag:', tagCategory);
        dispatch({
            type: 'CREATE_TAG',
            payload: {
                tagCategory:    tagCategory,
            }
        })
        clearTagForm();
    }

    const clearTagForm = () => {
        setTagCategory('');
    }

    return (
      <div>
        <h2>{heading}</h2>
            <div>
                <form action="submit" className="create-tag-form" onSubmit={(evt) => createTag(evt)}>
                    <label 
                        className="form-label"
                        htmlFor="tag-category">
                            Category
                    </label>
                    <input 
                        type="text" 
                        id="tag-category"
                        className="form-control"
                        placeholder="Category"
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


