import React, { Component } from 'react';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="posts-categories">
        <h3>Categories</h3>
        <ul>
          <li className="active">All</li>
          {categories.map(cat => (
            <li key={cat.name}>{cat.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
