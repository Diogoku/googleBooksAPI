import React from "react";

// COMPONENTS
import BookCard from "./BookCard";

function BooksList({ books }) {
  if (books === null) return null;

  console.log(books, "ola2");
  return (
    <div className="books-list-section">
      {books.map((book, index) => {
        return (
          <BookCard
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
            bookId={book.id}
          />
        );
      })}
    </div>
  );
}

export default BooksList;
