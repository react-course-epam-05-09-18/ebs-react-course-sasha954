import { normalize } from 'normalizr';
import { AUTHORS_FETCHED, AUTHOR_CHOSEN } from '../types';
import { api } from '../api';
import { authorSchema } from '../schemas';

const authorsFetched = data => {
  return { 
    type: AUTHORS_FETCHED,
    data
  }
};

const authorChosen = (data) => {
  return {
    type: AUTHOR_CHOSEN,
    data
  }
};

export const fetchAuthors = () => (dispatch) => api.authors.fetchAll().then(authors => dispatch(authorsFetched(normalize(authors, [authorSchema]))));

export const chooseAuthor = (data) => (dispatch) => {
  return dispatch(authorChosen(data.target.id));
}
