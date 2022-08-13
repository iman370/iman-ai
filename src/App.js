import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="website-container">
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
