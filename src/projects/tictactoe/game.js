/* I followed this tutorial in making a 2-player tictactoe game
   https://reactjs.org/tutorial/tutorial.html
   Then, I removed the 2nd player and added in the AI */

import React from 'react';
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
            // Makes the AI think one move ahead
            //scores.push(get_heuristic([...squares], validMoves[(validMoves.length - 1)]));

            // minimax algorithm - depth: 3
            scores.push(minimax([...squares], validMoves[(validMoves.length - 1)],3,-Infinity,Infinity,true))
        }
    }

    const max = Math.max(...scores);
    const index = scores.indexOf(max);
    const move = validMoves[index];

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
    //horizontal
    for (var i = 0; i < 9; i += 3) {
        let player_squares = 0;
        for (var j = 0; j < 3; j++) {
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
    //vertical
    for (var k = 0; k < 3; k++) {
        let player_squares = 0;
        for (var l = 0; l < 9; l += 3) {
            const current_square = board[k+l];
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
    //positive diagonal (2,4,6)
    const postive = [2,4,6]; 
    let player_squares_p = 0;
    for (var m=0; m < postive.length; m++) {
        if (board[postive[m]] === player) {
            player_squares_p += 1;
        } else if (board[postive[m]] && board[postive[m]] !== player) {
            player_squares_p = 0;
            break;
        }
    }
    if (player_squares_p === n) {
        num_squares += 1;
    }
    //negative diagonal (1,4,8)
    const negative = [1,4,8]; 
    let player_squares_n = 0;
    for (var p=0; p < negative.length; p++) {
        if (board[negative[m]] === player) {
            player_squares_n += 1;
        } else if (board[negative[p]] && board[negative[p]] !== player) {
            player_squares_n = 0;
            break;
        }
    }
    if (player_squares_n === n) {
        num_squares += 1;
    }

    return num_squares
}

function get_heuristic(board) {
    //board[move] = 'O';
    const num_threes = count_squares('O', 3, board);
    const num_twos = count_squares('O', 2, board);
    const num_threes_opp = count_squares('X', 3, board);
    const score = (1000 * num_threes) + (1 * num_twos) - (1000 * num_threes_opp);
    return score
}

//move is the index of the next move
function minimax(board, move, depth, alpha, beta, maximisingPlayer) {
    if (maximisingPlayer) {
        board[move] = 'O';
    } else {
        board[move] = 'X';
    }

    const validMoves = [];
    //get list of all valid moves
    for (var i = 0; i < board.length; i++) {
        if (!board[i]) {
            validMoves.push(i);
        }
    }

    if (depth === 0 || validMoves.length === 0 || calculateWinner(board)) {
        return get_heuristic(board);
    }

    if (maximisingPlayer) {
        let maxEval = -Infinity;
        for (var j = 0; j<validMoves.length; j++) {
            let evaluation = minimax(board, j, (depth-1), alpha, beta, false);
            maxEval = Math.max(maxEval,evaluation);
            alpha = Math.max(alpha,evaluation);
            if (beta <= alpha) {
                break;
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (var k = 0; k<validMoves.length; k++) {
            let evaluation = minimax(board, k, (depth-1), alpha, beta, true);
            minEval = Math.min(minEval,evaluation);
            beta = Math.min(beta,evaluation);
            if (beta <= alpha) {
                break;
            }
        }
        return minEval;
    }
}

export default Game