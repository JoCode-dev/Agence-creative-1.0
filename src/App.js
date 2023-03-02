import React from "react";

//Components
import { Navbar } from "./components";
import {
  Header,
  Agency,
  Quote,
  Portfolio,
  Testimonials,
  Footer,
} from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Agency />
      <Quote />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
