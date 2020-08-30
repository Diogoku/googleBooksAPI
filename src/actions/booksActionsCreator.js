import { GET_BOOKS } from "./type";

// BOOKS ACTIONS CREATOR

export const getBooks = (booksData) => {
  return {
    type: GET_BOOKS,
    payload: booksData,
  };
};
