import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
  render() {
    const { categories, currentCategory } = this.props;
    return (
      <div className="posts-categories">
        <h3>Categories</h3>
        <ul>
          <Link to="/">
            <li className={currentCategory === undefined ? 'active' : ''}>
              All
            </li>
          </Link>
          {categories.items.map(cat => (
            <Link to={`/category/${cat.path}`} key={cat.name}>
              <li
                key={cat.name}
                className={currentCategory === cat.name ? 'active' : ''}
              >
                {cat.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
