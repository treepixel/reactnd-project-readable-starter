import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
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
            <Categories categories={categories} />
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
