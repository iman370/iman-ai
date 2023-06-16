import React from "react";

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import MiniAboutMe from "./components/MiniAboutMe";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Projects
import Tictactoe from "./projects/tictactoe/tictactoe";
import DigitRecogniser from "./projects/LiveDigitRecogniser/DigitRecogniser";

import {ScrollContainer} from "react-scroll-motion";

const MainPage = () => {
  return (
    <div id="website-container">
      <NavBar />
      <ScrollContainer>
        <Landing />
        <MiniAboutMe />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ScrollContainer>
    </div>
  );
}

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/tictactoe", element: <Tictactoe /> },
    { path: "/digit-recogniser", element: <DigitRecogniser /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;