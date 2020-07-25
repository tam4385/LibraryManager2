import {
  GET_CURRENT_BOOK
} from './constants';

export const getCurrentBook = (book) => async dispatch => {
  type: GET_CURRENT_BOOK;
  payload: book;
};