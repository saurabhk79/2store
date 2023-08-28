import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MyProvider>
  </BrowserRouter>
);
