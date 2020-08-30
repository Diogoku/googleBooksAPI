import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return <Provider store={store}>GOOGLE BOOKS API</Provider>;
}

export default App;
