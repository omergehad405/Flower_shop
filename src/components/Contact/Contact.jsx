import React, { useState } from "react";
import "./Contact.scss";
import Button from "../Button/Button";

function Contact() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>contact </span>Us
      </h1>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Number" />
          <textarea placeholder="Message" />
          <Button text="send Message" />
        </form>
        <img src="/images/contact-img.svg" />
      </div>
    </section>
  );
}

export default Contact;
