import { COURSES_FETCHED, COURSE_CREATED } from '../types';

export const courses = (state = {}, action = {}) => {
  switch(action.type) {
    case COURSES_FETCHED: 
      return { ...state, ...action.data.entities.courses };      
    case COURSE_CREATED:
      
      return { ...state, courses: [...state.courses, action.course]}
    default:
      return state;
  }
}