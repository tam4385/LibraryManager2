import {
  SET_CURRENT_BOOK
} from './constants';

export const setCurrentBook = (book) => ({
    type: SET_CURRENT_BOOK,
    payload: book
});