import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddComment } from '../actions/comments';
import { handleUpdatePostCountComments } from '../actions/shared';
import { generateUID } from '../utils/helpers';
import { FaRegCommentAlt } from 'react-icons/fa';

class FormComment extends Component {
  state = {
    author: '',
    comment: ''
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
      [name]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    let comment = {
      id: generateUID(),
      parentId: this.props.id,
      timestamp: Date.now(),
      author: this.state.author,
      body: this.state.comment
    };

    this.props.dispatch(handleAddComment(comment));
    this.props.dispatch(handleUpdatePostCountComments(comment.parentId, 1));

    this.clearForm();
  };

  clearForm = () => {
    this.setState(() => ({
      author: '',
      comment: ''
    }));
  };

  render() {
    const { author, comment } = this.state;
    return (
      <div>
        <h3>
          <FaRegCommentAlt /> New Comment
        </h3>
        <form className="formAddNewComment" onSubmit={this.handleSubmit}>
          <input
            name="author"
            type="text"
            placeholder="User"
            value={author}
            onChange={this.handleChange}
          />
          <textarea
            name="comment"
            placeholder="Write here your comment"
            value={comment}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit" disabled={author === '' || comment === ''}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(FormComment);
