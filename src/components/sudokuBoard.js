import React from "react"

const SudokuBoard = ({ board, solution, showSolution }) => (
  <div className="board">
    {
      board.split('').map((cell, i) => {
        return (
          <div className="cell">
            <input
              type="text"
              pattern="\d*"
              novalidate=""
              id={`input-${i}`}
              value={showSolution ? solution[i] : (cell !== '0' ? cell : '')}
              maxlength="1"
            />
          </div>
        )
      })
    }
  </div>
);

export default SudokuBoard;
