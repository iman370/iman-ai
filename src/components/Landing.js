import React from 'react';
import rikkagif from './images/rikka.gif';

//import { Animator, ScrollPage, batch, MoveOut, Sticky, Fade} from "react-scroll-motion";

function Landing() {
    return(
      <div className="landing-container">
        <div className='column1'>
        <img className="picture" src={rikkagif} alt="Anime gif" />
        </div>
        <div className='column2'>
          <div className='heading'>
            <div className='typewriter'>
                <h1>iman-ai.tech()</h1>
            </div>
          </div>
          <h2>Computer Science Student</h2>
        </div>
      </div>
    );
}

export default Landing