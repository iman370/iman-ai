import React from "react";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div id="website-container">
      <ScrollContainer>
      <NavBar />
        <Animator animation={batch(Sticky(), MoveOut(0, -200))}>
          <Landing />
        </Animator>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveIn(-1000, 0))}>
            <About />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <Projects />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <Footer />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}


export default App;
