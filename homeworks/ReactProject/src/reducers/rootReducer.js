import { combineReducers } from 'redux';
import { user } from './userReducer'
import { courses } from './coursesReducer'
import { authors } from './authorReducer'


export const rootReducer = combineReducers({
  user,
  courses,
  authors
})