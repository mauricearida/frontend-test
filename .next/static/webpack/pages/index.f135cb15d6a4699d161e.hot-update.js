webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/maurice/Downloads/next-auth-main/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      auth = _useState2[0],\n      setAuth = _useState2[1];\n\n  var getLocalStorage = function getLocalStorage(key) {\n    return JSON.parse(localStorage.getItem(key));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!getLocalStorage(\"token\") == null) {\n      setAuth(true);\n    } else {\n      setAuth(false);\n    }\n  });\n\n  var getdDisplay = function getdDisplay() {\n    if (!getLocalStorage(\"username\") == null) {\n      console.log(\"1111\", 1111);\n      setMessage(\"Hi \".concat(getLocalStorage(\"username\")));\n    } else {\n      setMessage(\"no one is logged in\");\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getdDisplay();\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    auth: auth,\n    children: message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Home, \"fUh/2bry9KdASOJO6yCNf6nqQco=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJhdXRoIiwic2V0QXV0aCIsImdldExvY2FsU3RvcmFnZSIsImtleSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJnZXRkRGlzcGxheSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsRUFBRCxDQURUO0FBQUEsTUFDdEJDLE9BRHNCO0FBQUEsTUFDYkMsVUFEYTs7QUFBQSxtQkFFTEYsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUV0QkcsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBSTdCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsR0FBRCxFQUFjO0FBQ3BDLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJKLEdBQXJCLENBQVgsQ0FBUDtBQUNELEdBRkQ7O0FBSUFLLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ04sZUFBZSxDQUFDLE9BQUQsQ0FBaEIsSUFBNkIsSUFBakMsRUFBdUM7QUFDckNELGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxLQUZELE1BRU87QUFDTEEsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FOUSxDQUFUOztBQVFBLE1BQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSSxDQUFDUCxlQUFlLENBQUMsVUFBRCxDQUFoQixJQUFnQyxJQUFwQyxFQUEwQztBQUN4Q1EsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQixJQUFwQjtBQUNBWixnQkFBVSxjQUFPRyxlQUFlLENBQUMsVUFBRCxDQUF0QixFQUFWO0FBQ0QsS0FIRCxNQUdPO0FBQ0xILGdCQUFVLENBQUMscUJBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FQRDs7QUFTQVMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGVBQVc7QUFDWixHQUZRLENBQVQ7QUFJQSxzQkFBTyxxRUFBQyx1REFBRDtBQUFRLFFBQUksRUFBRVQsSUFBZDtBQUFBLGNBQXFCRjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0E5QnVCRixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0cy9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSAoa2V5OiBhbnkpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZ2V0TG9jYWxTdG9yYWdlKFwidG9rZW5cIikgPT0gbnVsbCkge1xuICAgICAgc2V0QXV0aCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXV0aChmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBnZXRkRGlzcGxheSA9ICgpID0+IHtcbiAgICBpZiAoIWdldExvY2FsU3RvcmFnZShcInVzZXJuYW1lXCIpID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiMTExMVwiLCAxMTExKTtcbiAgICAgIHNldE1lc3NhZ2UoYEhpICR7Z2V0TG9jYWxTdG9yYWdlKFwidXNlcm5hbWVcIil9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1lc3NhZ2UoXCJubyBvbmUgaXMgbG9nZ2VkIGluXCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldGREaXNwbGF5KCk7XG4gIH0pO1xuXG4gIHJldHVybiA8TGF5b3V0IGF1dGg9e2F1dGh9PnttZXNzYWdlfTwvTGF5b3V0Pjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})