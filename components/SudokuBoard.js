
import { useState, useEffect, useRef, useCallback } from "react";
import classNames from 'classnames';

import styles from './SudokuBoard.module.css';

const FOCUS_DIRECTION = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
  DOWN: 'DOWN',
  UP: 'UP',
};

const DIRECTION_SHIFT = {
  RIGHT: 1,
  LEFT: -1,
  DOWN: 9,
  UP: -9,
};

function SudokuBoard(props) {
  const { initialBoard, solution } = props;

  const [board, setBoard] = useState(initialBoard);
  const [focus, setFocus] = useState(0);
  const [focusDirection, setFocusDirection] = useState(FOCUS_DIRECTION.RIGHT);
  const [pendingInput, setPendingInput] = useState(null);
  const [errors, setErrors] = useState({});

  const cellsRefs = useRef([]);

  useEffect(() => {
    if (cellsRefs.current[focus]) {
      cellsRefs.current[focus].focus();
    } else {
      setFocus(focus => focus + DIRECTION_SHIFT[focusDirection]);
    }
  }, [focus]);

  useEffect(() => {
    if (pendingInput)
      validatePendingInput();
  }, [pendingInput]);

  const onKeyUp = (event) => {
    console.log(event.key);
    switch (event.key) {
      case 'ArrowDown':
        setFocusDirection(FOCUS_DIRECTION.DOWN);
        setFocus(focus => focus + DIRECTION_SHIFT[FOCUS_DIRECTION.DOWN]);
        break;
      case 'ArrowUp':
        setFocusDirection(FOCUS_DIRECTION.UP);
        setFocus(focus => focus + DIRECTION_SHIFT[FOCUS_DIRECTION.UP]);
        break;
      case 'ArrowLeft':
        setFocusDirection(FOCUS_DIRECTION.LEFT);
        setFocus(focus => focus + DIRECTION_SHIFT[FOCUS_DIRECTION.LEFT]);
        break;
      case 'ArrowRight':
        setFocusDirection(FOCUS_DIRECTION.RIGHT);
        setFocus(focus => focus + DIRECTION_SHIFT[FOCUS_DIRECTION.RIGHT]);
        break;
    }
  };

  const onCellKeyDown = (index, event) => {
    if (!isNaN(event.key))
      setPendingInput({[index]: event.key});
    else
      event.preventDefault();
  };

  const validatePendingInput = () => {
    // TODO: implement pending input validation
    setBoard({...board, ...pendingInput});
    setPendingInput(null);
  }

  const validateBoard = () => {
    const boardErrors = getBoardErrors();
    if (boardErrors !== null) {
      setErrors(boardErrors);
      setTimeout(clearErrors, 5000);
    }
  };

  const clearErrors = () => {
    setBoard({...board, ...errors});
    setErrors({});
  }

  const getBoardErrors = () => {
    return null;
  }

  const getInputValue = (index) => {
    if (pendingInput && pendingInput[index]) {
      console.log('pendingInput', pendingInput[index]);
      return pendingInput[index];
    } else {
      return board[index] || '';
    }
  }

  const renderCells = () => board && Object.keys(board).map((cellIndex) => (
    <div
      key={`cell-${cellIndex}`}
      className={classNames(
        styles.cell,
        {[styles.pending]: pendingInput && typeof pendingInput[cellIndex] !== "undefined"},
        {[styles.error]: typeof errors[cellIndex] !== "undefined"}
      )}
    >
      {
        initialBoard[cellIndex] || (
          <input
            ref={ref => cellsRefs.current[cellIndex] = ref}
            type="text"
            pattern="\d*"
            noValidate=""
            id={`input-${cellIndex}`}
            value={getInputValue(cellIndex)}
            onKeyDown={e => onCellKeyDown(cellIndex, e)}
          />
        )
      }
    </div>
  ));

  return (
    <div
      className={styles.board}
      onKeyUp={onKeyUp}
    >
     {renderCells()}
    </div>
  )
}

export default SudokuBoard;
