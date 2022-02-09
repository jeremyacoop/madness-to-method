import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function SessionsList() {
    const dispatch = useDispatch();
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
    const sessions = useSelector((store) => store.sessions);
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
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <h2>{heading}</h2>
                        </th>
                    </tr>
                </thead>
                <tbody className="sessions-list">
                    {sessions.map((session) => (
                        <tr key={session.id}>
                            <td>{session.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    );
}

export default SessionsList;

