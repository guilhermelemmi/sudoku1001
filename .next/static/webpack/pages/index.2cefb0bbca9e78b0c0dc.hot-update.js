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
var _jsxFileName = "C:\\Users\\Windows10\\www\\sudoku1001.com.next\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var game = Object(_util_sudokuUtil__WEBPACK_IMPORTED_MODULE_2__["createGame"])(0);
var initialBoard = game.board;
var solution = game.solution;
var board = game.board.split('').map(function (cell) {
  return cell === '0' ? null : cell;
});

function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(game.board.split('').map(function (cell) {
    return cell === '0' ? null : cell;
  })),
      board = _useState[0],
      setBoard = _useState[1];

  var onCellChanged = function onCellChanged(index, value) {
    setBoard(board.map(function (cell, i) {
      return i === index ? value : cell;
    }));
  };

  return __jsx(_components_SudokuBoard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    initialBoard: initialBoard,
    solution: solution,
    board: board,
    showSolution: "false",
    onCellChange: this.onCellChanged,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  });
}

_s(HomePage, "+4K9winQbM+mi+25zmbgcgxSXKA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2FtZSIsImNyZWF0ZUdhbWUiLCJpbml0aWFsQm9hcmQiLCJib2FyZCIsInNvbHV0aW9uIiwic3BsaXQiLCJtYXAiLCJjZWxsIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInNldEJvYXJkIiwib25DZWxsQ2hhbmdlZCIsImluZGV4IiwidmFsdWUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MsbUVBQVUsQ0FBQyxDQUFELENBQXZCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHRixJQUFJLENBQUNHLEtBQTFCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHSixJQUFJLENBQUNJLFFBQXRCO0FBQ0EsSUFBTUQsS0FBSyxHQUFHSCxJQUFJLENBQUNHLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQixFQUFqQixFQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsSUFBRDtBQUFBLFNBQVVBLElBQUksS0FBSyxHQUFULEdBQWUsSUFBZixHQUFzQkEsSUFBaEM7QUFBQSxDQUF6QixDQUFkOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQ1QsSUFBSSxDQUFDRyxLQUFMLENBQVdFLEtBQVgsQ0FBaUIsRUFBakIsRUFBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLEtBQUssR0FBVCxHQUFlLElBQWYsR0FBc0JBLElBQWhDO0FBQUEsR0FBekIsQ0FBRCxDQURoQjtBQUFBLE1BQ1hKLEtBRFc7QUFBQSxNQUNKTyxRQURJOztBQUdsQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN0Q0gsWUFBUSxDQUFDUCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9PLENBQVA7QUFBQSxhQUFhQSxDQUFDLEtBQUtGLEtBQU4sR0FBY0MsS0FBZCxHQUFzQk4sSUFBbkM7QUFBQSxLQUFWLENBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLCtEQUFEO0FBQ0UsZ0JBQVksRUFBRUwsWUFEaEI7QUFFRSxZQUFRLEVBQUVFLFFBRlo7QUFHRSxTQUFLLEVBQUVELEtBSFQ7QUFJRSxnQkFBWSxFQUFDLE9BSmY7QUFLRSxnQkFBWSxFQUFFLEtBQUtRLGFBTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVNEOztHQWhCUUgsUTs7S0FBQUEsUTtBQWtCTUEsdUVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yY2VmYjBiYmNhOWU3OGIwYzBkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdWRva3VCb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1N1ZG9rdUJvYXJkJztcbmltcG9ydCB7IGNyZWF0ZUdhbWUgfSBmcm9tICcuLi91dGlsL3N1ZG9rdVV0aWwnO1xuXG5jb25zdCBnYW1lID0gY3JlYXRlR2FtZSgwKTtcbmNvbnN0IGluaXRpYWxCb2FyZCA9IGdhbWUuYm9hcmQ7XG5jb25zdCBzb2x1dGlvbiA9IGdhbWUuc29sdXRpb247XG5jb25zdCBib2FyZCA9IGdhbWUuYm9hcmQuc3BsaXQoJycpLm1hcCgoY2VsbCkgPT4gY2VsbCA9PT0gJzAnID8gbnVsbCA6IGNlbGwpO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShnYW1lLmJvYXJkLnNwbGl0KCcnKS5tYXAoKGNlbGwpID0+IGNlbGwgPT09ICcwJyA/IG51bGwgOiBjZWxsKSk7XG5cbiAgY29uc3Qgb25DZWxsQ2hhbmdlZCA9IChpbmRleCwgdmFsdWUpID0+IHtcbiAgICBzZXRCb2FyZChib2FyZC5tYXAoKGNlbGwsIGkpID0+IGkgPT09IGluZGV4ID8gdmFsdWUgOiBjZWxsKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3Vkb2t1Qm9hcmRcbiAgICAgIGluaXRpYWxCb2FyZD17aW5pdGlhbEJvYXJkfVxuICAgICAgc29sdXRpb249e3NvbHV0aW9ufVxuICAgICAgYm9hcmQ9e2JvYXJkfVxuICAgICAgc2hvd1NvbHV0aW9uPVwiZmFsc2VcIlxuICAgICAgb25DZWxsQ2hhbmdlPXt0aGlzLm9uQ2VsbENoYW5nZWR9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG4vLyAgIHN0YXRlID0ge1xuLy8gICAgIGluaXRpYWxCb2FyZDogZ2FtZS5ib2FyZCxcbi8vICAgICBzb2x1dGlvbjogZ2FtZS5zb2x1dGlvbixcbi8vICAgICBib2FyZDogZ2FtZS5ib2FyZC5zcGxpdCgnJykubWFwKChjZWxsKSA9PiBjZWxsID09PSAnMCcgPyBudWxsIDogY2VsbCksXG4vLyAgICAgZGlmZmljdWx0eTogMCxcbi8vICAgICBzaG93U29sdXRpb246IGZhbHNlLFxuLy8gICB9O1xuXG4vLyAgIHRvZ2dsZVNvbHV0aW9uID0gKHNob3dTb2x1dGlvbikgPT4ge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U29sdXRpb246IHNob3dTb2x1dGlvbiB9KTtcbi8vICAgfTtcblxuLy8gICBvblJlc2V0ID0gKCkgPT4ge1xuLy8gICAgIGdhbWUgPSBjcmVhdGVHYW1lKHRoaXMuc3RhdGUuZGlmZmljdWx0eSk7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICBpbml0aWFsQm9hcmQ6IGdhbWUuYm9hcmQsXG4vLyAgICAgICBzb2x1dGlvbjogZ2FtZS5zb2x1dGlvbixcbi8vICAgICAgIGJvYXJkOiBnYW1lLmJvYXJkLnNwbGl0KCcnKS5tYXAoKGNlbGwpID0+IGNlbGwgPT09IDAgPyBudWxsIDogY2VsbCksXG4vLyAgICAgfSk7XG4vLyAgIH1cblxuLy8gICBvbkRpZmZpY3VsdHlDaGFuZ2VkID0gKGRpZmZpY3VsdHkpID0+IHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgZGlmZmljdWx0eSB9LCB0aGlzLm9uUmVzZXQpO1xuLy8gICB9XG5cbi8vICAgb25DZWxsQ2hhbmdlZCA9IChpbmRleCwgdmFsdWUpID0+IHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgIGJvYXJkOiB0aGlzLnN0YXRlLmJvYXJkLm1hcCgoY2VsbCwgaSkgPT4gaSA9PT0gaW5kZXggPyB2YWx1ZSA6IGNlbGwpXG4vLyAgICAgfSk7XG4vLyAgIH07XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGNvbnN0IHtcbi8vICAgICAgIGluaXRpYWxCb2FyZCxcbi8vICAgICAgIGJvYXJkLFxuLy8gICAgICAgc29sdXRpb24sXG4vLyAgICAgICBzaG93U29sdXRpb24sXG4vLyAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPFN1ZG9rdUJvYXJkXG4vLyAgICAgICAgIGluaXRpYWxCb2FyZD17aW5pdGlhbEJvYXJkfVxuLy8gICAgICAgICBzb2x1dGlvbj17c29sdXRpb259XG4vLyAgICAgICAgIGJvYXJkPXtib2FyZH1cbi8vICAgICAgICAgc2hvd1NvbHV0aW9uPXtzaG93U29sdXRpb259XG4vLyAgICAgICAgIG9uQ2VsbENoYW5nZT17dGhpcy5vbkNlbGxDaGFuZ2VkfVxuLy8gICAgICAgLz5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9