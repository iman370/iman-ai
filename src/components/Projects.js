import React from 'react';
import { Animator, ScrollPage, batch, FadeIn, Move, Sticky} from "react-scroll-motion";

function Projects() {
  const project_stack = [
    "klabber",
    "Cat and Dog Image Classifier",
    "Book Recommendation using KNN",
    "Health Costs Calculator using Linear Regression",
    "Neural Network SMS Classifier"
  ]
    return(
        <ScrollPage>
        <div className="section">
          <Animator animation={batch(FadeIn(), Move(), Sticky())}>
            <div className="projects-container">
              <div className='header'>
                <h1>iman-ai<b>.projects()</b></h1>
              </div>
              <div className='divider' />
              {project_stack.map(function (project){
                return(
                  <p>{project}</p>
                )
              })}
            </div>
          </Animator>
          </div>
        </ScrollPage>
    );
}

export default Projects