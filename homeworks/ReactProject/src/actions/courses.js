import { normalize } from 'normalizr';
import { COURSES_FETCHED, COURSE_CREATED } from '../types';
import { api } from '../api';
import { courseSchema } from '../schemas';

const coursesFetched = (data) => ({
  type: COURSES_FETCHED,
  data
}) 
const courseCreated = (data) => ({
  type: COURSE_CREATED,
  data
});

export const fetchCourses = () => dispatch =>  api.courses.fetchAll().then(courses => dispatch(coursesFetched(normalize(courses, [courseSchema]))));

export const createCourse = data => (dispatch) => api.courses.createCourse(data).then(course => dispatch(courseCreated(course)));