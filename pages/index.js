import SudokuBoard from '../components/SudokuBoard';
import { createGame } from '../util/sudokuUtil';

const game = createGame(0);
const initialBoard = game.board;
const solution = game.solution;
const board = game.board.split('').map((cell) => cell === '0' ? null : cell);

function HomePage() {
  return (
    <SudokuBoard
      initialBoard={board}
      solution={solution}
      board={board}
    />
  )
}

export default HomePage;

// export default class Home {
//   state = {
//     initialBoard: game.board,
//     solution: game.solution,
//     board: game.board.split('').map((cell) => cell === '0' ? null : cell),
//     difficulty: 0,
//     showSolution: false,
//   };

//   toggleSolution = (showSolution) => {
//     this.setState({ showSolution: showSolution });
//   };

//   onReset = () => {
//     game = createGame(this.state.difficulty);
//     this.setState({
//       initialBoard: game.board,
//       solution: game.solution,
//       board: game.board.split('').map((cell) => cell === 0 ? null : cell),
//     });
//   }

//   onDifficultyChanged = (difficulty) => {
//     this.setState({ difficulty }, this.onReset);
//   }

//   onCellChanged = (index, value) => {
//     this.setState({
//       board: this.state.board.map((cell, i) => i === index ? value : cell)
//     });
//   };

//   render() {
//     const {
//       initialBoard,
//       board,
//       solution,
//       showSolution,
//     } = this.state;

//     return (
//       <SudokuBoard
//         initialBoard={initialBoard}
//         solution={solution}
//         board={board}
//         showSolution={showSolution}
//         onCellChange={this.onCellChanged}
//       />
//     );
//   }
// }
