import React from 'react'
import { Animator, ScrollPage, batch, Fade, Move, Sticky} from "react-scroll-motion";

function Projects() {
    return(
        <ScrollPage>
        <div className="section">
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <div className="projects-container">
                <h1>Website In Progress 2</h1>
            </div>
          </Animator>
          </div>
        </ScrollPage>
    );
}

export default Projects