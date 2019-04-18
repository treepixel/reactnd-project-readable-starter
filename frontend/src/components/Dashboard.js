import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { categories, posts } = this.props;
    console.log(posts);
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {categories.map(cat => (
            <li key={cat.name}>{cat.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories: Object.keys(categories).map(cat => categories[cat]),
    posts: Object.keys(posts).sort(
      (a, b) => posts[b].timestamp - posts[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
