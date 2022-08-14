import React from "react";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, MoveOut, Sticky} from "react-scroll-motion";

function App() {
  //const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <div id="website-container">
      <ScrollContainer>
      <NavBar />
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveOut(0, -200))}>
            <Landing />
          </Animator>
        </ScrollPage>
        <div className='divider' />
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <About />
          </Animator>
        </ScrollPage>
        <div className='divider' />
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Skills />
          </Animator>
        </ScrollPage>
        <div className='divider' />
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Projects />
          </Animator>
        </ScrollPage>
        <div className='divider' />
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Footer />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}


export default App;
