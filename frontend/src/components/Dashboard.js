import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

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
            <div className="posts-list">
              <div className="posts-order-box">
                <h3>Posts</h3>
                <div>
                  <span>Order by: </span>
                  <select>
                    <option>Vote Score</option>
                    <option>Date</option>
                  </select>
                </div>
              </div>
              <ul className="posts-list-items">
                {posts.map(post => (
                  <Post key={post.id} post={post} />
                ))}
              </ul>
            </div>
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
