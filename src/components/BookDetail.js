import React from "react";

// REACT-REDUX
import { useSelector } from "react-redux";

// REACT-ROUTER-PARAMS
import { useParams, useHistory } from "react-router-dom";

// REACT STAR-RATING
import StarRatings from "react-star-ratings";

// FRAMER MOTION
import { motion } from "framer-motion";

function BookDetail() {
  let { bookId } = useParams();
  let history = useHistory();

  const { booksData } = useSelector((state) => state.booksReducer);

  if (!booksData) return null;

  const detailBookData = booksData.filter((book) => book.id == bookId)[0];
  return (
    <div className="detail-book-section">
      <div className="detail-book-container">
        <motion.div
          className="book-main-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <img src={detailBookData.volumeInfo.imageLinks.thumbnail} alt="" />
          </div>
          <div className="book-main-details-extension">
            <p className="book-title">
              {detailBookData.volumeInfo.title}
              {detailBookData.volumeInfo.subtitle
                ? ": " + detailBookData.volumeInfo.subtitle
                : null}
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
                <motion.button
                  className="detail-book-buttons"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {detailBookData.saleInfo.listPrice.amount}{" "}
                  {detailBookData.saleInfo.listPrice.currencyCode}
                </motion.button>
              ) : null}
              {detailBookData.volumeInfo.previewLink ? (
                <motion.a
                  href={detailBookData.volumeInfo.previewLink}
                  className="detail-book-buttons"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Preview
                </motion.a>
              ) : null}

              <motion.button
                onClick={history.goBack}
                className="detail-book-buttons"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                Go Back
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="book-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="book-description-text">
            {detailBookData.volumeInfo.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default BookDetail;
