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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons_lib_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SearchOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SearchOutlined.js\");\n/* harmony import */ var _refinedev_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @refinedev/antd */ \"./node_modules/@refinedev/antd/dist/esm/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/space */ \"./node_modules/antd/lib/space/index.js\");\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/table */ \"./node_modules/antd/lib/table/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Posts() {\n    var _searchFormProps_form;\n    _s();\n    const { tableProps, searchFormProps } = (0,_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.useTable)({\n        onSearch: (value)=>{\n            return [\n                {\n                    field: \"name\",\n                    operator: \"eq\",\n                    value: value.name\n                }\n            ];\n        }\n    });\n    // const { selectProps } = useSelect<IUser>({\n    //   resource: \"users\",\n    //   optionLabel: \"name\",\n    //   optionValue: \"_id\",\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.List, {\n        title: \"Người d\\xf9ng\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                ...searchFormProps,\n                style: {\n                    marginBottom: 10\n                },\n                layout: \"inline\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        name: \"name\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            placeholder: \"T\\xecm kiếm...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, void 0, void 0),\n                        htmlType: \"submit\",\n                        value: \"small\",\n                        type: \"primary\",\n                        onClick: (_searchFormProps_form = searchFormProps.form) === null || _searchFormProps_form === void 0 ? void 0 : _searchFormProps_form.submit\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                ...tableProps,\n                rowKey: \"_id\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Column, {\n                        dataIndex: \"name\",\n                        title: \"\",\n                        width: 150\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Column, {\n                        width: 200,\n                        dataIndex: \"email\",\n                        title: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Column, {\n                        width: 100,\n                        dataIndex: \"status\",\n                        title: \"Trạng th\\xe1i\",\n                        render: (value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.TagField, {\n                                value: value === 1 ? \"Active\" : \"Inactive\"\n                            }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Column, {\n                        dataIndex: \"avatar\",\n                        title: \"Avatar\",\n                        width: 200,\n                        render: (_, value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.ImageField, {\n                                value: \"http://localhost:3000/\".concat(value.avatar),\n                                width: 50\n                            }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Column, {\n                        // dataIndex={\"likes\"}\n                        title: \"Y\\xeau th\\xedch\",\n                        width: 250,\n                        render: (value)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: value.likes.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.TagField, {\n                                        value: item.name\n                                    }, void 0, false, void 0, void 0);\n                                })\n                            }, void 0, false, void 0, void 0);\n                        }\n                    }, \"likes\", false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Column, {\n                        dataIndex: \"createdAt\",\n                        width: 120,\n                        title: \"Ngày tạo\",\n                        render: (value)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.DateField, {\n                                value: value,\n                                format: \"HH:mm - DD/MM/YYYY\"\n                            }, void 0, false, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Column, {\n                        dataIndex: \"actions\",\n                        title: \"Thao t\\xe1c\",\n                        width: 50,\n                        render: (value, record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_space__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.EditButton, {\n                                        hideText: true,\n                                        size: \"small\",\n                                        recordItemId: record._id\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {\n                                        hideText: true,\n                                        size: \"small\",\n                                        recordItemId: record._id\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Posts, \"yQMJcNNPCCZ0ud0cz0olCDmWzow=\", false, function() {\n    return [\n        _refinedev_antd__WEBPACK_IMPORTED_MODULE_2__.useTable\n    ];\n});\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0gsT0FBT0ksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFFO0dBeEZ3Qm5DOztRQUNrQlQscURBQVFBOzs7S0FEMUJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FsYnVtcy9pbmRleC50c3g/NjY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIERhdGVGaWVsZCxcclxuICBEZWxldGVCdXR0b24sXHJcbiAgRWRpdEJ1dHRvbixcclxuICBJbWFnZUZpZWxkLFxyXG4gIExpc3QsXHJcbiAgdXNlVGFibGUsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFRhZ0ZpZWxkLFxyXG59IGZyb20gXCJAcmVmaW5lZGV2L2FudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSBcIkByZWZpbmVkZXYvY29yZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBTcGFjZSwgVGFibGUgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1dGhQcm92aWRlciB9IGZyb20gXCJzcmMvYXV0aFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IElQb3N0cywgSVVzZXIgfSBmcm9tIFwic3JjL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gIGNvbnN0IHsgdGFibGVQcm9wcywgc2VhcmNoRm9ybVByb3BzIH0gPSB1c2VUYWJsZTxJVXNlcj4oe1xyXG4gICAgb25TZWFyY2g6ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiBbeyBmaWVsZDogXCJuYW1lXCIsIG9wZXJhdG9yOiBcImVxXCIsIHZhbHVlOiB2YWx1ZS5uYW1lIH1dO1xyXG4gICAgfSxcclxuICB9KTtcclxuICAvLyBjb25zdCB7IHNlbGVjdFByb3BzIH0gPSB1c2VTZWxlY3Q8SVVzZXI+KHtcclxuICAvLyAgIHJlc291cmNlOiBcInVzZXJzXCIsXHJcbiAgLy8gICBvcHRpb25MYWJlbDogXCJuYW1lXCIsXHJcbiAgLy8gICBvcHRpb25WYWx1ZTogXCJfaWRcIixcclxuICAvLyB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3QgdGl0bGU9XCJOZ8aw4budaSBkw7luZ1wiPlxyXG4gICAgICA8Rm9ybSB7Li4uc2VhcmNoRm9ybVByb3BzfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19IGxheW91dD1cImlubGluZVwiPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlTDrG0ga2nhur9tLi4uXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBpY29uPXs8U2VhcmNoT3V0bGluZWQgLz59XHJcbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICB2YWx1ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3NlYXJjaEZvcm1Qcm9wcy5mb3JtPy5zdWJtaXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8VGFibGUgey4uLnRhYmxlUHJvcHN9IHJvd0tleT1cIl9pZFwiPlxyXG4gICAgICAgIDxUYWJsZS5Db2x1bW5cclxuICAgICAgICAgIGRhdGFJbmRleD1cIm5hbWVcIlxyXG4gICAgICAgICAgdGl0bGU9XCJcIlxyXG4gICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICA+PC9UYWJsZS5Db2x1bW4+XHJcbiAgICAgICAgPFRhYmxlLkNvbHVtbiB3aWR0aD17MjAwfSBkYXRhSW5kZXg9XCJlbWFpbFwiIHRpdGxlPVwiRW1haWxcIiAvPlxyXG4gICAgICAgIDxUYWJsZS5Db2x1bW5cclxuICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJUcuG6oW5nIHRow6FpXCJcclxuICAgICAgICAgIHJlbmRlcj17KHZhbHVlKSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWdGaWVsZCB2YWx1ZT17dmFsdWUgPT09IDEgPyBcIkFjdGl2ZVwiIDogXCJJbmFjdGl2ZVwifSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUYWJsZS5Db2x1bW48SVVzZXI+XHJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgIHJlbmRlcj17KF8sIHZhbHVlKSA9PiAoXHJcbiAgICAgICAgICAgIDxJbWFnZUZpZWxkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvJHt2YWx1ZS5hdmF0YXJ9YH1cclxuICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRhYmxlLkNvbHVtblxyXG4gICAgICAgICAgLy8gZGF0YUluZGV4PXtcImxpa2VzXCJ9XHJcbiAgICAgICAgICB0aXRsZT1cIlnDqnUgdGjDrWNoXCJcclxuICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICBrZXk9XCJsaWtlc1wiXHJcbiAgICAgICAgICByZW5kZXI9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5saWtlcy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFRhZ0ZpZWxkIHZhbHVlPXtpdGVtLm5hbWV9IC8+O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGFibGUuQ29sdW1uXHJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJjcmVhdGVkQXRcIlxyXG4gICAgICAgICAgd2lkdGg9ezEyMH1cclxuICAgICAgICAgIHRpdGxlPVwiTmdhzIB5IHRhzKNvXCJcclxuICAgICAgICAgIHJlbmRlcj17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RGF0ZUZpZWxkIHZhbHVlPXt2YWx1ZX0gZm9ybWF0PVwiSEg6bW0gLSBERC9NTS9ZWVlZXCIgLz47XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRhYmxlLkNvbHVtbjxJUG9zdHM+XHJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJhY3Rpb25zXCJcclxuICAgICAgICAgIHRpdGxlPVwiVGhhbyB0w6FjXCJcclxuICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgIHJlbmRlcj17KHZhbHVlLCByZWNvcmQpID0+IChcclxuICAgICAgICAgICAgPFNwYWNlPlxyXG4gICAgICAgICAgICAgIDxFZGl0QnV0dG9uIGhpZGVUZXh0IHNpemU9XCJzbWFsbFwiIHJlY29yZEl0ZW1JZD17cmVjb3JkLl9pZH0gLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIGhpZGVUZXh0IHNpemU9XCJzbWFsbFwiIHJlY29yZEl0ZW1JZD17cmVjb3JkLl9pZH0gLz5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e30+ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGF1dGhlbnRpY2F0ZWQsIHJlZGlyZWN0VG8gfSA9IGF3YWl0IGF1dGhQcm92aWRlci5jaGVjayhjb250ZXh0KTtcclxuXHJcbiAgaWYgKCFhdXRoZW50aWNhdGVkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge30sXHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IGAke3JlZGlyZWN0VG99P3RvPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFwiL3Bvc3RzXCIpfWAsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJTZWFyY2hPdXRsaW5lZCIsIkRhdGVGaWVsZCIsIkRlbGV0ZUJ1dHRvbiIsIkVkaXRCdXR0b24iLCJJbWFnZUZpZWxkIiwiTGlzdCIsInVzZVRhYmxlIiwiVGV4dEZpZWxkIiwiVGFnRmllbGQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJTcGFjZSIsIlRhYmxlIiwiUmVhY3QiLCJQb3N0cyIsInNlYXJjaEZvcm1Qcm9wcyIsInRhYmxlUHJvcHMiLCJvblNlYXJjaCIsInZhbHVlIiwiZmllbGQiLCJvcGVyYXRvciIsIm5hbWUiLCJ0aXRsZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwibGF5b3V0IiwiSXRlbSIsInBsYWNlaG9sZGVyIiwiaWNvbiIsImh0bWxUeXBlIiwidHlwZSIsIm9uQ2xpY2siLCJmb3JtIiwic3VibWl0Iiwicm93S2V5IiwiQ29sdW1uIiwiZGF0YUluZGV4Iiwid2lkdGgiLCJyZW5kZXIiLCJfIiwiYXZhdGFyIiwibGlrZXMiLCJtYXAiLCJpdGVtIiwiZm9ybWF0IiwicmVjb3JkIiwiaGlkZVRleHQiLCJzaXplIiwicmVjb3JkSXRlbUlkIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/albums/index.tsx\n"));

/***/ })

});