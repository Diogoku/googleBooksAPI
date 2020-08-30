import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

// COMPONENTS
import Header from "./Header";
import Books from "./Books";

// CSS
import "../css/default.css";

// FONT AWESOME ICONS
import "../FontAwesomeIcons";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Books />
    </Provider>
  );
}

export default App;
