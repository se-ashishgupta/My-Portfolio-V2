import React from "react";
import ReactDOM from "react-dom/client";

import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import { AppContext } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContext>
          <App />
        </AppContext>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
