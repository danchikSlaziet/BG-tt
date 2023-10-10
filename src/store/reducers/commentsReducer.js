import { actionTypes } from '../../utils/constants';

const initialState = {
  comments: [],
  loading: false,
  error: null,
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMMENTS:
      return {...state, loading: true, error: null, comments: [] }
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return {...state, loading: false, error: null, comments: action.payload }
    case actionTypes.FETCH_COMMENTS_ERROR:
      return {...state, loading: false, error: action.payload, comments: [] }
    default:
      return state
  }
}