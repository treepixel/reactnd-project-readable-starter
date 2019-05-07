import React, { Component } from 'react';
import { formatDate } from '../utils/helpers';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <li>
        <Link to={`/posts/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <div className="info-post">
          <span>
            <FaRegClock color="#FDBA00" />
            {' ' + formatDate(post.timestamp)}
          </span>
          <span>
            <FaRegStar color="#FDBA00" />
            {' ' + post.voteScore}
          </span>
        </div>
      </li>
    );
  }
}

export default PostItem;
