import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./contexts/AppContext";
// Step 2: Import the Provider component from react-redux
import { Provider } from "react-redux";
// Import your Redux store
import store from "./store"; // Adjust the path as necessary

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Step 4: Wrap App with Provider and pass the store */}
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();