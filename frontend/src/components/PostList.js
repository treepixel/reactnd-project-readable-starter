import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    sortBy: 'voteScore'
  };

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  sortBySelectedMethod(posts) {
    switch (this.state.sortBy) {
      case 'voteScore':
        return posts.sort((a, b) => b.voteScore - a.voteScore);
      case 'date':
        return posts.sort((a, b) => b.timestamp - a.timestamp);
      default:
        return posts;
    }
  }

  render() {
    const { posts } = this.props;
    const { sortBy } = this.state;
    const sortedPosts =
      posts.items !== undefined && posts.items.length > 1
        ? this.sortBySelectedMethod(posts.items)
        : posts.items;

    return (
      <div className="posts-list">
        <div className="posts-order-box">
          <h3>Posts</h3>
          <div>
            <span>Sort by: </span>
            <select value={sortBy} onChange={this.handleChange}>
              <option value="voteScore">Vote Score</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
        <ul className="posts-list-items">
          {sortedPosts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
