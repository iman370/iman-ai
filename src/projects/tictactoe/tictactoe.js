/* I followed this tutorial in making a 2-player tictactoe game
   https://reactjs.org/tutorial/tutorial.html
   Then, I removed the 2nd player and added in the AI */

import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

function Square(props) {
    return (
        <Button className="square" onClick={props.onClick}>
        {props.value}
        </Button>
    );
}
  
class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
        <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}
  
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: {
                squares: Array(9).fill(null)
            },
            stepNumber: 0,
            playerIsNext: true
        };
    }

    playMove(i) {
        const current = this.state.board;
        const squares = current.squares.slice();
        //If there's a winner or this square has already been played then nothing will change
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.playerIsNext ? "X" : "O";
        this.setState({
            board:
            {
                squares: squares
            },
            stepNumber: (this.state.stepNumber + 1),
            playerIsNext: !this.state.playerIsNext
        });
    }

    handleClick(i) {
        this.playMove(i);
    }

    playAI() {
        this.playMove(AI(this.state.board.squares));
    }

    newGame() {
        this.setState({
            board: {
                squares: Array(9).fill(null)
            },
            stepNumber: 0,
            playerIsNext: true
        })
    }

    render() {
        const current = this.state.board;
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            if (winner === 'X') {
                status = "Winner: You";
            } else {
                status = "Winner: AI";
            }
        } else if (this.state.stepNumber === 9) {
            status = "Game Ended in a Draw";
        } else {
            status = (this.state.playerIsNext ? "Your turn" : "AI turn");
            if (status === "AI turn") {
                this.playAI();
            }
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                    squares={current.squares}
                    onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <h2>{status}</h2>
                    <Button onClick={() => this.newGame()}>New Game</Button>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        //horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonals
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

/* AI */

function AI(squares) {
    const validMoves = [];
    const scores = [];

    for (var i = 0; i < squares.length; i++) {
        if (!squares[i]) {
            validMoves.push(i);
            scores.push(get_heuristic([...squares], validMoves[(validMoves.length - 1)]));
        }
    }
    console.log(scores);

    const max = Math.max(...scores);
    const index = scores.indexOf(max);
    const move = validMoves[index];
    console.log("move:");
    console.log(move);

    // Making the AI play a random (valid) move
    //const move = validMoves[Math.floor(Math.random() * validMoves.length)];

    return move
}

//player: either 'X' or 'O'
//n: number of squares in a row (max 3 (winning move), min 2)
//board: a copy of the current game board
//move: the index of where the next move will be
function count_squares(player, n, board) {
    let num_squares = 0
    for (var i = 0; i < 9; i += 3) {
        let player_squares = 0;
        //horizontal
        for (var j = 0; i < 3; i++) {
            const current_square = board[i+j];
            if (current_square === player) {
                player_squares += 1;
            } else if (current_square && current_square !== player) {
                player_squares = 0;
                break;
            }
        }
        if (player_squares === n) {
            num_squares += 1;
        }
        
    }
    //horizontal

    //vertical

    //positive diagonal

    //negative diagonal

    return num_squares
}

function get_heuristic(board, move) {
    board[move] = 'O';
    const num_threes = count_squares('O', 3, board);
    const num_twos = count_squares('O', 2, board);
    const num_threes_opp = count_squares('X', 3, board);
    const score = (1000 * num_threes) + (1 * num_twos) - (1000 * num_threes_opp);
    return score
}


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