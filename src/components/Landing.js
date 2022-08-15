import React from 'react';

import { Animator, ScrollPage, batch, MoveOut, Sticky} from "react-scroll-motion";

function Landing() {
    return(
        <ScrollPage>
          <div className="section">
          <Animator animation={batch(Sticky(), MoveOut(0, -200))}>
            <div className="landing-container">
                <div className='typewriter'>
                    <h1>iman-ai.tech()</h1>
                    <h2>Computer Science Student</h2>
                </div>
            </div>
          </Animator>
          </div>
        </ScrollPage>
    );
}

export default Landing