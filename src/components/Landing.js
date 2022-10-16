import React from 'react';
import { motion } from "framer-motion";
import robot from './images/robot.png'

//import { Animator, ScrollPage, batch, MoveOut, Sticky, Fade} from "react-scroll-motion";

function Landing() {
    return(
      <div className="landing-container">
        <div className='column1'>
          <motion.div
            className="picture"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            >
            <img src={robot} alt="Robot"/>
          </motion.div>
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