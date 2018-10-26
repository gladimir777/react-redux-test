import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import store from "../src/redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Product />
        </div>
      </Provider>
    );
  }
}

export default App;
