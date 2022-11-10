import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: "442e85da-c261-4401-bcd0-7493fb3f4963",
  }),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LivepeerConfig client={livepeerClient}>
      <App />
    </LivepeerConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
