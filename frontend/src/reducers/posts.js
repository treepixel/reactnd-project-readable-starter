import {
  RECEIVE_POSTS,
  RECEIVE_POSTS_BY_CATEGORY,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  VOTE_POST,
  UPDATE_POST_COUNT_COMMENTS
} from '../actions/posts';

export default function posts(state = { items: [] }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return { ...state, items: [...action.posts] };
    case RECEIVE_POSTS_BY_CATEGORY:
      return { items: [...action.posts] };
    case ADD_POST:
      return { ...state, items: state.items.concat(action.post) };
    case EDIT_POST:
      return {
        ...state,
        items: [
          ...state.items.filter(post => post.id !== action.id),
          {
            ...state.items.find(post => post.id === action.id),
            title: action.post.title,
            body: action.post.body
          }
        ]
      };
    case VOTE_POST:
      return {
        ...state,
        items: [
          ...state.items.filter(post => post.id !== action.id),
          {
            ...state.items.find(post => post.id === action.id),
            voteScore:
              state.items.find(post => post.id === action.id).voteScore +
              action.vote
          }
        ]
      };
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter(post => post.id !== action.id)
      };
    case UPDATE_POST_COUNT_COMMENTS:
      return {
        ...state,
        items: [
          ...state.items.filter(post => post.id !== action.id),
          {
            ...state.items.find(post => post.id === action.id),
            commentCount:
              state.items.find(post => post.id === action.id).commentCount +
              action.value
          }
        ]
      };
    default:
      return state;
  }
}
