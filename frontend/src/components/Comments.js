import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveComments } from '../actions/comments';
import FormComment from './FormComment';
import CommentList from './CommentList';
import { Box } from '../styles';

class Comments extends Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.dispatch(handleReceiveComments(id));
  }

  render() {
    const { comments, id } = this.props;
    return (
      <Box>
        <CommentList comments={comments} />
        <FormComment id={id} />
      </Box>
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
