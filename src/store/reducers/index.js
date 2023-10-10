import { postsReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';
import {combineReducers} from 'redux';

// пока один редюсер (combineReducers при расширении приложения)
export const rootReducer = combineReducers({
  postsReducer,
  commentsReducer
})