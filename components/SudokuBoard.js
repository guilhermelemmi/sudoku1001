
import { useState, useEffect, useRef } from "react";
import classNames from 'classnames';

import styles from './SudokuBoard.module.css';

let c = 0;

function SudokuBoard(props) {
  const { initialBoard, solution } = props;

  const [focus, setFocus] = useState(0);
  const [board, setBoard] = useState(initialBoard);
  const [pendingInput, setPendingInput] = useState(null);
  const [errors, setErrors] = useState({});

  const cellsRefs = Object.keys(initialBoard).map(i => useRef(null));

  useEffect(() => {
    if (cellsRefs && cellsRefs[focus] && cellsRefs[focus].focus) {
      cellsRefs[focus].focus();
    }

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  useEffect(() => {
    console.log(focus);
    if (cellsRefs && cellsRefs[focus] && cellsRefs[focus].focus)
      cellsRefs[focus].focus();
  }, [focus]);

  useEffect(() => {
    validatePendingInput();
  }, [pendingInput]);

  const navigate = (direction) => {
    switch (direction) {
      case 'left':
        setFocus(focus - 1);
        break;
      case 'right':
        setFocus(focus + 1);
        break;
    }
  }

  const onKeydown = (event) => {
    switch (event.key) {
      case 'ArrowDown':
        //console.log('arrow down');
        break;
      case 'ArrowUp':
        //console.log('arrow up');
        break;
      case 'ArrowLeft':
        console.log('arrow left');
        navigate('left');
        break;
      case 'ArrowRight':
        console.log('arrow right');
        navigate('right');
        break;
    }
  };

  const onCellChange = (index, value) => {
    setPendingInput({[index]: value})
    //setBoard({...board, [index]: value});
  };

  const validatePendingInput = () => {
    // TODO: implement pending input validation
  }

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
      {
        initialBoard[cellIndex] || (
          <input
            ref={cellsRefs[cellIndex]}
            type="text"
            pattern="\d*"
            noValidate=""
            id={`input-${cellIndex}`}
            value={board[cellIndex] || ''}
            maxLength="1"
            onChange={() => onCellChange(cellIndex, board[cellIndex])}
          />
        )
      }
    </div>
  ));

  return (
    <div className={styles.board}>
     {renderCells()}
    </div>
  )
}

export default SudokuBoard;
