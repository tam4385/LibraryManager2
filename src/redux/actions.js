import {
  SET_CURRENT_BOOK, GET_BOOKS
} from './constants';

export const setCurrentBook = (book) => ({
    type: SET_CURRENT_BOOK,
    payload: book
});

export const getBooks = () => ({
  type: GET_BOOKS,
  apiPackage: {
    method: 'POST',
    parameters: ''
  }
});