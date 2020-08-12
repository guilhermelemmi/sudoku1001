webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SudokuBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SudokuBoard */ "./components/SudokuBoard.js");
/* harmony import */ var _util_sudokuUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/sudokuUtil */ "./util/sudokuUtil.js");
var _jsxFileName = "C:\\Users\\Windows10\\www\\sudoku1001.com.next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var game = Object(_util_sudokuUtil__WEBPACK_IMPORTED_MODULE_2__["createGame"])(0);
var initialBoard = game.board;
var solution = game.solution;
var board = game.board.split('').map(function (cell) {
  return cell === '0' ? null : cell;
});

function HomePage() {
  return __jsx(_components_SudokuBoard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    initialBoard: initialBoard,
    solution: solution,
    board: board,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  });
}

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage); // export default class Home {
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

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2FtZSIsImNyZWF0ZUdhbWUiLCJpbml0aWFsQm9hcmQiLCJib2FyZCIsInNvbHV0aW9uIiwic3BsaXQiLCJtYXAiLCJjZWxsIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG1FQUFVLENBQUMsQ0FBRCxDQUF2QjtBQUNBLElBQU1DLFlBQVksR0FBR0YsSUFBSSxDQUFDRyxLQUExQjtBQUNBLElBQU1DLFFBQVEsR0FBR0osSUFBSSxDQUFDSSxRQUF0QjtBQUNBLElBQU1ELEtBQUssR0FBR0gsSUFBSSxDQUFDRyxLQUFMLENBQVdFLEtBQVgsQ0FBaUIsRUFBakIsRUFBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQ7QUFBQSxTQUFVQSxJQUFJLEtBQUssR0FBVCxHQUFlLElBQWYsR0FBc0JBLElBQWhDO0FBQUEsQ0FBekIsQ0FBZDs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2xCLFNBQ0UsTUFBQywrREFBRDtBQUNFLGdCQUFZLEVBQUVOLFlBRGhCO0FBRUUsWUFBUSxFQUFFRSxRQUZaO0FBR0UsU0FBSyxFQUFFRCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQU9EOztLQVJRSyxRO0FBVU1BLHVFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjVjNzNjMTRkMzNiMzNlNWY3NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdWRva3VCb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1N1ZG9rdUJvYXJkJztcbmltcG9ydCB7IGNyZWF0ZUdhbWUgfSBmcm9tICcuLi91dGlsL3N1ZG9rdVV0aWwnO1xuXG5jb25zdCBnYW1lID0gY3JlYXRlR2FtZSgwKTtcbmNvbnN0IGluaXRpYWxCb2FyZCA9IGdhbWUuYm9hcmQ7XG5jb25zdCBzb2x1dGlvbiA9IGdhbWUuc29sdXRpb247XG5jb25zdCBib2FyZCA9IGdhbWUuYm9hcmQuc3BsaXQoJycpLm1hcCgoY2VsbCkgPT4gY2VsbCA9PT0gJzAnID8gbnVsbCA6IGNlbGwpO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8U3Vkb2t1Qm9hcmRcbiAgICAgIGluaXRpYWxCb2FyZD17aW5pdGlhbEJvYXJkfVxuICAgICAgc29sdXRpb249e3NvbHV0aW9ufVxuICAgICAgYm9hcmQ9e2JvYXJkfVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuLy8gICBzdGF0ZSA9IHtcbi8vICAgICBpbml0aWFsQm9hcmQ6IGdhbWUuYm9hcmQsXG4vLyAgICAgc29sdXRpb246IGdhbWUuc29sdXRpb24sXG4vLyAgICAgYm9hcmQ6IGdhbWUuYm9hcmQuc3BsaXQoJycpLm1hcCgoY2VsbCkgPT4gY2VsbCA9PT0gJzAnID8gbnVsbCA6IGNlbGwpLFxuLy8gICAgIGRpZmZpY3VsdHk6IDAsXG4vLyAgICAgc2hvd1NvbHV0aW9uOiBmYWxzZSxcbi8vICAgfTtcblxuLy8gICB0b2dnbGVTb2x1dGlvbiA9IChzaG93U29sdXRpb24pID0+IHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NvbHV0aW9uOiBzaG93U29sdXRpb24gfSk7XG4vLyAgIH07XG5cbi8vICAgb25SZXNldCA9ICgpID0+IHtcbi8vICAgICBnYW1lID0gY3JlYXRlR2FtZSh0aGlzLnN0YXRlLmRpZmZpY3VsdHkpO1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgaW5pdGlhbEJvYXJkOiBnYW1lLmJvYXJkLFxuLy8gICAgICAgc29sdXRpb246IGdhbWUuc29sdXRpb24sXG4vLyAgICAgICBib2FyZDogZ2FtZS5ib2FyZC5zcGxpdCgnJykubWFwKChjZWxsKSA9PiBjZWxsID09PSAwID8gbnVsbCA6IGNlbGwpLFxuLy8gICAgIH0pO1xuLy8gICB9XG5cbi8vICAgb25EaWZmaWN1bHR5Q2hhbmdlZCA9IChkaWZmaWN1bHR5KSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpZmZpY3VsdHkgfSwgdGhpcy5vblJlc2V0KTtcbi8vICAgfVxuXG4vLyAgIG9uQ2VsbENoYW5nZWQgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICBib2FyZDogdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKGNlbGwsIGkpID0+IGkgPT09IGluZGV4ID8gdmFsdWUgOiBjZWxsKVxuLy8gICAgIH0pO1xuLy8gICB9O1xuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zdCB7XG4vLyAgICAgICBpbml0aWFsQm9hcmQsXG4vLyAgICAgICBib2FyZCxcbi8vICAgICAgIHNvbHV0aW9uLFxuLy8gICAgICAgc2hvd1NvbHV0aW9uLFxuLy8gICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxTdWRva3VCb2FyZFxuLy8gICAgICAgICBpbml0aWFsQm9hcmQ9e2luaXRpYWxCb2FyZH1cbi8vICAgICAgICAgc29sdXRpb249e3NvbHV0aW9ufVxuLy8gICAgICAgICBib2FyZD17Ym9hcmR9XG4vLyAgICAgICAgIHNob3dTb2x1dGlvbj17c2hvd1NvbHV0aW9ufVxuLy8gICAgICAgICBvbkNlbGxDaGFuZ2U9e3RoaXMub25DZWxsQ2hhbmdlZH1cbi8vICAgICAgIC8+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==