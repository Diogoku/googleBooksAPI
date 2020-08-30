import React, { useEffect, useState } from "react";

// AXIOS
import axios from "axios";

function Books() {
  const [booksData, setBooksData] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=search+terms`
      );
      console.log(response);
      setBooksData(response);
    };

    fetchBooks();
  }, []);

  return <div>Books Component</div>;
}

export default Books;
