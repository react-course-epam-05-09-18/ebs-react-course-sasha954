import { createSelector } from 'reselect';

export const courseSelector = state => state.courses;

export const allCoursesSelector = createSelector(courseSelector, courseHash => Object.values(courseHash));
