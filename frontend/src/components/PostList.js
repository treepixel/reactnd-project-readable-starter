import React, { Component } from 'react';
import { sortBySelectedMethod } from '../utils/helpers';
import PostItem from './PostItem';
import { ListPosts, PostGrid, SelectSort } from '../styles';

class PostList extends Component {
  state = {
    sortBy: 'voteScore'
  };

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  render() {
    const { posts } = this.props;
    const { sortBy } = this.state;
    const sortedPosts =
      posts.items !== undefined && posts.items.length > 1
        ? sortBySelectedMethod(sortBy, posts.items)
        : posts.items;

    return (
      <ListPosts>
        <div className="posts-order-box">
          <h3>Posts</h3>
          <SelectSort>
            <span>Sort by: </span>
            <select value={sortBy} onChange={this.handleChange}>
              <option value="voteScore">Vote Score</option>
              <option value="date">Date</option>
            </select>
          </SelectSort>
        </div>
        <PostGrid>
          {sortedPosts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </PostGrid>
      </ListPosts>
    );
  }
}

export default PostList;
