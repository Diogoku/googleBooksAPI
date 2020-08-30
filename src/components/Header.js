import React from "react";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// CSS
import "../css/header.css";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="header-section">
      <Link to="/" className="Link">
        <h2 className="header-title">
          Google Books <FontAwesomeIcon icon="book" />
        </h2>
      </Link>
    </div>
  );
}

export default Header;
