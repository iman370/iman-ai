import React from "react";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {ScrollContainer} from "react-scroll-motion";

function App() {

  return (
    <div id="website-container">
      <NavBar />
      <ScrollContainer>
        <Landing />
        <div className="divider-large" />
        <About />
        <div className="divider-large" />
        <Skills />
        <div className="divider-large" />
        <Projects />
        <div className="divider-large" />
      </ScrollContainer>
      <div className="divider-large" />
      <Footer />
    </div>
  );
}


export default App;
