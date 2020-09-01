import React from "react";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// FRAMER MOTION
import { motion } from "framer-motion";

function BookCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <Link to={`/googleBooksAPI/${props.bookId}`} className="book-card Link">
        <img src={props.image} alt="" className="book-card-image" />
        <div className="book-card-description">
          <p className="body-card-title">{props.title}</p>
          {props.author[0] ? (
            <p className="body-card-description-less">{props.author[0]}</p>
          ) : null}
          <p className="body-card-description-less">{props.published}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default BookCard;
