import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions/comments';

export default function comments(state = { items: [] }, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return { ...state, items: action.comments };
    case ADD_COMMENT:
      return { ...state, items: state.items.concat(action.comment) };
    case DELETE_COMMENT:
      return {
        ...state,
        items: state.items.filter(comment => comment.id !== action.id)
      };
    default:
      return state;
  }
}
