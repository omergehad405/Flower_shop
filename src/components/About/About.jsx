import React from "react";
import "./About.scss";
import Button from "../Button/Button";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about </span>Us
      </h1>

      <div className="container">
        <div className="video_container">
          <video src="/images/about-vid.mp4" loop autoPlay muted />
          <p>best flower sellers</p>
        </div>
        <div className="info">
          <h1>why choose us?</h1>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Rem Cumque
            Sit Nemo Pariatur Corporis Perspiciatis Aspernatur A Ullam
            Repudiandae Autem Asperiores Quibusdam Omnis Commodi Alias Repellat
            Illum, Unde Optio Temporibus.
          </p>
          <p>
            Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit.
            Accusantium Ea Est Commodi Incidunt Magni Quia Molestias
            Perspiciatis, Unde Repudiandae Quidem.
          </p>
          <Button text="learn more" />
        </div>
      </div>
    </section>
  );
}

export default About;
