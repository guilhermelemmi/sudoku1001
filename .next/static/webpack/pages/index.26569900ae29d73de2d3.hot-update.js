webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SudokuBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SudokuBoard */ "./components/SudokuBoard.js");



var _jsxFileName = "C:\\Users\\Windows10\\www\\sudoku1001.com.next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var Home = /*#__PURE__*/function () {
  function Home() {
    var _this = this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "state", {
      initialBoard: game.board,
      solution: game.solution,
      board: game.board.split('').map(function (cell) {
        return cell === '0' ? null : cell;
      }),
      difficulty: 0,
      showSolution: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toggleSolution", function (showSolution) {
      _this.setState({
        showSolution: showSolution
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onReset", function () {
      game = createGame(_this.state.difficulty);

      _this.setState({
        initialBoard: game.board,
        solution: game.solution,
        board: game.board.split('').map(function (cell) {
          return cell === 0 ? null : cell;
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onDifficultyChanged", function (difficulty) {
      _this.setState({
        difficulty: difficulty
      }, _this.onReset);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onCellChanged", function (index, value) {
      _this.setState({
        board: _this.state.board.map(function (cell, i) {
          return i === index ? value : cell;
        })
      });
    });
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          initialBoard = _this$state.initialBoard,
          board = _this$state.board,
          solution = _this$state.solution,
          showSolution = _this$state.showSolution;
      return __jsx(_components_SudokuBoard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        initialBoard: initialBoard,
        solution: solution,
        board: board,
        showSolution: showSolution,
        onCellChange: this.onCellChanged,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      });
    }
  }]);

  return Home;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImluaXRpYWxCb2FyZCIsImdhbWUiLCJib2FyZCIsInNvbHV0aW9uIiwic3BsaXQiLCJtYXAiLCJjZWxsIiwiZGlmZmljdWx0eSIsInNob3dTb2x1dGlvbiIsInNldFN0YXRlIiwiY3JlYXRlR2FtZSIsInN0YXRlIiwib25SZXNldCIsImluZGV4IiwidmFsdWUiLCJpIiwib25DZWxsQ2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxJOzs7Ozs7NkdBQ1g7QUFDTkMsa0JBQVksRUFBRUMsSUFBSSxDQUFDQyxLQURiO0FBRU5DLGNBQVEsRUFBRUYsSUFBSSxDQUFDRSxRQUZUO0FBR05ELFdBQUssRUFBRUQsSUFBSSxDQUFDQyxLQUFMLENBQVdFLEtBQVgsQ0FBaUIsRUFBakIsRUFBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLEtBQUssR0FBVCxHQUFlLElBQWYsR0FBc0JBLElBQWhDO0FBQUEsT0FBekIsQ0FIRDtBQUlOQyxnQkFBVSxFQUFFLENBSk47QUFLTkMsa0JBQVksRUFBRTtBQUxSLEs7O3NIQVFTLFVBQUNBLFlBQUQsRUFBa0I7QUFDakMsV0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUQsb0JBQVksRUFBRUE7QUFBaEIsT0FBZDtBQUNELEs7OytHQUVTLFlBQU07QUFDZFAsVUFBSSxHQUFHUyxVQUFVLENBQUMsS0FBSSxDQUFDQyxLQUFMLENBQVdKLFVBQVosQ0FBakI7O0FBQ0EsV0FBSSxDQUFDRSxRQUFMLENBQWM7QUFDWlQsb0JBQVksRUFBRUMsSUFBSSxDQUFDQyxLQURQO0FBRVpDLGdCQUFRLEVBQUVGLElBQUksQ0FBQ0UsUUFGSDtBQUdaRCxhQUFLLEVBQUVELElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxLQUFYLENBQWlCLEVBQWpCLEVBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxJQUFEO0FBQUEsaUJBQVVBLElBQUksS0FBSyxDQUFULEdBQWEsSUFBYixHQUFvQkEsSUFBOUI7QUFBQSxTQUF6QjtBQUhLLE9BQWQ7QUFLRCxLOzsySEFFcUIsVUFBQ0MsVUFBRCxFQUFnQjtBQUNwQyxXQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRixrQkFBVSxFQUFWQTtBQUFGLE9BQWQsRUFBOEIsS0FBSSxDQUFDSyxPQUFuQztBQUNELEs7O3FIQUVlLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNoQyxXQUFJLENBQUNMLFFBQUwsQ0FBYztBQUNaUCxhQUFLLEVBQUUsS0FBSSxDQUFDUyxLQUFMLENBQVdULEtBQVgsQ0FBaUJHLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT1MsQ0FBUDtBQUFBLGlCQUFhQSxDQUFDLEtBQUtGLEtBQU4sR0FBY0MsS0FBZCxHQUFzQlIsSUFBbkM7QUFBQSxTQUFyQjtBQURLLE9BQWQ7QUFHRCxLOzs7Ozs2QkFFUTtBQUFBLHdCQU1ILEtBQUtLLEtBTkY7QUFBQSxVQUVMWCxZQUZLLGVBRUxBLFlBRks7QUFBQSxVQUdMRSxLQUhLLGVBR0xBLEtBSEs7QUFBQSxVQUlMQyxRQUpLLGVBSUxBLFFBSks7QUFBQSxVQUtMSyxZQUxLLGVBS0xBLFlBTEs7QUFRUCxhQUNFLE1BQUMsK0RBQUQ7QUFDRSxvQkFBWSxFQUFFUixZQURoQjtBQUVFLGdCQUFRLEVBQUVHLFFBRlo7QUFHRSxhQUFLLEVBQUVELEtBSFQ7QUFJRSxvQkFBWSxFQUFFTSxZQUpoQjtBQUtFLG9CQUFZLEVBQUUsS0FBS1EsYUFMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBU0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjY1Njk5MDBhZTI5ZDczZGUyZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdWRva3VCb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1N1ZG9rdUJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG4gIHN0YXRlID0ge1xuICAgIGluaXRpYWxCb2FyZDogZ2FtZS5ib2FyZCxcbiAgICBzb2x1dGlvbjogZ2FtZS5zb2x1dGlvbixcbiAgICBib2FyZDogZ2FtZS5ib2FyZC5zcGxpdCgnJykubWFwKChjZWxsKSA9PiBjZWxsID09PSAnMCcgPyBudWxsIDogY2VsbCksXG4gICAgZGlmZmljdWx0eTogMCxcbiAgICBzaG93U29sdXRpb246IGZhbHNlLFxuICB9O1xuXG4gIHRvZ2dsZVNvbHV0aW9uID0gKHNob3dTb2x1dGlvbikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U29sdXRpb246IHNob3dTb2x1dGlvbiB9KTtcbiAgfTtcblxuICBvblJlc2V0ID0gKCkgPT4ge1xuICAgIGdhbWUgPSBjcmVhdGVHYW1lKHRoaXMuc3RhdGUuZGlmZmljdWx0eSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbml0aWFsQm9hcmQ6IGdhbWUuYm9hcmQsXG4gICAgICBzb2x1dGlvbjogZ2FtZS5zb2x1dGlvbixcbiAgICAgIGJvYXJkOiBnYW1lLmJvYXJkLnNwbGl0KCcnKS5tYXAoKGNlbGwpID0+IGNlbGwgPT09IDAgPyBudWxsIDogY2VsbCksXG4gICAgfSk7XG4gIH1cblxuICBvbkRpZmZpY3VsdHlDaGFuZ2VkID0gKGRpZmZpY3VsdHkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlmZmljdWx0eSB9LCB0aGlzLm9uUmVzZXQpO1xuICB9XG5cbiAgb25DZWxsQ2hhbmdlZCA9IChpbmRleCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJvYXJkOiB0aGlzLnN0YXRlLmJvYXJkLm1hcCgoY2VsbCwgaSkgPT4gaSA9PT0gaW5kZXggPyB2YWx1ZSA6IGNlbGwpXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGluaXRpYWxCb2FyZCxcbiAgICAgIGJvYXJkLFxuICAgICAgc29sdXRpb24sXG4gICAgICBzaG93U29sdXRpb24sXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN1ZG9rdUJvYXJkXG4gICAgICAgIGluaXRpYWxCb2FyZD17aW5pdGlhbEJvYXJkfVxuICAgICAgICBzb2x1dGlvbj17c29sdXRpb259XG4gICAgICAgIGJvYXJkPXtib2FyZH1cbiAgICAgICAgc2hvd1NvbHV0aW9uPXtzaG93U29sdXRpb259XG4gICAgICAgIG9uQ2VsbENoYW5nZT17dGhpcy5vbkNlbGxDaGFuZ2VkfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==