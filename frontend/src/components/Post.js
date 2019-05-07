import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
import Comments from './Comments';
import { FaRegClock, FaRegStar, FaEdit, FaTimes } from 'react-icons/fa';

class Post extends Component {
  render() {
    const { post } = this.props;

    if (post === undefined) {
      return <Redirect to="/404" />;
    }

    return (
      <div className="wrapper">
        <div className="header">
          <h1>ReadABLE</h1>
        </div>
        <div className="content">
          <div className="posts-container-detail">
            <div className="box-detail-post">
              <div className="box-control-post">
                <button>
                  <FaEdit />
                </button>
                <button>
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
                  <FaRegStar color="#FDBA00" />
                  {' ' + post.voteScore}
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
