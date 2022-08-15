import React from 'react';
import { Animator, ScrollPage, batch, FadeIn, Move, Sticky } from "react-scroll-motion";

function Projects() {

  const project_stack = [
    "klabber",
    "Cat and Dog Image Classifier",
    "Book Recommendation using KNN",
    "Health Costs Calculator using Linear Regression",
    "Neural Network SMS Classifier",
    "aaaaaaa",
    "aaaaaaa",
    "aaaaaaa",
    "aaaaaaa",
    "aaaaaaa",
    "aaaaaaa",
  ]

  return(
    <div className="section projects-container">
      <ScrollPage>
        <Animator animation={batch(FadeIn(), Move(), Sticky())}>
            <div className='header'>
              <h1>iman-ai<b>.projects()</b></h1>
              <div className='divider' />
            </div>
        </Animator>
        <div className="project-stack">
          <Animator animation={batch(FadeIn(), Move(), Sticky())}>
          {project_stack.map(function (project){
            return(
              <p></p>
            )
          })}</Animator>
        </div>
      </ScrollPage>
    </div>
  );
}

export default Projects