import { MouseEventHandler } from "react";

const Cell = ({
  value,
  onCellClick,
}: {
  value: string;
  onCellClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className="cell" onClick={onCellClick}>
      {value}
    </button>
  );
};
export default Cell;
