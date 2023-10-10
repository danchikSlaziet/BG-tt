import api from '../../utils/api';
import { actionTypes } from '../../utils/constants';

export const fetchPosts = () => {
  return function(dispatch) {
      dispatch({type: actionTypes.FETCH_POSTS})
      api.getPosts()
        .then(data => dispatch({type: actionTypes.FETCH_POSTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: actionTypes.FETCH_POSTS_ERROR, payload: `Ошибка стороннего сервиса (server error): ${error}`}))
  }
}

export const addPost = (payload) => {
  return {type: actionTypes.ADD_POST, payload: payload}
}