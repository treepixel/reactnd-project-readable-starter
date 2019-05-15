import {
  getCommentsByPost,
  saveComment,
  voteCommentAPI,
  deleteComment,
  updateCommentAPI
} from '../api/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export function handleReceiveComments(id) {
  return dispatch => {
    return getCommentsByPost(id).then(comments => {
      dispatch(receiveComments(comments));
    });
  };
}

function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

export function handleAddComment(comment) {
  return dispatch => {
    dispatch(showLoading());
    return saveComment(comment)
      .then(comment => dispatch(addComment(comment)))
      .then(() => dispatch(hideLoading()));
  };
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function handleEditComment(id, comment) {
  return dispatch => {
    return updateCommentAPI(id, comment).then(comment =>
      dispatch(editComment(id, comment))
    );
  };
}

function editComment(id, comment) {
  return {
    type: EDIT_COMMENT,
    id,
    comment
  };
}

export function handleVoteComment(id, data) {
  const vote = data.option === 'upVote' ? 1 : -1;
  return dispatch => {
    dispatch(voteComment(id, vote));
    return voteCommentAPI(id, data).catch(e => {
      console.log('Error in handleVoteComment: ', e);
      dispatch(voteComment(id, data.option === 'upVote' ? -1 : 1));
      alert('The was an error rating comment. Try again');
    });
  };
}

function voteComment(id, vote) {
  return {
    type: VOTE_COMMENT,
    id,
    vote
  };
}

export function handleDeleteComment(id) {
  return dispatch => {
    deleteComment(id).then(() => dispatch(removeComment(id)));
  };
}

function removeComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  };
}
