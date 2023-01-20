import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="#" target="_blank">
            Sab Jan
          </a>{" "}
          and is <a href="">open-sourced on GitHub</a> and{" "}
          <a href="#">hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}
