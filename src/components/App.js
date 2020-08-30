import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

// COMPONENTS
import Header from "./Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      GOOGLE BOOKS API
    </Provider>
  );
}

export default App;
