"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/albums",{

/***/ "./pages/albums/index.tsx":
/*!********************************!*\
  !*** ./pages/albums/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons_lib_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SearchOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SearchOutlined.js\");\n/* harmony import */ var _refinedev_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @refinedev/antd */ \"./node_modules/@refinedev/antd/dist/esm/index.js\");\n/* harmony import */ var _refinedev_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @refinedev/core */ \"./node_modules/@refinedev/core/dist/esm/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select */ \"./node_modules/antd/lib/select/index.js\");\n/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/space */ \"./node_modules/antd/lib/space/index.js\");\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/table */ \"./node_modules/antd/lib/table/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Posts() {\n    var _searchFormProps_form;\n    _s();\n    const { tableProps, searchFormProps } = (0,_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.useTable)({\n        onSearch: (value)=>{\n            return [\n                {\n                    field: \"name\",\n                    operator: \"eq\",\n                    value: value.name\n                }\n            ];\n        }\n    });\n    const { selectProps } = (0,_refinedev_core__WEBPACK_IMPORTED_MODULE_3__.useSelect)({\n        resource: \"singers\",\n        optionLabel: \"name\",\n        optionValue: \"_id\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.List, {\n        title: \"A\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                ...searchFormProps,\n                style: {\n                    marginBottom: 10\n                },\n                layout: \"inline\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                        name: \"name\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"T\\xecm kiếm...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, void 0, void 0),\n                        htmlType: \"submit\",\n                        value: \"small\",\n                        type: \"primary\",\n                        onClick: (_searchFormProps_form = searchFormProps.form) === null || _searchFormProps_form === void 0 ? void 0 : _searchFormProps_form.submit\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                ...tableProps,\n                rowKey: \"_id\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Column, {\n                        dataIndex: \"name\",\n                        title: \"Album\",\n                        width: 150\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Column, {\n                        width: 200,\n                        dataIndex: \"description\",\n                        title: \"M\\xf4 Tả Ngắn\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Column, {\n                        dataIndex: \"image\",\n                        title: \"Ảnh Nhỏ\",\n                        width: 200,\n                        render: (_, value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.ImageField, {\n                                value: \"http://localhost:3000/\".concat(value.image),\n                                width: 50\n                            }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Column, {\n                        // dataIndex={\"likes\"}\n                        title: \"Y\\xeau th\\xedch\",\n                        width: 250,\n                        render: (value)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: value.likes.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.TagField, {\n                                        value: item.name\n                                    }, void 0, false, void 0, void 0);\n                                })\n                            }, void 0, false, void 0, void 0);\n                        }\n                    }, \"likes\", false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Column, {\n                        // dataIndex=\"categories\"\n                        title: \"Ca Sĩ Thể Hiện\",\n                        // dataIndex={[\"categories\", \"_id\"]}\n                        width: 230,\n                        filterDropdown: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.FilterDropdown, {\n                                ...props,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_select__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    mode: \"multiple\",\n                                    placeholder: \"Ca sĩ ..\",\n                                    ...selectProps,\n                                    style: {\n                                        minWidth: 200\n                                    }\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                        render: (value)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: value.singers.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.TagField, {\n                                        value: item.name\n                                    }, void 0, false, void 0, void 0);\n                                })\n                            }, void 0, false, void 0, void 0);\n                        }\n                    }, \"singer\", false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Column, {\n                        dataIndex: \"createdAt\",\n                        width: 120,\n                        title: \"Ngày tạo\",\n                        render: (value)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.DateField, {\n                                value: value,\n                                format: \"HH:mm - DD/MM/YYYY\"\n                            }, void 0, false, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Column, {\n                        dataIndex: \"actions\",\n                        title: \"Thao t\\xe1c\",\n                        width: 50,\n                        render: (value, record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_space__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.EditButton, {\n                                        hideText: true,\n                                        size: \"small\",\n                                        recordItemId: record._id\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {\n                                        hideText: true,\n                                        size: \"small\",\n                                        recordItemId: record._id\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Posts, \"xwi9566si03MprbvP1fuoQK8H9o=\", false, function() {\n    return [\n        _refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.useTable,\n        _refinedev_core__WEBPACK_IMPORTED_MODULE_3__.useSelect\n    ];\n});\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRLENBQUN4Qjs0QkFDUCxxQkFBTyw4REFBQ3JCLHNEQUFTQTtnQ0FBQ3FCLE9BQU9BO2dDQUFPbUMsUUFBTzs7d0JBQ3pDOzs7Ozs7a0NBRUYsOERBQUN6Qyw2REFBWTt3QkFDWDRCLFdBQVU7d0JBQ1ZkLE9BQU07d0JBQ05lLE9BQU87d0JBQ1BDLFFBQVEsQ0FBQ3hCLE9BQU9vQyx1QkFDZCw4REFBQzNDLHVEQUFLQTs7a0RBQ0osOERBQUNaLHVEQUFVQTt3Q0FBQ3dELFFBQVE7d0NBQUNDLE1BQUs7d0NBQVFDLGNBQWNILE9BQU9JLEdBQUc7O2tEQUMxRCw4REFBQzVELHlEQUFZQTt3Q0FBQ3lELFFBQVE7d0NBQUNDLE1BQUs7d0NBQVFDLGNBQWNILE9BQU9JLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xRTtHQXRHd0I1Qzs7UUFDa0JaLHFEQUFRQTtRQUt4Qkksc0RBQVNBOzs7S0FOWFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxidW1zL2luZGV4LnRzeD82NjhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZUZpZWxkLFxyXG4gIERlbGV0ZUJ1dHRvbixcclxuICBFZGl0QnV0dG9uLFxyXG4gIEltYWdlRmllbGQsXHJcbiAgTGlzdCxcclxuICB1c2VUYWJsZSxcclxuICBUZXh0RmllbGQsXHJcbiAgVGFnRmllbGQsXHJcbiAgRmlsdGVyRHJvcGRvd24sXHJcbn0gZnJvbSBcIkByZWZpbmVkZXYvYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tIFwiQHJlZmluZWRldi9jb3JlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIFNlbGVjdCwgU3BhY2UsIFRhYmxlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdXRoUHJvdmlkZXIgfSBmcm9tIFwic3JjL2F1dGhQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBJQWxidW0sIElQb3N0cywgSVNpbmdlciwgSVVzZXIgfSBmcm9tIFwic3JjL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gIGNvbnN0IHsgdGFibGVQcm9wcywgc2VhcmNoRm9ybVByb3BzIH0gPSB1c2VUYWJsZTxJVXNlcj4oe1xyXG4gICAgb25TZWFyY2g6ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiBbeyBmaWVsZDogXCJuYW1lXCIsIG9wZXJhdG9yOiBcImVxXCIsIHZhbHVlOiB2YWx1ZS5uYW1lIH1dO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCB7IHNlbGVjdFByb3BzIH0gPSB1c2VTZWxlY3Q8SVNpbmdlcj4oe1xyXG4gICAgcmVzb3VyY2U6IFwic2luZ2Vyc1wiLFxyXG4gICAgb3B0aW9uTGFiZWw6IFwibmFtZVwiLFxyXG4gICAgb3B0aW9uVmFsdWU6IFwiX2lkXCIsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IHRpdGxlPVwiQVwiPlxyXG4gICAgICA8Rm9ybSB7Li4uc2VhcmNoRm9ybVByb3BzfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19IGxheW91dD1cImlubGluZVwiPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlTDrG0ga2nhur9tLi4uXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBpY29uPXs8U2VhcmNoT3V0bGluZWQgLz59XHJcbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICB2YWx1ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3NlYXJjaEZvcm1Qcm9wcy5mb3JtPy5zdWJtaXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8VGFibGUgey4uLnRhYmxlUHJvcHN9IHJvd0tleT1cIl9pZFwiPlxyXG4gICAgICAgIDxUYWJsZS5Db2x1bW4gZGF0YUluZGV4PVwibmFtZVwiIHRpdGxlPVwiQWxidW1cIiB3aWR0aD17MTUwfT48L1RhYmxlLkNvbHVtbj5cclxuICAgICAgICA8VGFibGUuQ29sdW1uIHdpZHRoPXsyMDB9IGRhdGFJbmRleD1cImRlc2NyaXB0aW9uXCIgdGl0bGU9XCJNw7QgVOG6oyBOZ+G6r25cIiAvPlxyXG4gICAgICAgIDxUYWJsZS5Db2x1bW48SUFsYnVtPlxyXG4gICAgICAgICAgZGF0YUluZGV4PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgdGl0bGU9XCLhuqJuaCBOaOG7j1wiXHJcbiAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgcmVuZGVyPXsoXywgdmFsdWUpID0+IChcclxuICAgICAgICAgICAgPEltYWdlRmllbGRcclxuICAgICAgICAgICAgICB2YWx1ZT17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ke3ZhbHVlLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUYWJsZS5Db2x1bW5cclxuICAgICAgICAgIC8vIGRhdGFJbmRleD17XCJsaWtlc1wifVxyXG4gICAgICAgICAgdGl0bGU9XCJZw6p1IHRow61jaFwiXHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAga2V5PVwibGlrZXNcIlxyXG4gICAgICAgICAgcmVuZGVyPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUubGlrZXMubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUYWdGaWVsZCB2YWx1ZT17aXRlbS5uYW1lfSAvPjtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRhYmxlLkNvbHVtblxyXG4gICAgICAgICAgLy8gZGF0YUluZGV4PVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICB0aXRsZT1cIkNhIFPEqSBUaOG7gyBIaeG7h25cIlxyXG4gICAgICAgICAgLy8gZGF0YUluZGV4PXtbXCJjYXRlZ29yaWVzXCIsIFwiX2lkXCJdfVxyXG4gICAgICAgICAgd2lkdGg9ezIzMH1cclxuICAgICAgICAgIGtleT1cInNpbmdlclwiXHJcbiAgICAgICAgICBmaWx0ZXJEcm9wZG93bj17KHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxGaWx0ZXJEcm9wZG93biB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhIHPEqSAuLlwiXHJcbiAgICAgICAgICAgICAgICB7Li4uc2VsZWN0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9GaWx0ZXJEcm9wZG93bj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZW5kZXI9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5zaW5nZXJzLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFnRmllbGQgdmFsdWU9e2l0ZW0ubmFtZX0gLz47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUYWJsZS5Db2x1bW5cclxuICAgICAgICAgIGRhdGFJbmRleD1cImNyZWF0ZWRBdFwiXHJcbiAgICAgICAgICB3aWR0aD17MTIwfVxyXG4gICAgICAgICAgdGl0bGU9XCJOZ2HMgHkgdGHMo29cIlxyXG4gICAgICAgICAgcmVuZGVyPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxEYXRlRmllbGQgdmFsdWU9e3ZhbHVlfSBmb3JtYXQ9XCJISDptbSAtIEREL01NL1lZWVlcIiAvPjtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGFibGUuQ29sdW1uPElQb3N0cz5cclxuICAgICAgICAgIGRhdGFJbmRleD1cImFjdGlvbnNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJUaGFvIHTDoWNcIlxyXG4gICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgcmVuZGVyPXsodmFsdWUsIHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICA8U3BhY2U+XHJcbiAgICAgICAgICAgICAgPEVkaXRCdXR0b24gaGlkZVRleHQgc2l6ZT1cInNtYWxsXCIgcmVjb3JkSXRlbUlkPXtyZWNvcmQuX2lkfSAvPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVCdXR0b24gaGlkZVRleHQgc2l6ZT1cInNtYWxsXCIgcmVjb3JkSXRlbUlkPXtyZWNvcmQuX2lkfSAvPlxyXG4gICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7fT4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aGVudGljYXRlZCwgcmVkaXJlY3RUbyB9ID0gYXdhaXQgYXV0aFByb3ZpZGVyLmNoZWNrKGNvbnRleHQpO1xyXG5cclxuICBpZiAoIWF1dGhlbnRpY2F0ZWQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7fSxcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogYCR7cmVkaXJlY3RUb30/dG89JHtlbmNvZGVVUklDb21wb25lbnQoXCIvcG9zdHNcIil9YCxcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge30sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlNlYXJjaE91dGxpbmVkIiwiRGF0ZUZpZWxkIiwiRGVsZXRlQnV0dG9uIiwiRWRpdEJ1dHRvbiIsIkltYWdlRmllbGQiLCJMaXN0IiwidXNlVGFibGUiLCJUZXh0RmllbGQiLCJUYWdGaWVsZCIsIkZpbHRlckRyb3Bkb3duIiwidXNlU2VsZWN0IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiU2VsZWN0IiwiU3BhY2UiLCJUYWJsZSIsIlJlYWN0IiwiUG9zdHMiLCJzZWFyY2hGb3JtUHJvcHMiLCJ0YWJsZVByb3BzIiwib25TZWFyY2giLCJ2YWx1ZSIsImZpZWxkIiwib3BlcmF0b3IiLCJuYW1lIiwic2VsZWN0UHJvcHMiLCJyZXNvdXJjZSIsIm9wdGlvbkxhYmVsIiwib3B0aW9uVmFsdWUiLCJ0aXRsZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwibGF5b3V0IiwiSXRlbSIsInBsYWNlaG9sZGVyIiwiaWNvbiIsImh0bWxUeXBlIiwidHlwZSIsIm9uQ2xpY2siLCJmb3JtIiwic3VibWl0Iiwicm93S2V5IiwiQ29sdW1uIiwiZGF0YUluZGV4Iiwid2lkdGgiLCJyZW5kZXIiLCJfIiwiaW1hZ2UiLCJsaWtlcyIsIm1hcCIsIml0ZW0iLCJmaWx0ZXJEcm9wZG93biIsInByb3BzIiwibW9kZSIsIm1pbldpZHRoIiwic2luZ2VycyIsImZvcm1hdCIsInJlY29yZCIsImhpZGVUZXh0Iiwic2l6ZSIsInJlY29yZEl0ZW1JZCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/albums/index.tsx\n"));

/***/ })

});