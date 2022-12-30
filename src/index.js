import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const foot = ReactDOM.createRoot(document.getElementById("footer"))
foot.render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
)