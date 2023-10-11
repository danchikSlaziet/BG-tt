import { postsReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  postsReducer,
  commentsReducer
})