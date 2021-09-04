import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import GlobalStyles from "./globalStyles";
import store from "./redux/store";
import "normalize.css";

ReactDOM.render(
   <Provider store={store}>
      <GlobalStyles />

      <App />
   </Provider>,
   document.getElementById("root")
);
