/* I followed this tutorial in making a 2-player tictactoe game
   https://reactjs.org/tutorial/tutorial.html
   Then, I removed the 2nd player and added in the AI */

import React from 'react';
import { Button } from '@mui/material';
import Board from './board';
    
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
    return minimax([...squares], true)[0];
}

function get_validMoves(board) {
    const validMoves = [];
    for (var i=0; i<board.length; i++) {
        if (!board[i]) {
            validMoves.push(i);
        }
    }
    return validMoves;
}

function minimax(board, maximisingPlayer) {
    const currentPlayer = maximisingPlayer ? "O" : "X";
    const validMoves = get_validMoves(board);
    let bestMove; //[bestMove, score]

    const winner = calculateWinner(board);
    if (winner) {
        if (winner === 'X') {
            return [null, (-10 * (validMoves.length + 1))];
        } else {
            return [null, (10 * (validMoves.length + 1))];
        }
    } else if (validMoves.length === 0) {
        return [null, 0];
    }

    if (maximisingPlayer) {
        bestMove = [null, -Infinity];
    } else {
        bestMove = [null, Infinity];
    }

    for (var i=0; i<validMoves.length; i++) {
        const currentMove = validMoves[i];
        board[currentMove] = currentPlayer;

        const score = (minimax(board, !maximisingPlayer));

        board[currentMove] = null;
        score[0] = currentMove;

        if (maximisingPlayer) {
            if (score[1] > bestMove[1]) {
                bestMove = score;
            }
        } else {
            if (score[1] < bestMove[1]) {
                bestMove = score;
            }
        }
    }
    return bestMove;
}

export default Game