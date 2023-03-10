import React from "react";
import ReactDOM from "react-dom/client";
import { render } from 'react-dom'
window.React = React
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
