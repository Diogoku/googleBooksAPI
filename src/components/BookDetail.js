import React from "react";

// REACT-REDUX
import { useSelector } from "react-redux";

// REACT-ROUTER-PARAMS
import { useParams, useHistory } from "react-router-dom";

function BookDetail() {
  let { bookId } = useParams();
  let history = useHistory();

  const { booksData } = useSelector((state) => state.booksReducer);

  const detailBookData = booksData.filter((book) => book.id == bookId)[0];

  return (
    <div>
      Book Card Detail {bookId}
      <button onClick={history.goBack}>Go Back</button>
    </div>
  );
}

export default BookDetail;
