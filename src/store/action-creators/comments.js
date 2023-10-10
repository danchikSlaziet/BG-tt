import api from '../../utils/api';
import { actionTypes } from '../../utils/constants';

export const fetchComments = (id) => {
  return function(dispatch) {
      dispatch({type: actionTypes.FETCH_COMMENTS})
      api.getComments(id)
        .then(data => dispatch({type: actionTypes.FETCH_COMMENTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: actionTypes.FETCH_COMMENTS_ERROR, payload: `Ошибка стороннего сервиса (server error): ${error}`}))
  }
}