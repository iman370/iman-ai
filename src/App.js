import React from "react";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, MoveOut, Sticky, StickyIn, FadeIn, ZoomIn} from "react-scroll-motion";

function App() {

  return (
    <div id="website-container">
      <NavBar />
      <ScrollContainer>
        <ScrollPage>
          <div className="section">
          <Animator animation={batch(Sticky(), MoveOut(0, -200))}>
            <Landing />
          </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
            <span></span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <div className="section">
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <About />
          </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn())}>
            <span></span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <div className="section">
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Skills />
          </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn())}>
            <span></span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <div className="section">
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Projects />
          </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn())}>
            <span></span>
          </Animator>
        </ScrollPage>
        <Footer />
      </ScrollContainer>
    </div>
  );
}


export default App;
