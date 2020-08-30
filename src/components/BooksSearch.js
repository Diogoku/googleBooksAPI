import React, { useEffect, useState } from "react";

// REACT-REDUX
import { useDispatch } from "react-redux";
import { getBooks } from "../actions/booksActionsCreator";

// AXIOS
import axios from "axios";

function BooksSearch() {
  const [bookFilter, setBookFilter] = useState("search+terms");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooksData = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=search+terms`
      );

      if (response.status == 200) {
        dispatch(getBooks(response.data.items));
        setErrorMessage("");
      } else setErrorMessage("The google books API is currently unavailable");
    };
    fetchBooksData();
  }, []);

  return (
    <div>
      {errorMessage === "" ? null : <p>{errorMessage}</p>}
      <form className="search-book-form">
        <h3>Search Book</h3>
        <label htmlFor="book-tittle" className="search-book-label">
          By Tittle
        </label>
        <input
          type="text"
          id="book-tittle"
          name="bookTitle"
          className="search-book-input"
        />
        <input type="submit" className="search-books-submit" value="Search" />
      </form>
    </div>
  );
}

export default BooksSearch;
