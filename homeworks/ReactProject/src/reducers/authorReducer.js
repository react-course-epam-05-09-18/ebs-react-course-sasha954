import { AUTHORS_FETCHED, AUTHOR_CHOSEN } from '../types';

export const authors = (state = {}, action = {}) => {
  switch(action.type) {
    case AUTHORS_FETCHED:
      return { ...state, ...action.data.entities.authors };
    case AUTHOR_CHOSEN:
      return state;
    default:
      return state;
  }
}