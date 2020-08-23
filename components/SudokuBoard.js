
import { useState, useEffect } from "react";
import classNames from 'classnames';
import styles from './SudokuBoard.module.css'

let c = 0;

function SudokuBoard(props) {
  const { initialBoard, solution } = props;
  const [board, setBoard] = useState(initialBoard);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateBoard(board);
  }, [board]);

  const onCellChange = (index, value) => {
    setBoard({...board, [index]: value});
  };

  const validateBoard = () => {
    console.log('validateBoard');
    const boardErrors = getBoardErrors();
    if (boardErrors !== null) {
      console.log('setErrors');
      setErrors(boardErrors);
      setTimeout(clearErrors, 5000);
    }
  };

  const clearErrors = () => {
    console.log('clearErrors');
    setBoard({...board, ...errors});
    setErrors({});
  }

  const getBoardErrors = () => {
    if (c === 0) {
      c++;
      return {1: null, 3: null};
    }
    return null;
  }

  const renderCells = () => board && Object.keys(board).map((cellIndex) => (
    <div
      key={`cell-${cellIndex}`}
      className={classNames(
        styles.cell,
        {[styles.error]: typeof errors[cellIndex] !== "undefined"}
      )}
    >
      <input
        type="text"
        pattern="\d*"
        noValidate=""
        id={`input-${cellIndex}`}
        value={board[cellIndex] || ''}
        maxLength="1"
        onChange={() => onCellChange(cellIndex, board[cellIndex])}
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
