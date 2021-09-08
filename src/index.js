import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";

import GlobalStyles from "./globalStyles.ts";
import store from "./redux/store.ts";
import "normalize.css";

import { BrowserRouter as Router } from "react-router-dom";
import { PaginationContextProvider } from "./contexts";

ReactDOM.render(
   <Router>
      <Provider store={store}>
         <GlobalStyles />

         <PaginationContextProvider>
            <App />
         </PaginationContextProvider>
      </Provider>
   </Router>,
   document.getElementById("root")
);
