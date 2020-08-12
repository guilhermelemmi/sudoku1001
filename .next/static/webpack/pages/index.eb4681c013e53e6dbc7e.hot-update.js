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

  var renderCells = function renderCells() {
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
  }, renderCells());
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWRva3VCb2FyZC5qcyJdLCJuYW1lcyI6WyJTdWRva3VCb2FyZCIsInByb3BzIiwiYm9hcmQiLCJzb2x1dGlvbiIsInNob3dTb2x1dGlvbiIsIm9uQ2VsbENoYW5nZSIsInJlbmRlckNlbGxzIiwibWFwIiwiY2VsbCIsImkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsTUFDbkJDLEtBRG1CLEdBQzZCRCxLQUQ3QixDQUNuQkMsS0FEbUI7QUFBQSxNQUNaQyxRQURZLEdBQzZCRixLQUQ3QixDQUNaRSxRQURZO0FBQUEsTUFDRkMsWUFERSxHQUM2QkgsS0FEN0IsQ0FDRkcsWUFERTtBQUFBLE1BQ1lDLFlBRFosR0FDNkJKLEtBRDdCLENBQ1lJLFlBRFo7O0FBRzNCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsYUFDbEM7QUFBSyxpQkFBUyxFQUFFQyw4REFBTSxDQUFDRixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGVBQU8sRUFBQyxNQUZWO0FBR0Usa0JBQVUsRUFBQyxFQUhiO0FBSUUsVUFBRSxrQkFBV0MsQ0FBWCxDQUpKO0FBS0UsYUFBSyxFQUFFTCxZQUFZLEdBQUdELFFBQVEsQ0FBQ00sQ0FBRCxDQUFYLEdBQWlCRCxJQUx0QztBQU1FLGlCQUFTLEVBQUMsR0FOWjtBQU9FLGdCQUFRLEVBQUU7QUFBQSxpQkFBTUgsWUFBWSxDQUFDSSxDQUFELEVBQUlELElBQUosQ0FBbEI7QUFBQSxTQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURrQztBQUFBLEtBQVYsQ0FBTjtBQUFBLEdBQXBCOztBQWNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVFLDhEQUFNLENBQUNSLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUksV0FBVyxFQURiLENBREY7QUFLRCxDQXRCRDs7S0FBTU4sVztBQXdCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWI0NjgxYzAxM2U1M2U2ZGJjN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N1ZG9rdUJvYXJkLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFN1ZG9rdUJvYXJkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGJvYXJkLCBzb2x1dGlvbiwgc2hvd1NvbHV0aW9uLCBvbkNlbGxDaGFuZ2UgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHJlbmRlckNlbGxzID0gKCkgPT4gYm9hcmQubWFwKChjZWxsLCBpKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBhdHRlcm49XCJcXGQqXCJcbiAgICAgICAgbm92YWxpZGF0ZT1cIlwiXG4gICAgICAgIGlkPXtgaW5wdXQtJHtpfWB9XG4gICAgICAgIHZhbHVlPXtzaG93U29sdXRpb24gPyBzb2x1dGlvbltpXSA6IGNlbGx9XG4gICAgICAgIG1heGxlbmd0aD1cIjFcIlxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DZWxsQ2hhbmdlKGksIGNlbGwpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvYXJkfT5cbiAgICAge3JlbmRlckNlbGxzKCl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWRva3VCb2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=