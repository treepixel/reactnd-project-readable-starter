import { RECEIVE_CATEGORIES } from '../actions/categories';

export default function categories(state = { items: [] }, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return { ...state, items: [...action.categories] };
    default:
      return state;
  }
}
