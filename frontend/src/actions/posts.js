import { getPostsByCategory } from '../api/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function receivePostsByCategory(category) {
  return dispatch => {
    return getPostsByCategory(category).then(posts => {
      dispatch(receivePosts(posts));
    });
  };
}
