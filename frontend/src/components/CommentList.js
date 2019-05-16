import React, { Component } from 'react';
import { sortBySelectedMethod } from '../utils/helpers';
import { FaRegCommentAlt } from 'react-icons/fa';
import CommentItem from './CommentItem';
import { ListComment, SelectSort } from '../styles';

class CommentList extends Component {
  state = {
    sortBy: 'voteScore'
  };

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  render() {
    const { comments } = this.props;
    const { sortBy } = this.state;

    const sortedComments =
      comments !== undefined && comments.length > 1
        ? sortBySelectedMethod(sortBy, comments)
        : comments;

    return (
      <ListComment>
        {comments.length >= 1 && (
          <div className="comment-order-box">
            <h3>
              <FaRegCommentAlt /> Comments
            </h3>
            <SelectSort>
              <span>Sort by: </span>
              <select value={sortBy} onChange={this.handleChange}>
                <option value="voteScore">Vote Score</option>
                <option value="date">Date</option>
              </select>
            </SelectSort>
          </div>
        )}
        <div className="list-comments">
          {sortedComments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </ListComment>
    );
  }
}

export default CommentList;
