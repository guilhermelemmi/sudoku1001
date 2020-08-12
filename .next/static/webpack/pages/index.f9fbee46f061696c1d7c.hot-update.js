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



function SudokuBoard(props) {
  _s();

  var _this = this;

  var initialBoard = props.initialBoard,
      solution = props.solution;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialBoard),
      board = _useState[0],
      setBoard = _useState[1];

  var onCellChange = function onCellChange(index, value) {
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
        value: false ? undefined : cell,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWRva3VCb2FyZC5qcyJdLCJuYW1lcyI6WyJTdWRva3VCb2FyZCIsInByb3BzIiwiaW5pdGlhbEJvYXJkIiwic29sdXRpb24iLCJ1c2VTdGF0ZSIsImJvYXJkIiwic2V0Qm9hcmQiLCJvbkNlbGxDaGFuZ2UiLCJpbmRleCIsInZhbHVlIiwibWFwIiwiY2VsbCIsImkiLCJyZW5kZXJDZWxscyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUE7O0FBQUEsTUFDbEJDLFlBRGtCLEdBQ1NELEtBRFQsQ0FDbEJDLFlBRGtCO0FBQUEsTUFDSkMsUUFESSxHQUNTRixLQURULENBQ0pFLFFBREk7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUNGLFlBQUQsQ0FGUjtBQUFBLE1BRW5CRyxLQUZtQjtBQUFBLE1BRVpDLFFBRlk7O0FBSTFCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNyQ0gsWUFBUSxDQUFDRCxLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxhQUFhQSxDQUFDLEtBQUtKLEtBQU4sR0FBY0MsS0FBZCxHQUFzQkUsSUFBbkM7QUFBQSxLQUFWLENBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNUixLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxhQUNsQztBQUFLLGlCQUFTLEVBQUVFLDhEQUFNLENBQUNILElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsZUFBTyxFQUFDLE1BRlY7QUFHRSxrQkFBVSxFQUFDLEVBSGI7QUFJRSxVQUFFLGtCQUFXQyxDQUFYLENBSko7QUFLRSxhQUFLLEVBQUUsUUFBUVQsU0FBUixHQUFzQlEsSUFML0I7QUFNRSxpQkFBUyxFQUFDLEdBTlo7QUFPRSxnQkFBUSxFQUFFO0FBQUEsaUJBQU1KLFlBQVksQ0FBQ0ssQ0FBRCxFQUFJRCxJQUFKLENBQWxCO0FBQUEsU0FQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FEa0M7QUFBQSxLQUFWLENBQU47QUFBQSxHQUFwQjs7QUFjQSxTQUNFO0FBQUssYUFBUyxFQUFFRyw4REFBTSxDQUFDVCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VRLFdBQVcsRUFEYixDQURGO0FBS0Q7O0dBM0JRYixXOztLQUFBQSxXO0FBNkJNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOWZiZWU0NmYwNjE2OTZjMWQ3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N1ZG9rdUJvYXJkLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIFN1ZG9rdUJvYXJkKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5pdGlhbEJvYXJkLCBzb2x1dGlvbiB9ID0gcHJvcHM7XG4gIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoaW5pdGlhbEJvYXJkKTtcblxuICBjb25zdCBvbkNlbGxDaGFuZ2UgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgc2V0Qm9hcmQoYm9hcmQubWFwKChjZWxsLCBpKSA9PiBpID09PSBpbmRleCA/IHZhbHVlIDogY2VsbCkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNlbGxzID0gKCkgPT4gYm9hcmQubWFwKChjZWxsLCBpKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBhdHRlcm49XCJcXGQqXCJcbiAgICAgICAgbm92YWxpZGF0ZT1cIlwiXG4gICAgICAgIGlkPXtgaW5wdXQtJHtpfWB9XG4gICAgICAgIHZhbHVlPXtmYWxzZSA/IHNvbHV0aW9uW2ldIDogY2VsbH1cbiAgICAgICAgbWF4bGVuZ3RoPVwiMVwiXG4gICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNlbGxDaGFuZ2UoaSwgY2VsbCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9hcmR9PlxuICAgICB7cmVuZGVyQ2VsbHMoKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWRva3VCb2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=