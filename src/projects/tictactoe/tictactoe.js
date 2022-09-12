import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

import Game from './game';


/* make page */
function Tictactoe() {
    return(
        <div id="tictactoe-container">
            <Toolbar>
                <div className='navbar'>
                    <div className='logo'>
                        <a href='../'>
                            <p>iman-ai.tech()</p>
                        </a>
                    </div>
                </div>
            </Toolbar>
            <div id="content">
                <div id="column1">
                    <Button className='back-button' href='../'>🠔 Back</Button>
                </div>
                <div id="column2">
                    <div className='heading'>
                        <div className='typewriter'>
                            <h1>tictactoe using minimax</h1>
                        </div>
                    </div>
                    <div className='divider-small-vh' />
                    <Game />
                </div>
            </div>
        </div>
    )
}

export default Tictactoe