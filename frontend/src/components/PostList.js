import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
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
    );
  }
}

export default PostList;
