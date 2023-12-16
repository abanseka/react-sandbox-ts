import { useState } from "react";
import "./tictactoe.css";
import Board from "./board";

function TicTacToe() {
  const [history, setHistory] = useState<string[][]>([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const currentCells = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const jumpTo = (nextMove: number) => setCurrentMove(nextMove);

  function handlePlay(nextCells: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextCells];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((_, move: number) => {
    let desc = "";
    move > 0 ? (desc = `Go to move: ${move}`) : (desc = "Go to game start");

    return (
      <li key={move}>
        <button className="timeline" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  return (
    <>
      <code style={{ maxWidth: 500 }}>
        This code defines a functional component called TicTacToe, which
        represents a game of Tic Tac Toe. It uses React hooks, specifically
        useState, to manage the game state. The state includes the history of
        moves and the current move. The component renders a game board and a
        list of moves. Each move is represented by a button that allows the user
        to jump to that move. The handlePlay function is called when a move is
        made, updating the history and current move state.
      </code>

      <div className="gameview">
        <Board xIsNext={xIsNext} cells={currentCells} onPlay={handlePlay} />
        <div className="history">
          <ol> {moves} </ol>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
