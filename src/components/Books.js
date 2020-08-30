import React from "react";

// REACT-REDUX
import { useSelector } from "react-redux";

// COMPONENTS
import BooksSearch from "./BooksSearch";
import BooksList from "./BooksList";

// CSS
import "../css/books.css";

function Books() {
  const { booksData } = useSelector((state) => state.booksReducer);

  return (
    <div className="books-section">
      <BooksSearch />
      <BooksList books={booksData} />
    </div>
  );
}

export default Books;
