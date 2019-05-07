import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>ReadABLE</h1>
      </div>
      <div className="content">
        <div className="posts-container-detail">
          <div className="box-detail-post not-found">
            <h1>404</h1>
            <h2>Content Not Found</h2>
            <div className="box-button">
              <p>The page or resource you tried to use was not found</p>
              <Link to="/">Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
