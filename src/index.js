import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Gaya global aplikasi
import App from "./App"; // Mengimpor komponen utama
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Jika kamu ingin mulai mengukur performa aplikasi, kirimkan hasilnya ke analytics
reportWebVitals();
