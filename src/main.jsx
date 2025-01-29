import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
import "./index.css";

import { store, persistor } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* Wrap App with PersistGate to wait for rehydration */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
