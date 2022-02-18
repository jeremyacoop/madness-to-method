import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

function SessionsList() {
    const dispatch = useDispatch();
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

    const deleteSession = (id) => {
        console.log('In deleteSession', id);
        dispatch({
            type:   'DELETE_SESSION',
            id: id
        });
    }

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
            <Link className='navLink' to='/addsession'>
              Add Session
            </Link>
                <tbody className="sessions-list">
                    {sessions.map((session) => (
                        <tr key={session.id}>
                            <td>{session.title}</td>
                            <td><button onClick={evt => deleteSession(session.id)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    );
}

export default SessionsList;

