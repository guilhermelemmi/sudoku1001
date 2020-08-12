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
    onCellChange: onCellChanged,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2FtZSIsImNyZWF0ZUdhbWUiLCJpbml0aWFsQm9hcmQiLCJib2FyZCIsInNvbHV0aW9uIiwic3BsaXQiLCJtYXAiLCJjZWxsIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInNldEJvYXJkIiwib25DZWxsQ2hhbmdlZCIsImluZGV4IiwidmFsdWUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MsbUVBQVUsQ0FBQyxDQUFELENBQXZCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHRixJQUFJLENBQUNHLEtBQTFCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHSixJQUFJLENBQUNJLFFBQXRCO0FBQ0EsSUFBTUQsS0FBSyxHQUFHSCxJQUFJLENBQUNHLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQixFQUFqQixFQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsSUFBRDtBQUFBLFNBQVVBLElBQUksS0FBSyxHQUFULEdBQWUsSUFBZixHQUFzQkEsSUFBaEM7QUFBQSxDQUF6QixDQUFkOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQ1QsSUFBSSxDQUFDRyxLQUFMLENBQVdFLEtBQVgsQ0FBaUIsRUFBakIsRUFBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLEtBQUssR0FBVCxHQUFlLElBQWYsR0FBc0JBLElBQWhDO0FBQUEsR0FBekIsQ0FBRCxDQURoQjtBQUFBLE1BQ1hKLEtBRFc7QUFBQSxNQUNKTyxRQURJOztBQUdsQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN0Q0gsWUFBUSxDQUFDUCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9PLENBQVA7QUFBQSxhQUFhQSxDQUFDLEtBQUtGLEtBQU4sR0FBY0MsS0FBZCxHQUFzQk4sSUFBbkM7QUFBQSxLQUFWLENBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLCtEQUFEO0FBQ0UsZ0JBQVksRUFBRUwsWUFEaEI7QUFFRSxZQUFRLEVBQUVFLFFBRlo7QUFHRSxTQUFLLEVBQUVELEtBSFQ7QUFJRSxnQkFBWSxFQUFDLE9BSmY7QUFLRSxnQkFBWSxFQUFFUSxhQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFTRDs7R0FoQlFILFE7O0tBQUFBLFE7QUFrQk1BLHVFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2E2MjFhM2UzODAyOTAyNmY0NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3Vkb2t1Qm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TdWRva3VCb2FyZCc7XG5pbXBvcnQgeyBjcmVhdGVHYW1lIH0gZnJvbSAnLi4vdXRpbC9zdWRva3VVdGlsJztcblxuY29uc3QgZ2FtZSA9IGNyZWF0ZUdhbWUoMCk7XG5jb25zdCBpbml0aWFsQm9hcmQgPSBnYW1lLmJvYXJkO1xuY29uc3Qgc29sdXRpb24gPSBnYW1lLnNvbHV0aW9uO1xuY29uc3QgYm9hcmQgPSBnYW1lLmJvYXJkLnNwbGl0KCcnKS5tYXAoKGNlbGwpID0+IGNlbGwgPT09ICcwJyA/IG51bGwgOiBjZWxsKTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoZ2FtZS5ib2FyZC5zcGxpdCgnJykubWFwKChjZWxsKSA9PiBjZWxsID09PSAnMCcgPyBudWxsIDogY2VsbCkpO1xuXG4gIGNvbnN0IG9uQ2VsbENoYW5nZWQgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgc2V0Qm9hcmQoYm9hcmQubWFwKChjZWxsLCBpKSA9PiBpID09PSBpbmRleCA/IHZhbHVlIDogY2VsbCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN1ZG9rdUJvYXJkXG4gICAgICBpbml0aWFsQm9hcmQ9e2luaXRpYWxCb2FyZH1cbiAgICAgIHNvbHV0aW9uPXtzb2x1dGlvbn1cbiAgICAgIGJvYXJkPXtib2FyZH1cbiAgICAgIHNob3dTb2x1dGlvbj1cImZhbHNlXCJcbiAgICAgIG9uQ2VsbENoYW5nZT17b25DZWxsQ2hhbmdlZH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIHtcbi8vICAgc3RhdGUgPSB7XG4vLyAgICAgaW5pdGlhbEJvYXJkOiBnYW1lLmJvYXJkLFxuLy8gICAgIHNvbHV0aW9uOiBnYW1lLnNvbHV0aW9uLFxuLy8gICAgIGJvYXJkOiBnYW1lLmJvYXJkLnNwbGl0KCcnKS5tYXAoKGNlbGwpID0+IGNlbGwgPT09ICcwJyA/IG51bGwgOiBjZWxsKSxcbi8vICAgICBkaWZmaWN1bHR5OiAwLFxuLy8gICAgIHNob3dTb2x1dGlvbjogZmFsc2UsXG4vLyAgIH07XG5cbi8vICAgdG9nZ2xlU29sdXRpb24gPSAoc2hvd1NvbHV0aW9uKSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dTb2x1dGlvbjogc2hvd1NvbHV0aW9uIH0pO1xuLy8gICB9O1xuXG4vLyAgIG9uUmVzZXQgPSAoKSA9PiB7XG4vLyAgICAgZ2FtZSA9IGNyZWF0ZUdhbWUodGhpcy5zdGF0ZS5kaWZmaWN1bHR5KTtcbi8vICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgIGluaXRpYWxCb2FyZDogZ2FtZS5ib2FyZCxcbi8vICAgICAgIHNvbHV0aW9uOiBnYW1lLnNvbHV0aW9uLFxuLy8gICAgICAgYm9hcmQ6IGdhbWUuYm9hcmQuc3BsaXQoJycpLm1hcCgoY2VsbCkgPT4gY2VsbCA9PT0gMCA/IG51bGwgOiBjZWxsKSxcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIG9uRGlmZmljdWx0eUNoYW5nZWQgPSAoZGlmZmljdWx0eSkgPT4ge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBkaWZmaWN1bHR5IH0sIHRoaXMub25SZXNldCk7XG4vLyAgIH1cblxuLy8gICBvbkNlbGxDaGFuZ2VkID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgYm9hcmQ6IHRoaXMuc3RhdGUuYm9hcmQubWFwKChjZWxsLCBpKSA9PiBpID09PSBpbmRleCA/IHZhbHVlIDogY2VsbClcbi8vICAgICB9KTtcbi8vICAgfTtcblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgY29uc3Qge1xuLy8gICAgICAgaW5pdGlhbEJvYXJkLFxuLy8gICAgICAgYm9hcmQsXG4vLyAgICAgICBzb2x1dGlvbixcbi8vICAgICAgIHNob3dTb2x1dGlvbixcbi8vICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8U3Vkb2t1Qm9hcmRcbi8vICAgICAgICAgaW5pdGlhbEJvYXJkPXtpbml0aWFsQm9hcmR9XG4vLyAgICAgICAgIHNvbHV0aW9uPXtzb2x1dGlvbn1cbi8vICAgICAgICAgYm9hcmQ9e2JvYXJkfVxuLy8gICAgICAgICBzaG93U29sdXRpb249e3Nob3dTb2x1dGlvbn1cbi8vICAgICAgICAgb25DZWxsQ2hhbmdlPXt0aGlzLm9uQ2VsbENoYW5nZWR9XG4vLyAgICAgICAvPlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=