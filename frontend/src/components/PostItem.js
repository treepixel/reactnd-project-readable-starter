import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';
import { handleVotePost } from '../actions/posts';
import { FaRegClock, FaRegStar, FaRegCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class PostItem extends Component {
  handleBtVote = (id, event) => {
    event.preventDefault();
    const data = { option: event.target.name };
    this.props.dispatch(handleVotePost(id, data));
  };

  render() {
    const { post } = this.props;
    return (
      <li>
        <Link to={`/${post.category}/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <div className="info-post">
          <span>
            <FaRegClock color="#FDBA00" />
            {' ' + formatDate(post.timestamp)}
          </span>
          <span>
            <FaRegCommentAlt color="#FDBA00" />
            {' ' + post.commentCount + ' '}
          </span>
          <span className="mgr-10">
            <FaRegStar color="#FDBA00" />
            {' ' + post.voteScore + ' '}
          </span>
          <span className="controlVote">
            <button
              name="downVote"
              onClick={event => this.handleBtVote(post.id, event)}
              className="bt-vote bt-vote-left"
            >
              -
            </button>
            <button
              name="upVote"
              onClick={event => this.handleBtVote(post.id, event)}
              className="bt-vote bt-vote-right"
            >
              +
            </button>
          </span>
        </div>
      </li>
    );
  }
}

export default connect()(PostItem);
