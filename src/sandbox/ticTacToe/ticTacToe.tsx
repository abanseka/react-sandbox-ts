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
    <article style={{ position: "relative" }}>
      <button
        style={{ position: "absolute", top: 10, right: "101%" }}
        onClick={() => {
          setCurrentMove(0);
          setHistory([Array(9).fill("")]);
        }}
      >
        reset
      </button>

      <div className="gameview">
        <Board xIsNext={xIsNext} cells={currentCells} onPlay={handlePlay} />
        <div className="history">
          <ol> {moves} </ol>
        </div>
      </div>
    </article>
  );
}

export default TicTacToe;
