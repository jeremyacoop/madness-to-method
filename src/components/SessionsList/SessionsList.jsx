import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
// Material-ui
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { ThreeDRotation } from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/DeleteSharp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            <TableContainer>
            <Table sx={{ maxWidth: 300 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <h2>{heading}</h2>
                        </TableCell>
                    </TableRow>
                </TableHead>
            <Link className='navLink' to='/addsession'>
              Add Session
            </Link>
                <TableBody className="sessions-list">
                    {sessions.map((session) => (
                        <TableRow key={session.id}>
                            <TableCell>{session.title}</TableCell>
                            <TableCell>
                                <Button
                                color="primary"
                                startIcon={<DeleteIcon />}
                                onClick={evt => deleteSession(session.id)}
                                >
                                </Button>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>

        </section>
    );
}

export default SessionsList;

