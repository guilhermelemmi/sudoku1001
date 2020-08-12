
import { useState } from "react";
import styles from './SudokuBoard.module.css'

function SudokuBoard(props) {
  const { initialBoard, solution } = props;
  const [board, setBoard] = useState(initialBoard);

  const onCellChange = (index, value) => {
    setBoard(board.map((cell, i) => i === index ? value : cell));
  };

  const renderCells = () => board.map((cell, i) => (
    <div className={styles.cell}>
      <input
        type="text"
        pattern="\d*"
        novalidate=""
        id={`input-${i}`}
        value={false ? solution[i] : cell}
        maxlength="1"
        onChange={() => onCellChange(i, cell)}
      />
    </div>
  ));

  return (
    <div className={styles.board}>
     {renderCells()}
    </div>
  )
}

export default SudokuBoard;
