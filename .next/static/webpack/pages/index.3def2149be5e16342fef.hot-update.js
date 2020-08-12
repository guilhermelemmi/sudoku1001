webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SudokuBoard.js":
/*!***********************************!*\
  !*** ./components/SudokuBoard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SudokuBoard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SudokuBoard.module.css */ "./components/SudokuBoard.module.css");
/* harmony import */ var _SudokuBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SudokuBoard_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Windows10\\www\\sudoku1001.com.next\\components\\SudokuBoard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SudokuBoard = function SudokuBoard(props) {
  var board = props.board,
      solution = props.solution,
      showSolution = props.showSolution,
      onCellChange = props.onCellChange;

  var renderBoard = function renderBoard() {
    return board.map(function (cell, i) {
      return __jsx("div", {
        className: _SudokuBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cell,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 5
        }
      }, __jsx("input", {
        type: "text",
        pattern: "\\d*",
        novalidate: "",
        id: "input-".concat(i),
        value: showSolution ? solution[i] : cell,
        maxlength: "1",
        onChange: function onChange() {
          return onCellChange(i, cell);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 7
        }
      }));
    });
  };

  return __jsx("div", {
    className: _SudokuBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.board,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, renderBoard());
}; // const SudokuBoard = ({ board, solution, showSolution, onCellChange }) => (
//   <div className="board">
//     {
//       board.map((cell, i) => {
//         return (
//           <div className="cell">
//             <input
//               type="text"
//               pattern="\d*"
//               novalidate=""
//               id={`input-${i}`}
//               value={showSolution ? solution[i] : cell}
//               maxlength="1"
//               onChange={() => onCellChange(i, cell)}
//             />
//           </div>
//         )
//       })
//     }
//   </div>
// );


_c = SudokuBoard;
/* harmony default export */ __webpack_exports__["default"] = (SudokuBoard);

var _c;

$RefreshReg$(_c, "SudokuBoard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWRva3VCb2FyZC5qcyJdLCJuYW1lcyI6WyJTdWRva3VCb2FyZCIsInByb3BzIiwiYm9hcmQiLCJzb2x1dGlvbiIsInNob3dTb2x1dGlvbiIsIm9uQ2VsbENoYW5nZSIsInJlbmRlckJvYXJkIiwibWFwIiwiY2VsbCIsImkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsTUFDbkJDLEtBRG1CLEdBQzZCRCxLQUQ3QixDQUNuQkMsS0FEbUI7QUFBQSxNQUNaQyxRQURZLEdBQzZCRixLQUQ3QixDQUNaRSxRQURZO0FBQUEsTUFDRkMsWUFERSxHQUM2QkgsS0FEN0IsQ0FDRkcsWUFERTtBQUFBLE1BQ1lDLFlBRFosR0FDNkJKLEtBRDdCLENBQ1lJLFlBRFo7O0FBRzNCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsYUFDbEM7QUFBSyxpQkFBUyxFQUFFQyw4REFBTSxDQUFDRixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGVBQU8sRUFBQyxNQUZWO0FBR0Usa0JBQVUsRUFBQyxFQUhiO0FBSUUsVUFBRSxrQkFBV0MsQ0FBWCxDQUpKO0FBS0UsYUFBSyxFQUFFTCxZQUFZLEdBQUdELFFBQVEsQ0FBQ00sQ0FBRCxDQUFYLEdBQWlCRCxJQUx0QztBQU1FLGlCQUFTLEVBQUMsR0FOWjtBQU9FLGdCQUFRLEVBQUU7QUFBQSxpQkFBTUgsWUFBWSxDQUFDSSxDQUFELEVBQUlELElBQUosQ0FBbEI7QUFBQSxTQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURrQztBQUFBLEtBQVYsQ0FBTjtBQUFBLEdBQXBCOztBQWNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVFLDhEQUFNLENBQUNSLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUksV0FBVyxFQURiLENBREY7QUFLRCxDQXRCRCxDLENBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBNUNNTixXO0FBOENTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZGVmMjE0OWJlNWUxNjM0MmZlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Vkb2t1Qm9hcmQubW9kdWxlLmNzcydcblxuY29uc3QgU3Vkb2t1Qm9hcmQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYm9hcmQsIHNvbHV0aW9uLCBzaG93U29sdXRpb24sIG9uQ2VsbENoYW5nZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcmVuZGVyQm9hcmQgPSAoKSA9PiBib2FyZC5tYXAoKGNlbGwsIGkpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGF0dGVybj1cIlxcZCpcIlxuICAgICAgICBub3ZhbGlkYXRlPVwiXCJcbiAgICAgICAgaWQ9e2BpbnB1dC0ke2l9YH1cbiAgICAgICAgdmFsdWU9e3Nob3dTb2x1dGlvbiA/IHNvbHV0aW9uW2ldIDogY2VsbH1cbiAgICAgICAgbWF4bGVuZ3RoPVwiMVwiXG4gICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNlbGxDaGFuZ2UoaSwgY2VsbCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9hcmR9PlxuICAgICB7cmVuZGVyQm9hcmQoKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIGNvbnN0IFN1ZG9rdUJvYXJkID0gKHsgYm9hcmQsIHNvbHV0aW9uLCBzaG93U29sdXRpb24sIG9uQ2VsbENoYW5nZSB9KSA9PiAoXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbi8vICAgICB7XG4vLyAgICAgICBib2FyZC5tYXAoKGNlbGwsIGkpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cbi8vICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgICAgIHBhdHRlcm49XCJcXGQqXCJcbi8vICAgICAgICAgICAgICAgbm92YWxpZGF0ZT1cIlwiXG4vLyAgICAgICAgICAgICAgIGlkPXtgaW5wdXQtJHtpfWB9XG4vLyAgICAgICAgICAgICAgIHZhbHVlPXtzaG93U29sdXRpb24gPyBzb2x1dGlvbltpXSA6IGNlbGx9XG4vLyAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjFcIlxuLy8gICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DZWxsQ2hhbmdlKGksIGNlbGwpfVxuLy8gICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgKVxuLy8gICAgICAgfSlcbi8vICAgICB9XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuZXhwb3J0IGRlZmF1bHQgU3Vkb2t1Qm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9