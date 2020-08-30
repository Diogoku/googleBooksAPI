import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

// COMPONENTS
import Header from "./Header";

// CSS
import "../css/default.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      GOOGLE BOOKS API
    </Provider>
  );
}

export default App;
