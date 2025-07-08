import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Dictionary />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Developed by{" "}
        <a
          href="https://github.com/Tania-Figueiredo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tania Figueiredo
        </a>
        . Open-sourced on{" "}
        <a
          href="https://github.com/Tania-Figueiredo/dictionary-react-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . Deployed on{" "}
        <a
          href="https://reactaddondictionary.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </footer>
  );
}
