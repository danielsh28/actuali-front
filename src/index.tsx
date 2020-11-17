import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import configureStore from "./store/configureStore";
import App from "./App";

ReactDOM.render(
<CookiesProvider>
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>
</CookiesProvider>,
  document.getElementById("root")
);
