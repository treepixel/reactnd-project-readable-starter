import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receivePostsByCategory } from '../actions/posts';
import { handleInitialData } from '../actions/shared';
import Categories from './Categories';
import PostList from './PostList';

class Posts extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;
    this.getData(category);
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.props.match.params;
    if (category !== prevProps.match.params.category) {
      this.getData(category);
    }
  }

  getData = category => {
    if (category) {
      this.props.dispatch(receivePostsByCategory(category));
    } else {
      this.props.dispatch(handleInitialData());
    }
  };

  render() {
    const { categories, posts } = this.props;
    const { category } = this.props.match.params;
    return (
      <div className="wrapper">
        <div className="header">
          <h1>ReadABLE</h1>
        </div>
        <div className="content">
          <div className="posts-container">
            <Categories categories={categories} currentCategory={category} />
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

export default connect(mapStateToProps)(Posts);
