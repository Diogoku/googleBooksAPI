import React from "react";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

function BookCard(props) {
  return (
    <Link to={`/${props.bookId}`} className="book-card Link">
      <img src={props.image} alt="" className="book-card-image" />
      <div className="book-card-description">
        <p className="body-card-title">{props.title}</p>
        {props.author[0] ? (
          <p className="body-card-description-less">{props.author[0]}</p>
        ) : null}
        <p className="body-card-description-less">{props.published}</p>
      </div>
    </Link>
  );
}

export default BookCard;
