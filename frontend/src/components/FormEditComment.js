import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaRegCommentAlt } from 'react-icons/fa';
import { handleEditComment } from '../actions/comments';

class FormEditComment extends Component {
  state = {
    comment: ''
  };

  componentDidMount() {
    const { comment } = this.props;
    this.setState(() => ({ comment: comment.body }));
  }

  handleChange = e => {
    const value = e.target.value;

    this.setState(() => ({
      comment: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.comment;
    let comment = {
      timestamp: Date.now(),
      body: this.state.comment
    };

    this.props.dispatch(handleEditComment(id, comment));

    this.props.onClose();
  };

  render() {
    const { comment } = this.state;
    return (
      <div>
        <h3>
          <FaRegCommentAlt /> Edit Comment
        </h3>
        <form className="formAddNewComment" onSubmit={this.handleSubmit}>
          <textarea
            name="comment"
            className="txtEditComment"
            placeholder="Write here your comment"
            value={comment}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit" disabled={comment === ''}>
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ comments }, props) {
  const { id, onClose } = props;
  const comment = comments.items.find(comment => comment.id === id);

  return {
    comment,
    onClose
  };
}

export default connect(mapStateToProps)(FormEditComment);
