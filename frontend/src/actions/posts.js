import {
  getPostsByCategory,
  savePost,
  updatePost,
  deletePost,
  votePostAPI
} from '../api/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const UPDATE_POST_COUNT_COMMENTS = 'UPDATE_POST_COUNT_COMMENTS';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function receivePostsByCategory(category) {
  return dispatch => {
    return getPostsByCategory(category).then(posts => {
      dispatch(receivePostsCategory(posts));
    });
  };
}

export function receivePostsCategory(posts) {
  return {
    type: RECEIVE_POSTS_BY_CATEGORY,
    posts
  };
}

export function handleAddPost(post) {
  return dispatch => {
    return savePost(post).then(post => dispatch(addPost(post)));
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function handleEditPost(id, post) {
  return dispatch => {
    return updatePost(id, post).then(post => dispatch(editPost(id, post)));
  };
}

function editPost(id, post) {
  return {
    type: EDIT_POST,
    id,
    post
  };
}

export function handleVotePost(id, data) {
  const vote = data.option === 'upVote' ? 1 : -1;
  return dispatch => {
    dispatch(votePost(id, vote));
    return votePostAPI(id, data).catch(e => {
      console.log('Error in handleVotePost: ', e);
      dispatch(votePost(id, data.option === 'upVote' ? -1 : 1));
      alert('The was an error rating post. Try again');
    });
  };
}

function votePost(id, vote) {
  return {
    type: VOTE_POST,
    id,
    vote
  };
}

export function handleDeletePost(id) {
  return dispatch => {
    deletePost(id).then(() => dispatch(removePost(id)));
  };
}

function removePost(id) {
  return {
    type: DELETE_POST,
    id
  };
}

export function updatePostCountComments(id, value) {
  return {
    type: UPDATE_POST_COUNT_COMMENTS,
    id,
    value
  };
}
