import React from "react";

// CSS
import "../css/header.css";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="header-section">
      <h2>
        Google Books API <FontAwesomeIcon icon="book" />
      </h2>
    </div>
  );
}

export default Header;
