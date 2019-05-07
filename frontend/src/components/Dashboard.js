import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import PostList from './PostList';
import { handleInitialData } from '../actions/shared';

class Dashboard extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { posts } = this.props.match.params;
    if (posts !== prevProps.match.params.posts) {
      this.props.dispatch(handleInitialData());
    }
  }
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
