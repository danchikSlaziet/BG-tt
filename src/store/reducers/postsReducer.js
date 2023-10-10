import { actionTypes } from '../../utils/constants';

const initialState = {
  posts: [],
  loading: false,
  error: null,
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {...state, loading: true, error: null, posts: [] }
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {...state, loading: false, error: null, posts: action.payload }
    case actionTypes.FETCH_POSTS_ERROR:
      return {...state, loading: false, error: action.payload, posts: [] }
    case actionTypes.ADD_POST:
      return {...state, loading: false, error: null, posts: [...state.posts, action.payload] }
    default:
      return state
  }
}