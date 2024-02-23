import React from "react";

import "./styles.css";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p>
          This project was coded by  {""}
          <a href="https://github.com/njabulo-t" target="_blank">
            Njabulo
          </a>{" "}
          and is {""}
          <a href="https://github.com/njabulo-t/React-weather" target="_blank">
            open sourced on GitHub
          </a>{" "}
          and {""}
          <a href="https://reactweather01.netlify.app/" target="_blank">
            hosted in Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
