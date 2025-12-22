import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { JobProvider } from "./context/JobContext";
import { ApplicationProvider } from "./context/ApplicationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobProvider>
      <ApplicationProvider>
        <App />
      </ApplicationProvider>
    </JobProvider>
  </React.StrictMode>
);
