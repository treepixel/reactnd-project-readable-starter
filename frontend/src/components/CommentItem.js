import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';
import imgUser from '../assets/images/user.png';
import { FaRegStar } from 'react-icons/fa';
import { handleVoteComment, handleDeleteComment } from '../actions/comments';
import { handleUpdatePostCountComments } from '../actions/shared';
import Modal from 'react-responsive-modal';
import FormEditComment from './FormEditComment';
import ButtonIcon from './ButtonIcon';
import { Comment, CommentInfo, ControlRate } from '../styles';

class CommentItem extends Component {
  state = {
    openModal: false
  };

  handleBtVote = (id, option) => {
    const data = { option };
    this.props.dispatch(handleVoteComment(id, data));
  };

  handleEdit = id => {
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

  handleDelete = id => {
    const { dispatch, comment } = this.props;

    dispatch(handleDeleteComment(id));
    dispatch(handleUpdatePostCountComments(comment.parentId, -1));
  };

  render() {
    const { comment } = this.props;
    const { openModal } = this.state;
    return (
      <Comment>
        <Modal open={openModal} onClose={this.handleCloseModal} center>
          <FormEditComment id={comment.id} onClose={this.handleCloseModal} />
        </Modal>
        <div className="comment-user-avatar">
          <img src={imgUser} alt={comment.author} />
        </div>
        <div className="comment-box">
          <CommentInfo>
            <div>
              <h4>{comment.author}</h4>
              <span>{formatDate(comment.timestamp)}</span>
            </div>
            <div>
              <ButtonIcon
                icon="FaEdit"
                action={() => this.handleEdit(comment.id)}
                type="small invert"
              />
              <ButtonIcon
                icon="FaTimes"
                action={() => this.handleDelete(comment.id)}
                type="small invert"
              />
            </div>
          </CommentInfo>
          <div className="comment-text">
            {comment.body}
            <ControlRate>
              <span>
                <FaRegStar color="#FDBA00" />
                {' ' + comment.voteScore + ' '}
              </span>

              <ButtonIcon
                action={() => this.handleBtVote(comment.id, 'downVote')}
                icon="FaMinus"
                type="outline left"
              />
              <ButtonIcon
                action={() => this.handleBtVote(comment.id, 'upVote')}
                icon="FaPlus"
                type="outline right"
              />
            </ControlRate>
          </div>
        </div>
      </Comment>
    );
  }
}

export default connect()(CommentItem);
