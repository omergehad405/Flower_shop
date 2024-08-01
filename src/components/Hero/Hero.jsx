import React from "react";
import "./Hero.scss";
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="info">
          <h1>fresh flower</h1>
          <span>natural & beautiful flowers</span>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Beatae
            <br />
            Laborum Ut Minus Corrupti Dolorum Dolore Assumenda Iste <br />
            Voluptate Dolorem Pariatur.
          </p>
          <button>
            <a href="#products">shop now</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
