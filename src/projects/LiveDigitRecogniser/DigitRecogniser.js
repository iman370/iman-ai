import React from 'react';
import Canvas from './Canvas';
import { Button } from '@mui/material';

function DigitRecogniser() {
    return(
        <div id="ldr-container">
            <div className='ldr-header'>
                <Button className='back-button' href='../'>🠔 Back</Button>
                <h1>Live Digit Recogniser</h1>
            </div>
            <Canvas />
        </div>
    )
}

export default DigitRecogniser