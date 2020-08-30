import { GET_BOOKS } from "../actions/type";

const initialState = { booksData: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, booksData: action.payload };
    default:
      return state;
  }
};
