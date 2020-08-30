import React from "react";

function BookCard(props) {
  console.log(props);
  return (
    <div className="book-card">
      <img src={props.image} alt="" className="book-card-image" />
      <div className="book-card-description">
        <p>{props.title}</p>
        {props.author[0] ? (
          <p className="body-card-description-less">{props.author[0]}</p>
        ) : null}
        <p className="body-card-description-less">{props.published}</p>
      </div>
    </div>
  );
}

export default BookCard;
