import React from "react";

// REACT-ROUTER-PARAMS
import { useParams, useHistory } from "react-router-dom";

function BookDetail() {
  let { bookId } = useParams();
  console.log(bookId, "id do livro");
  return <div>Book Card Detail {bookId}</div>;
}

export default BookDetail;
