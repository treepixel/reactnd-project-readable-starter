import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';
import {
  handleReceiveComments,
  handleDeleteComment
} from '../actions/comments';
import FormComment from './FormComment';
import { FaRegCommentAlt, FaEdit, FaTimes, FaRegStar } from 'react-icons/fa';
import imgUser from '../assets/images/user.png';

class Comments extends Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.dispatch(handleReceiveComments(id));
  }

  handleDelete = (e, id) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(handleDeleteComment(id));
  };

  render() {
    const { comments, id } = this.props;
    return (
      <div className="box-detail-comments">
        {comments.length >= 1 && (
          <h3>
            <FaRegCommentAlt /> Comments
          </h3>
        )}
        <div className="list-comments">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-user">
                <img src={imgUser} alt="adfasd" />
                <div>
                  <div className="comment-info">
                    <div className="comment-ifo-autor">
                      <h4>{comment.author}</h4>
                      <span>{formatDate(comment.timestamp)}</span>
                    </div>
                    <div className="box-control-comment">
                      <button>
                        <FaEdit />
                      </button>
                      <button onClick={e => this.handleDelete(e, comment.id)}>
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                  <div className="comment-text">{comment.body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <FormComment id={id} />
      </div>
    );
  }
}

function mapStateToProps({ comments }, props) {
  const { id } = props;
  return {
    id,
    comments: Object.keys(comments.items).map(item => comments.items[item])
  };
}

export default connect(mapStateToProps)(Comments);
