import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";

import "./styles.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}
