import React from "react";

// COMPONENTS
import BookCard from "./BookCard";

function BooksList({ books }) {
  console.log(books, "books list");
  return (
    <div className="books-list-section">
      {books
        ? books.map((book, index) => {
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
          })
        : null}
    </div>
  );
}

export default BooksList;
