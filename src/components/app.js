import React from "react";
import Header from "./components/Header";  // Pastikan ini sudah ada
import About from "./components/About";    // Pastikan ini sudah ada
import Projects from "./components/Projects"; // Pastikan ini sudah ada
import Footer from "./components/Footer";   // Pastikan ini sudah ada
import "./App.css";  // Pastikan file CSS ada

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
