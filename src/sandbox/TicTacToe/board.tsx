import Cell from "./cell";
import { calculateWinner } from "./util";

export default function Board({
  cells,
  xIsNext,
  onPlay,
}: {
  cells: string[];
  xIsNext: boolean;
  onPlay: (nextCells: string[]) => void;
}) {
  const handleClick = (cellId: number) => {
    const nextCells = cells.slice();
    if (cells[cellId] || calculateWinner(cells)) return;

    xIsNext ? (nextCells[cellId] = "✖") : (nextCells[cellId] = "⚫");
    onPlay(nextCells);
  };


  let status;
  const winner = calculateWinner(cells);
  winner
    ? (status = `Winner : ${winner}`)
    : (status = `Next player: ${xIsNext ? "✖" : "⚫"}`);

  return (
    <div>
      <p>{status}</p>
      <div className="boardrow">
        <Cell value={cells[0]} onCellClick={() => handleClick(0)} />
        <Cell value={cells[1]} onCellClick={() => handleClick(1)} />
        <Cell value={cells[2]} onCellClick={() => handleClick(2)} />
      </div>
      <div className="boardrow">
        <Cell value={cells[3]} onCellClick={() => handleClick(3)} />
        <Cell value={cells[4]} onCellClick={() => handleClick(4)} />
        <Cell value={cells[5]} onCellClick={() => handleClick(5)} />
      </div>
      <div className="boardrow">
        <Cell value={cells[6]} onCellClick={() => handleClick(6)} />
        <Cell value={cells[7]} onCellClick={() => handleClick(7)} />
        <Cell value={cells[8]} onCellClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
