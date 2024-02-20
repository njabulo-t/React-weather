import React from "react";

import Weather from "./Weather";
import Footer from "./Footer";

import "./styles.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="conatiner">

        <Weather defaultCity="Shanghai"/>
      </div>
      <Footer />
    </div>
  );
}
