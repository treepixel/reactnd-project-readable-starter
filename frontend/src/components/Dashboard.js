import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

class Dashboard extends Component {
  render() {
    const { categories, posts } = this.props;
    return (
      <div className="wrapper">
        <div className="header">
          <h1>ReadABLE</h1>
        </div>
        <div className="content">
          <div className="posts-container">
            <div className="posts-categories">
              <h3>Categories</h3>
              <ul>
                <li className="active">All</li>
                {categories.map(cat => (
                  <li key={cat.name}>{cat.name}</li>
                ))}
              </ul>
            </div>
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts
  };
}

export default connect(mapStateToProps)(Dashboard);
