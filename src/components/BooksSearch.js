import React, { useEffect, useState } from "react";

// REACT-REDUX
import { useDispatch } from "react-redux";
import { getBooks } from "../actions/booksActionsCreator";

// REACT-HOOK-FORMS
import { useForm } from "react-hook-form";

// AXIOS
import axios from "axios";

function BooksSearch() {
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const fetchBooksData = async (data) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${data.bookTittle}`
    );

    if (response.status == 200) {
      dispatch(getBooks(response.data.items));
      setErrorMessage("");
    } else setErrorMessage("The google books API is currently unavailable");
  };

  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      {errorMessage === "" ? null : <p>{errorMessage}</p>}
      <form
        className="search-book-form"
        onSubmit={handleSubmit(fetchBooksData)}
      >
        <h3>Search Book</h3>
        <label htmlFor="book-tittle" className="search-book-label">
          By Tittle
        </label>
        <input
          type="text"
          id="book-tittle"
          name="bookTittle"
          className="search-book-input"
          ref={register({ required: true })}
        />
        {errors.bookTittle && <span>This field is required *</span>}
        <input type="submit" className="search-books-submit" value="Search" />
      </form>
    </div>
  );
}

export default BooksSearch;
