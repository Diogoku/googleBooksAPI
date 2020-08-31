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
  console.log(detailBookData, "detalhado");
  return (
    <div className="detail-book-section">
      <div className="book-main-details">
        <div>
          <img src={detailBookData.volumeInfo.imageLinks.thumbnail} alt="" />
        </div>
        <div className="book-main-details-extension">
          <p className="book-title">
            {detailBookData.volumeInfo.title}:{" "}
            {detailBookData.volumeInfo.subtitle}
          </p>
          {detailBookData.volumeInfo.authors
            ? detailBookData.volumeInfo.authors.map((author) => {
                return <p className="book-author">{author}</p>;
              })
            : null}
          <p>{detailBookData.volumeInfo.publisher}</p>
          <p>Published on: {detailBookData.volumeInfo.publishedDate}</p>
          <p>{detailBookData.volumeInfo.pageCount} Pages</p>
          <p>{detailBookData.volumeInfo.averageRating}</p>
        </div>
      </div>
      <div className="book-description">
        <p>{detailBookData.volumeInfo.description}</p>
      </div>

      <button onClick={history.goBack}>Go Back</button>
    </div>
  );
}

export default BookDetail;
