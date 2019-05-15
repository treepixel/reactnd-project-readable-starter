import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';
import Modal from 'react-responsive-modal';
import {
  handleReceiveComments,
  handleVoteComment,
  handleDeleteComment
} from '../actions/comments';
import { handleUpdatePostCountComments } from '../actions/shared';
import FormComment from './FormComment';
import FormEditComment from './FormEditComment';
import { FaRegCommentAlt, FaEdit, FaTimes, FaRegStar } from 'react-icons/fa';
import imgUser from '../assets/images/user.png';

class Comments extends Component {
  state = {
    sortBy: 'voteScore',
    openModal: false,
    editComment: null
  };

  componentDidMount() {
    const { id } = this.props;
    this.props.dispatch(handleReceiveComments(id));
  }

  handleBtVote = (id, event) => {
    event.preventDefault();
    const data = { option: event.target.name };
    this.props.dispatch(handleVoteComment(id, data));
  };

  handleEdit = (e, id) => {
    e.preventDefault();
    this.setState(() => ({
      openModal: true,
      editComment: id
    }));
  };

  handleCloseModal = e => {
    this.setState(() => ({
      openModal: false
    }));
  };

  handleDelete = (e, id) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(handleDeleteComment(id));
    dispatch(handleUpdatePostCountComments(this.props.id, -1));
  };

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  sortBySelectedMethod(comments) {
    switch (this.state.sortBy) {
      case 'voteScore':
        return comments.sort((a, b) => b.voteScore - a.voteScore);
      case 'date':
        return comments.sort((a, b) => b.timestamp - a.timestamp);
      default:
        return comments;
    }
  }

  render() {
    const { sortBy, openModal, editComment } = this.state;
    const { comments, id } = this.props;

    const sortedComments =
      comments !== undefined && comments.length > 1
        ? this.sortBySelectedMethod(comments)
        : comments;

    return (
      <Fragment>
        <Modal open={openModal} onClose={this.handleCloseModal} center>
          <FormEditComment id={editComment} onClose={this.handleCloseModal} />
        </Modal>
        <div className="box-detail-comments">
          {comments.length >= 1 && (
            <div className="comment-order-box">
              <h3>
                <FaRegCommentAlt /> Comments
              </h3>
              <div>
                <span>Sort by: </span>
                <select value={sortBy} onChange={this.handleChange}>
                  <option value="voteScore">Vote Score</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
          )}
          <div className="list-comments">
            {sortedComments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment-user">
                  <img src={imgUser} alt="adfasd" />
                  <div className="comment-box">
                    <div className="comment-info">
                      <div className="comment-ifo-autor">
                        <h4>{comment.author}</h4>
                        <span>{formatDate(comment.timestamp)}</span>
                      </div>
                      <div className="box-control-comment">
                        <button>
                          <FaEdit
                            onClick={e => this.handleEdit(e, comment.id)}
                          />
                        </button>
                        <button onClick={e => this.handleDelete(e, comment.id)}>
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                    <div className="comment-text">
                      {comment.body}
                      <div className="controlVote">
                        <span>
                          <FaRegStar color="#FDBA00" />
                          {' ' + comment.voteScore + ' '}
                        </span>
                        <button
                          name="downVote"
                          onClick={event =>
                            this.handleBtVote(comment.id, event)
                          }
                          className="bt-vote bt-vote-left"
                        >
                          -
                        </button>
                        <button
                          name="upVote"
                          onClick={event =>
                            this.handleBtVote(comment.id, event)
                          }
                          className="bt-vote bt-vote-right"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <FormComment id={id} />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ comments }, props) {
  const { id } = props;
  return {
    id,
    comments: comments.items
  };
}

export default connect(mapStateToProps)(Comments);
