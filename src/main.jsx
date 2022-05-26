import React from "react";
import ReactDOM from "react-dom/client";
import { CrowedFundingProvider } from "./context/CrowedFundingContext";
import { App } from "./App";
import "./index.css";
// import { MoralisProvider } from "react-moralis";

const serverUrl = "https://ggkno5dttr8v.usemoralis.com:2053/server";
const appId = "whpnXV4GV7jW7m4xJrnOC7IKs5AGtL5uZIGAgx4D";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <MoralisProvider appId={appId} serverUrl={serverUrl}>
  <CrowedFundingProvider>
    <App />
  </CrowedFundingProvider>
  // </MoralisProvider>
);
