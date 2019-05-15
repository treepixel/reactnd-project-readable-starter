import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT
} from '../actions/comments';

export default function comments(state = { items: [] }, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return { ...state, items: action.comments };
    case ADD_COMMENT:
      return { ...state, items: state.items.concat(action.comment) };
    case EDIT_COMMENT:
      return {
        ...state,
        items: [
          ...state.items.filter(comment => comment.id !== action.id),
          {
            ...state.items.find(comment => comment.id === action.id),
            timestamp: action.comment.timestamp,
            body: action.comment.body
          }
        ]
      };
    case VOTE_COMMENT:
      return {
        ...state,
        items: [
          ...state.items.filter(comment => comment.id !== action.id),
          {
            ...state.items.find(comment => comment.id === action.id),
            voteScore:
              state.items.find(comment => comment.id === action.id).voteScore +
              action.vote
          }
        ]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        items: state.items.filter(comment => comment.id !== action.id)
      };
    default:
      return state;
  }
}
