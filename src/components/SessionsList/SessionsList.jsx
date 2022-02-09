import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function SessionsList() {
    const dispatch = useDispatch();
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
    const store = useSelector((store) => store.sessions);
    const [heading, setHeading] = useState('Sessions');
    const [sessionName, setSessionName] = useState('');

    const fetchSessions = () => {
        console.log('In fetchSessions');
        dispatch({
            type:   'FETCH_SESSIONS',
        });
    }

    useEffect(() => {
        fetchSessions();
    }, []);

    return (
        <section>
            <div>
                <h2>{heading}</h2>
            </div>
            <div>
                {JSON.stringify(sessionName)}
            </div>

        </section>
    );
}

export default SessionsList;

