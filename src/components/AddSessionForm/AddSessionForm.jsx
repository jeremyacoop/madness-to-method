import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './AddSessionForm.css';

function AddSessionForm() {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('Add Session');
    const [sessionTitle, setSessionTitle] = useState('');

    const addSession = (evt) => {
        evt.preventDefault();
        console.log('Adding session:', sessionTitle);
        dispatch({
            type: 'ADD_SESSION',
            payload: {
                title:    sessionTitle,
            }
        })
        clearSessionForm();
    }

    const clearSessionForm = () => {
        setSessionTitle('');
    }

    return (
      <div>
        <h2>{heading}</h2>
            <div id="session-form-labels">
                <label htmlFor="session-title">Title</label>
            </div> 
            <div>
                <form action="submit" className="add-session-form" onSubmit={(evt) => addSession(evt)}>
                    <input 
                        type="text" 
                        id="session-title"
                        className="form-control"
                        placeholder="Title"
                        value={sessionTitle} 
                        onChange={evt => setSessionTitle(evt.target.value)} 
                    />
                    <button type="submit">Add Session</button>
              </form>
          </div>
      </div>
    );
}

export default AddSessionForm;


