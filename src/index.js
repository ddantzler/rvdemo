import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.css";
import App from "./App";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import AppStore from "./stores/store.js";

configure({ enforceActions: true });

// Initialize mobx data store
const store = new AppStore();

// Provide the store to the app and render into the root div
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
