import { getInitialData } from '../api/api';
import { receiveCategories } from './categories';
import { receivePosts, updatePostCountComments } from './posts';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_USER = 'tylermcginnis';

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ categories, posts }) => {
      dispatch(receiveCategories(categories));
      dispatch(receivePosts(posts));
      dispatch(setAuthedUser(AUTHED_USER));
      dispatch(hideLoading());
    });
  };
}

export function handleUpdatePostCountComments(id, value) {
  return dispatch => dispatch(updatePostCountComments(id, value));
}
