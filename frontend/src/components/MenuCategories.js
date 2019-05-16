import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuBox } from '../styles';

class MenuCategories extends Component {
  render() {
    const { categories, currentCategory } = this.props;
    return (
      <MenuBox>
        <h3>Categories</h3>
        <ul>
          <Link to="/">
            <li className={currentCategory === undefined ? 'active' : ''}>
              All
            </li>
          </Link>
          {categories.items.map(cat => (
            <Link to={`/${cat.path}`} key={cat.name}>
              <li
                key={cat.name}
                className={currentCategory === cat.name ? 'active' : ''}
              >
                {cat.name}
              </li>
            </Link>
          ))}
        </ul>
      </MenuBox>
    );
  }
}

export default MenuCategories;
