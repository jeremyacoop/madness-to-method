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

function TagList() {
    const dispatch = useDispatch();
    const tags = useSelector((store) => store.tags);
    const [heading, setHeading] = useState('Tags');

    const fetchTags = () => {
        console.log('In fetchTags');
        dispatch({
            type:   'FETCH_TAGS',
        });
    }

    useEffect(() => {
        fetchTags();
    }, []);

    const deleteTag = (id) => {
        console.log('In deleteTag', id);
        dispatch({
            type:   'DELETE_TAG',
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
            <Link className='navLink' to='/createtag'>
              Create Tag
            </Link>
                <TableBody className="tag-list">
                    {tags.map((tag) => (
                        <TableRow key={tag.id}>
                            <TableCell>{tag.tagCategory}</TableCell>
                            <TableCell>
                                <Button
                                color="primary"
                                startIcon={<DeleteIcon />}
                                onClick={evt => deleteTag(tag.id)}
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

export default TagList;


