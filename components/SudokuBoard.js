
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
      console.log('useEffect found focus', focus);
      cellsRefs.current[focus].focus();
    } else {
      console.log('useEffect not found focus', focus);
      setFocus(focus => focus + DIRECTION_SHIFT[focusDirection]);
    }
  }, [focus]);

  useEffect(() => {
    if (pendingInput)
      validatePendingInput();
  }, [pendingInput]);

  const onKeyUp = (event) => {
    console.log('onKeyUp', event.key);
    console.log('onKeyUp focus is', focus);
    let newFocusDirection = '';

    switch (event.key) {
      case 'ArrowDown':
        newFocusDirection = FOCUS_DIRECTION.DOWN;
        break;
      case 'ArrowUp':
        newFocusDirection = FOCUS_DIRECTION.UP;
        break;
      case 'ArrowLeft':
        newFocusDirection = FOCUS_DIRECTION.LEFT;
        break;
      case 'ArrowRight':
        newFocusDirection = FOCUS_DIRECTION.RIGHT;
        break;
    }
    if (withinBoard(focus + DIRECTION_SHIFT[newFocusDirection])) {
      setFocusDirection(newFocusDirection);
      setFocus(focus => focus + DIRECTION_SHIFT[newFocusDirection]);
    }
  };

  const onCellKeyDown = (index, event) => {
    console.log('onCellKeyDown', index);
    if (!isNaN(event.key))
      setPendingInput({[index]: event.key});
    else
      event.preventDefault();
  };

  const onCellFocus = (index, event) => {
    console.log('onCellFocus1', index);
    if (focus != index) {
      console.log('onCellFocus2', index, typeof index);
      setFocus(() => parseInt(index, 10));
      event.preventDefault();
    }
  };

  const withinBoard = (newFocus) => {
    return newFocus >= 0 && newFocus < 81;
  }

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
      //console.log('pendingInput', pendingInput[index]);
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
            readOnly
            id={`input-${cellIndex}`}
            value={getInputValue(cellIndex)}
            onKeyDown={e => onCellKeyDown(cellIndex, e)}
            onFocus={e => onCellFocus(cellIndex, e)}
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
