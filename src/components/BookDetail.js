import React from "react";

// REACT-REDUX
import { useSelector } from "react-redux";

// REACT-ROUTER-PARAMS
import { useParams, useHistory } from "react-router-dom";

// REACT STAR-RATING
import StarRatings from "react-star-ratings";

function BookDetail() {
  let { bookId } = useParams();
  let history = useHistory();

  const { booksData } = useSelector((state) => state.booksReducer);

  const detailBookData = booksData.filter((book) => book.id == bookId)[0];
  console.log(detailBookData, "detalhado");
  return (
    <div className="detail-book-section">
      <div className="detail-book-container">
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
            <p className="unfocus-text">
              {detailBookData.volumeInfo.publisher}
            </p>
            <p className="unfocus-text">
              Published on: {detailBookData.volumeInfo.publishedDate}
            </p>
            <p className="unfocus-text capitalize">
              Language:{" "}
              <span className="unfocus-text uppercase">
                {detailBookData.volumeInfo.language}
              </span>
            </p>
            <p className="unfocus-text">
              {detailBookData.volumeInfo.pageCount} Pages
            </p>
            <StarRatings
              rating={detailBookData.volumeInfo.averageRating}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="5px"
              starRatedColor="rgb(10, 0, 151)"
            />
            <div className="book-details-buttons-wrapper">
              {detailBookData.saleInfo.saleability == "FOR_SALE" ? (
                <button className="detail-book-buttons">
                  {detailBookData.saleInfo.listPrice.amount}{" "}
                  {detailBookData.saleInfo.listPrice.currencyCode}
                </button>
              ) : null}
              {detailBookData.volumeInfo.previewLink ? (
                <a
                  href={detailBookData.volumeInfo.previewLink}
                  className="detail-book-buttons"
                  target="_blank"
                >
                  Preview
                </a>
              ) : null}

              <button onClick={history.goBack} className="detail-book-buttons">
                Go Back
              </button>
            </div>
          </div>
        </div>
        <div className="book-description">
          <p className="book-description-text">
            {detailBookData.volumeInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
