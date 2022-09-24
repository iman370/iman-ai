import React from 'react';
import {Animator, MoveIn,} from "react-scroll-motion";

function MiniAboutMe() {
    return(
        <div id="miniaboutme-content">
            <span className="h1_text">
                <Animator animation={MoveIn(-1000, 0)}>Diligent and devoted to creating imaginative software.</Animator>
                <Animator animation={MoveIn(1000, 0)}>I take pride in providing clean and efficient code.</Animator>
            </span>
        </div>
    )
}

export default MiniAboutMe