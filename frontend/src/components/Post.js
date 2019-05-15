import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleDeletePost } from '../actions/posts';
import { withRouter, Redirect } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
import { handleVotePost } from '../actions/posts';
import Comments from './Comments';
import Header from './Header';
import {
  FaRegClock,
  FaRegStar,
  FaEdit,
  FaTimes,
  FaRegCommentAlt
} from 'react-icons/fa';

class Post extends Component {
  handleDelete = (e, id) => {
    e.preventDefault();
    this.props.dispatch(handleDeletePost(id));
    this.props.history.push('/');
  };

  handleBtVote = (id, event) => {
    event.preventDefault();
    const data = { option: event.target.name };
    this.props.dispatch(handleVotePost(id, data));
  };

  render() {
    const { post, history } = this.props;

    if (post === undefined) {
      return <Redirect to="/404" />;
    }

    return (
      <div className="wrapper">
        <Header backTo="/" />
        <div className="content">
          <div className="posts-container-detail">
            <div className="box-detail-post">
              <div className="box-control-post">
                <button onClick={() => history.push(`/posts/edit/${post.id}`)}>
                  <FaEdit />
                </button>
                <button onClick={e => this.handleDelete(e, post.id)}>
                  <FaTimes />
                </button>
              </div>
              <h1>{post.title}</h1>
              <div className="info-post">
                <span>
                  <FaRegClock color="#FDBA00" />
                  {' ' + formatDate(post.timestamp)}
                </span>
                <span>
                  <FaRegCommentAlt color="#FDBA00" />
                  {' ' + post.commentCount + ' '}
                </span>
                <span>
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
              {post.body}
            </div>
            <Comments id={post.id} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, props) {
  const { id } = props.match.params;
  const post = posts.items.find(item => item.id === id);
  return { post };
}

export default withRouter(connect(mapStateToProps)(Post));
