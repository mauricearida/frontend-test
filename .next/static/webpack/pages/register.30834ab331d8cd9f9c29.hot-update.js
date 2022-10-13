webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvar _jsxFileName = \"/home/maurice/Downloads/next-auth-main/pages/register.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Register = function Register() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var signup = /*#__PURE__*/function () {\n    var _ref = Object(_home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {\n      var config, response;\n      return _home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              config = {\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                }\n              };\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:5000/api/auth/register\", data, config);\n\n            case 3:\n              response = _context.sent;\n              return _context.abrupt(\"return\", response);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function signup(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var submit = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n      var data;\n      return _home_maurice_Downloads_next_auth_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault(); // await fetch('http://localhost:8000/api/register', {\n              //     method: \"POST\",\n              //     headers: {'Content-Type': 'application/json'},\n              //     body: JSON.stringify({\n              //         username,\n              //         password\n              //     })\n              // });\n\n              data = {\n                username: username,\n                password: password\n              };\n              console.log(\"data\", data);\n              signup(data).then(function (response) {\n                console.log(\"response\", response);\n              })[\"catch\"](function (err) {\n                console.log(\"signn api function error: \", err);\n              });\n              _context2.next = 6;\n              return router.push(\"/login\");\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function submit(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"h3 mb-3 fw-normal\",\n        children: \"Please register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        className: \"form-control\",\n        placeholder: \"Name\",\n        required: true,\n        onChange: function onChange(e) {\n          return setUsername(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        className: \"form-control\",\n        placeholder: \"Password\",\n        required: true,\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"w-100 btn btn-lg btn-primary\",\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Register, \"7gxhDiGOEfn2+qVueUJLEh8wrTY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4P2UzZmQiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwIiwiZGF0YSIsImNvbmZpZyIsImhlYWRlcnMiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwiZXJyIiwicHVzaCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxFQUFELENBRG5CO0FBQUEsTUFDZEMsUUFEYztBQUFBLE1BQ0pDLFdBREk7O0FBQUEsbUJBR1dGLHNEQUFRLENBQUMsRUFBRCxDQUhuQjtBQUFBLE1BR2RHLFFBSGM7QUFBQSxNQUdKQyxXQUhJOztBQUlyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLE1BQU07QUFBQSxzU0FBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUEMsb0JBRE8sR0FDRTtBQUNiQyx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFESSxlQURGO0FBQUE7QUFBQSxxQkFPVUMsNkNBQUssQ0FBQ0MsSUFBTixDQUNyQix5Q0FEcUIsRUFFckJKLElBRnFCLEVBR3JCQyxNQUhxQixDQVBWOztBQUFBO0FBT1BJLHNCQVBPO0FBQUEsK0NBYU5BLFFBYk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTk4sTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQWdCQSxNQUFNTyxNQUFNO0FBQUEsdVNBQUcsa0JBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JBLGVBQUMsQ0FBQ0MsY0FBRixHQURhLENBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTVIsa0JBYk8sR0FhQTtBQUFFUCx3QkFBUSxFQUFSQSxRQUFGO0FBQVlFLHdCQUFRLEVBQVJBO0FBQVosZUFiQTtBQWNiYyxxQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlYsSUFBcEI7QUFFQUQsb0JBQU0sQ0FBQ0MsSUFBRCxDQUFOLENBQ0dXLElBREgsQ0FDUSxVQUFDTixRQUFELEVBQWM7QUFDbEJJLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCTCxRQUF4QjtBQUNELGVBSEgsV0FJUyxVQUFDTyxHQUFELEVBQVM7QUFDZEgsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaLEVBQTBDRSxHQUExQztBQUNELGVBTkg7QUFoQmE7QUFBQSxxQkF3QlBmLE1BQU0sQ0FBQ2dCLElBQVAsQ0FBWSxRQUFaLENBeEJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5QLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUEyQkEsc0JBQ0UscUVBQUMsdURBQUQ7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRUEsTUFBaEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQ0UsaUJBQVMsRUFBQyxjQURaO0FBRUUsbUJBQVcsRUFBQyxNQUZkO0FBR0UsZ0JBQVEsTUFIVjtBQUlFLGdCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxpQkFBT2IsV0FBVyxDQUFDYSxDQUFDLENBQUNPLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBU0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFTLEVBQUMsY0FGWjtBQUdFLG1CQUFXLEVBQUMsVUFIZDtBQUlFLGdCQUFRLE1BSlY7QUFLRSxnQkFBUSxFQUFFLGtCQUFDUixDQUFEO0FBQUEsaUJBQU9YLFdBQVcsQ0FBQ1csQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQWlCRTtBQUFRLGlCQUFTLEVBQUMsOEJBQWxCO0FBQWlELFlBQUksRUFBQyxRQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0ExRUQ7O0dBQU14QixRO1VBSVdPLHFEOzs7S0FKWFAsUTtBQTRFU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNpZ251cCA9IGFzeW5jIChkYXRhOiBhbnkpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2F1dGgvcmVnaXN0ZXJcIixcbiAgICAgIGRhdGEsXG4gICAgICBjb25maWdcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyJywge1xuICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIC8vICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAvLyAgICAgICAgIHVzZXJuYW1lLFxuXG4gICAgLy8gICAgICAgICBwYXNzd29yZFxuICAgIC8vICAgICB9KVxuICAgIC8vIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgc2lnbnVwKGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWdubiBhcGkgZnVuY3Rpb24gZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgfSk7XG5cbiAgICBhd2FpdCByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgzIG1iLTMgZnctbm9ybWFsXCI+UGxlYXNlIHJlZ2lzdGVyPC9oMT5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEwMCBidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.tsx\n");

/***/ })

})