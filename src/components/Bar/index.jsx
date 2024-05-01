import React from "react";

import "./styles.css";

export const Bar = () => {

  return (
    <div
      className="container-bar"
    >
      <div>
        <a
          className="link__bar"
          href="https://linkedin.com/in/🏳️‍🌈-fabrício-oliveira-lopes-b713892bb"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div id="border"></div>
      <div>
        <a
          className="link__bar"
          href="https://github.com/Fabrioco"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
