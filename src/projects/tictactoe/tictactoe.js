import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

import Game from './game';


/* make page */
function Tictactoe() {
    return(
        <div id="tictactoe-container">
            <Toolbar>
                <div className='navbar-ttt'>
                    <a href='../'>
                        <p>iman-ai.tech()</p>
                    </a>
                </div>
            </Toolbar>
            <div id="content">
                <div id="column1">
                    <Button className='back-button' href='../'>🠔 Back</Button>
                    <div className='divider' />
                    <h2>What is minimax?</h2>
                    <h3>The minimax algorithm tries to maximise the minimum while the opponent tries to minimise the maximum. It is best used in 2 player turn-based games where player 1 attempts to acheive the best-case outcome (player 1 wins) while player 2 attempts to achieve the worst-case outcome (player 1 loses).</h3>
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