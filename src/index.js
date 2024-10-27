"use strict";

import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import LoaderReduser from "./redux/slice/loaderSlice.js";
import SwapiDataReducer from "./redux/slice/swapiDataSlice.js";
import ClearReducer from "./redux/slice/clearSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import App from "./App.js";
import "./styles.css";

const rootElement = document.getElementById("main");
const root = ReactDom.createRoot(rootElement);

const store = configureStore({
  reducer: {
    swapiData: SwapiDataReducer,
    isLoading: LoaderReduser,
    clear: ClearReducer,
  },
  preloadedState: {
    swapiData: "",
    isLoading: false,
    clear: false,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
