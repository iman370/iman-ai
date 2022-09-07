import React from "react";

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {ScrollContainer} from "react-scroll-motion";

const MainPage = () => {
  return (
    <div id="website-container">
      <NavBar />
      <ScrollContainer>
        <Landing />
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
