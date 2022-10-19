import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore/store";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
