import { getCommentsByPost, saveComment, deleteComment } from '../api/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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
