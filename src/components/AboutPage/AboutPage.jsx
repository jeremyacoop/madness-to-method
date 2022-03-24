import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <ul id="tech-used">Technologies used:
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Sagas</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
