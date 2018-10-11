import { createSelector } from 'reselect';

export const authorSelector = state => state.authors;

export const allAuthorsSelector = createSelector(authorSelector, authorHash => Object.values(authorHash).map(element => ({...element, clicked: false, selected: false})));