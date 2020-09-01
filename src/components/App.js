import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

// REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./Header";
import Books from "./Books";
import BookDetail from "./BookDetail";

// CSS
import "../css/default.css";

// FONT AWESOME ICONS
import "../FontAwesomeIcons";

/*
          <Route exact path="/:bookId">
            <BookDetail />
          </Route>
*/

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
