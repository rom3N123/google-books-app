import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyles from "./globalStyles";
import store from "./redux/store";

ReactDOM.render(
   <Provider store={store}>
      <GlobalStyles />

      <App />
   </Provider>,
   document.getElementById("root")
);
