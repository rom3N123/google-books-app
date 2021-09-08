import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";

import GlobalStyles from "./globalStyles.ts";
import store from "./redux/store.ts";
import "normalize.css";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
   <Router>
      <Provider store={store}>
         <GlobalStyles />

         <App />
      </Provider>
   </Router>,
   document.getElementById("root")
);
