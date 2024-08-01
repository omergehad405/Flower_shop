import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Fetures from "./components/Fetures/Fetures";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Fetures />
      <Products />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
