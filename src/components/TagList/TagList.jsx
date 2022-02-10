import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

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
            type:   'DELETE_TAGS',
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
                <tbody className="tag-list">
                    {tags.map((tag) => (
                        <tr key={tag.id}>
                            <td>{tag.tagCategory}</td>
                            <td><button onClick={evt => deleteTag(tag.id)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    );
}

export default TagList;


