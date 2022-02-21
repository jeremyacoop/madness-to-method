import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './AddSessionForm.css';
// Material-ui
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { ThreeDRotation } from '@mui/icons-material/ThreeDRotation';
import SendIcon from '@mui/icons-material/Send';

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
            <div>
                <form action="submit" className="add-session-form" onSubmit={(evt) => addSession(evt)}>
                    <label 
                        className="form-label" 
                        htmlFor="session-title">
                            Title
                    </label>
                    <input 
                        type="text" 
                        id="session-title"
                        className="form-control"
                        placeholder="Title"
                        value={sessionTitle} 
                        onChange={evt => setSessionTitle(evt.target.value)} 
                    />
                    <Button 
                        type="submit"
                        endIcon={<SendIcon />}
                        >
                        Add Session
                    </Button>
              </form>
          </div>
      </div>
    );
}

export default AddSessionForm;


