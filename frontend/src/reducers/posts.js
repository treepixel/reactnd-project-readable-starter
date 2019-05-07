import { RECEIVE_POSTS, RECEIVE_POSTS_BY_CATEGORY } from '../actions/posts';

export default function posts(state = { items: [] }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return { ...state, items: [...action.posts] };
    case RECEIVE_POSTS_BY_CATEGORY:
      return { items: [...action.posts] };
    default:
      return state;
  }
}
