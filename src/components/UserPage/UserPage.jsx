import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SessionView from '../SessionView/SessionView';
import SessionsList from '../SessionsList/SessionsList';
import TagList from '../TagList/TagList';
import AddBookmarkForm from '../AddBookmarkForm/AddBookmarkForm';
import AddSessionForm from '../AddSessionForm/AddSessionForm';
import CreateTagForm from '../CreateTagForm/CreateTagForm';
import BookmarkDetail from '../BookmarkDetail/BookmarkDetail';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <Router>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
      <div>
      <div>
        <AddBookmarkForm />
      </div>
      <div>
        <AddSessionForm />
      </div>
      <div>
        <CreateTagForm />
      </div>
      <div>
        <SessionsList />
      </div>
      <div>
        <TagList />
      </div>
      <div>
        <SessionView />
      </div>
    </div>
    </Router>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
