import { getPostsByCategory } from '../api/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY';

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
