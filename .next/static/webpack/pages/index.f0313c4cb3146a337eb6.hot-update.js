webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/maurice/Downloads/next-auth-main/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      auth = _useState2[0],\n      setAuth = _useState2[1];\n\n  var getLocalStorage = function getLocalStorage(key) {\n    return JSON.parse(localStorage.getItem(key));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (getLocalStorage(\"token\")) {\n      setAuth(true);\n    } else {\n      setAuth(false);\n    }\n  });\n\n  var getdDisplay = function getdDisplay() {\n    setTimeout(function () {\n      if (getLocalStorage(\"username\")) {\n        console.log(\"1111\");\n        setMessage(\"Hi \".concat(getLocalStorage(\"username\")));\n        console.log('getLocalStorage(\"username\")', getLocalStorage(\"username\"));\n      } else {\n        console.log(\"22222\");\n        setMessage(\"no one is logged in\");\n        console.log('getLocalStorage(\"username\")', getLocalStorage(\"username\"));\n      }\n    }, 750);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getdDisplay();\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    auth: auth,\n    children: message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Home, \"fUh/2bry9KdASOJO6yCNf6nqQco=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJhdXRoIiwic2V0QXV0aCIsImdldExvY2FsU3RvcmFnZSIsImtleSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJnZXRkRGlzcGxheSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLEVBQUQsQ0FEVDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFVBRGE7O0FBQUEsbUJBRUxGLHNEQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFdEJHLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUk3QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEdBQUQsRUFBYztBQUNwQyxXQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCSixHQUFyQixDQUFYLENBQVA7QUFDRCxHQUZEOztBQUlBSyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixlQUFlLENBQUMsT0FBRCxDQUFuQixFQUE4QjtBQUM1QkQsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMQSxhQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0Q7QUFDRixHQU5RLENBQVQ7O0FBUUEsTUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsY0FBVSxDQUFDLFlBQU07QUFDZixVQUFJUixlQUFlLENBQUMsVUFBRCxDQUFuQixFQUFpQztBQUMvQlMsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBYixrQkFBVSxjQUFPRyxlQUFlLENBQUMsVUFBRCxDQUF0QixFQUFWO0FBQ0FTLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDVixlQUFlLENBQUMsVUFBRCxDQUExRDtBQUNELE9BSkQsTUFJTztBQUNMUyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FiLGtCQUFVLENBQUMscUJBQUQsQ0FBVjtBQUNBWSxlQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ1YsZUFBZSxDQUFDLFVBQUQsQ0FBMUQ7QUFDRDtBQUNGLEtBVlMsRUFVUCxHQVZPLENBQVY7QUFXRCxHQVpEOztBQWNBTSx5REFBUyxDQUFDLFlBQU07QUFDZEMsZUFBVztBQUNaLEdBRlEsQ0FBVDtBQUlBLHNCQUFPLHFFQUFDLHVEQUFEO0FBQVEsUUFBSSxFQUFFVCxJQUFkO0FBQUEsY0FBcUJGO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQW5DdUJGLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldExvY2FsU3RvcmFnZSA9IChrZXk6IGFueSkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdldExvY2FsU3RvcmFnZShcInRva2VuXCIpKSB7XG4gICAgICBzZXRBdXRoKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBdXRoKGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGdldGREaXNwbGF5ID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGdldExvY2FsU3RvcmFnZShcInVzZXJuYW1lXCIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTExMVwiKTtcbiAgICAgICAgc2V0TWVzc2FnZShgSGkgJHtnZXRMb2NhbFN0b3JhZ2UoXCJ1c2VybmFtZVwiKX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldExvY2FsU3RvcmFnZShcInVzZXJuYW1lXCIpJywgZ2V0TG9jYWxTdG9yYWdlKFwidXNlcm5hbWVcIikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIyMjIyMlwiKTtcbiAgICAgICAgc2V0TWVzc2FnZShcIm5vIG9uZSBpcyBsb2dnZWQgaW5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRMb2NhbFN0b3JhZ2UoXCJ1c2VybmFtZVwiKScsIGdldExvY2FsU3RvcmFnZShcInVzZXJuYW1lXCIpKTtcbiAgICAgIH1cbiAgICB9LCA3NTApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0ZERpc3BsYXkoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIDxMYXlvdXQgYXV0aD17YXV0aH0+e21lc3NhZ2V9PC9MYXlvdXQ+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})