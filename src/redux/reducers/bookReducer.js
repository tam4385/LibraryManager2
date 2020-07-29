import {
  SET_CURRENT_BOOK,
  GET_BOOKS
} from '../constants';

const initialState = {
  books: null,
  currentBook: 'null',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state, books: action.payload
      }
    case SET_CURRENT_BOOK:
      return {
        ...state, currentBook: action.payload
      };
    default:
      return state;
  }
};