import {
  GET_CURRENT_BOOK
} from '../constants';

const initialState = {
  currentBook: 'null'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_BOOK:
      return {
        ...state, currentBook: action.payload
      };
    default:
      return state;
  }
}