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
var _jsxFileName = "C:\\Users\\Windows10\\www\\sudoku1001.com.next\\components\\SudokuBoard.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SudokuBoard() {
  _s();

  var _this = this;

  var _props = props,
      initialBoard = _props.initialBoard,
      solution = _props.solution,
      showSolution = _props.showSolution;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialBoard),
      board = _useState[0],
      setBoard = _useState[1];

  var onCellChanged = function onCellChanged(index, value) {
    setBoard(board.map(function (cell, i) {
      return i === index ? value : cell;
    }));
  };

  var renderCells = function renderCells() {
    return board.map(function (cell, i) {
      return __jsx("div", {
        className: _SudokuBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cell,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
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
          lineNumber: 15,
          columnNumber: 7
        }
      }));
    });
  };

  return __jsx("div", {
    className: _SudokuBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.board,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, renderCells());
}

_s(SudokuBoard, "axTAhf4o3lAgoZdxqAh2v6N6g60=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWRva3VCb2FyZC5qcyJdLCJuYW1lcyI6WyJTdWRva3VCb2FyZCIsInByb3BzIiwiaW5pdGlhbEJvYXJkIiwic29sdXRpb24iLCJzaG93U29sdXRpb24iLCJ1c2VTdGF0ZSIsImJvYXJkIiwic2V0Qm9hcmQiLCJvbkNlbGxDaGFuZ2VkIiwiaW5kZXgiLCJ2YWx1ZSIsIm1hcCIsImNlbGwiLCJpIiwicmVuZGVyQ2VsbHMiLCJzdHlsZXMiLCJvbkNlbGxDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQUEsZUFDNEJDLEtBRDVCO0FBQUEsTUFDYkMsWUFEYSxVQUNiQSxZQURhO0FBQUEsTUFDQ0MsUUFERCxVQUNDQSxRQUREO0FBQUEsTUFDV0MsWUFEWCxVQUNXQSxZQURYOztBQUFBLGtCQUVLQyxzREFBUSxDQUFDSCxZQUFELENBRmI7QUFBQSxNQUVkSSxLQUZjO0FBQUEsTUFFUEMsUUFGTzs7QUFJckIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDdENILFlBQVEsQ0FBQ0QsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsYUFBYUEsQ0FBQyxLQUFLSixLQUFOLEdBQWNDLEtBQWQsR0FBc0JFLElBQW5DO0FBQUEsS0FBVixDQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTVIsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsYUFDbEM7QUFBSyxpQkFBUyxFQUFFRSw4REFBTSxDQUFDSCxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGVBQU8sRUFBQyxNQUZWO0FBR0Usa0JBQVUsRUFBQyxFQUhiO0FBSUUsVUFBRSxrQkFBV0MsQ0FBWCxDQUpKO0FBS0UsYUFBSyxFQUFFVCxZQUFZLEdBQUdELFFBQVEsQ0FBQ1UsQ0FBRCxDQUFYLEdBQWlCRCxJQUx0QztBQU1FLGlCQUFTLEVBQUMsR0FOWjtBQU9FLGdCQUFRLEVBQUU7QUFBQSxpQkFBTUksWUFBWSxDQUFDSCxDQUFELEVBQUlELElBQUosQ0FBbEI7QUFBQSxTQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURrQztBQUFBLEtBQVYsQ0FBTjtBQUFBLEdBQXBCOztBQWNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVHLDhEQUFNLENBQUNULEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVEsV0FBVyxFQURiLENBREY7QUFLRDs7R0EzQlFkLFc7O0tBQUFBLFc7QUE2Qk1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk0N2ZiNTY3M2ZiMWJmYWJmNjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Vkb2t1Qm9hcmQubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gU3Vkb2t1Qm9hcmQoKSB7XG4gIGNvbnN0IHsgaW5pdGlhbEJvYXJkLCBzb2x1dGlvbiwgc2hvd1NvbHV0aW9uIH0gPSBwcm9wcztcbiAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShpbml0aWFsQm9hcmQpO1xuXG4gIGNvbnN0IG9uQ2VsbENoYW5nZWQgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgc2V0Qm9hcmQoYm9hcmQubWFwKChjZWxsLCBpKSA9PiBpID09PSBpbmRleCA/IHZhbHVlIDogY2VsbCkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNlbGxzID0gKCkgPT4gYm9hcmQubWFwKChjZWxsLCBpKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBhdHRlcm49XCJcXGQqXCJcbiAgICAgICAgbm92YWxpZGF0ZT1cIlwiXG4gICAgICAgIGlkPXtgaW5wdXQtJHtpfWB9XG4gICAgICAgIHZhbHVlPXtzaG93U29sdXRpb24gPyBzb2x1dGlvbltpXSA6IGNlbGx9XG4gICAgICAgIG1heGxlbmd0aD1cIjFcIlxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DZWxsQ2hhbmdlKGksIGNlbGwpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvYXJkfT5cbiAgICAge3JlbmRlckNlbGxzKCl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vkb2t1Qm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9