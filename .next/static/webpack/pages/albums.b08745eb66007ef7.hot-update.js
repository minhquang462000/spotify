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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons_lib_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SearchOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SearchOutlined.js\");\n/* harmony import */ var _components_SongAlbum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/SongAlbum */ \"./src/components/SongAlbum.tsx\");\n/* harmony import */ var _refinedev_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @refinedev/antd */ \"./node_modules/@refinedev/antd/dist/esm/index.js\");\n/* harmony import */ var _refinedev_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @refinedev/core */ \"./node_modules/@refinedev/core/dist/esm/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/select */ \"./node_modules/antd/lib/select/index.js\");\n/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/space */ \"./node_modules/antd/lib/space/index.js\");\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/table */ \"./node_modules/antd/lib/table/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Posts() {\n    var _searchFormProps_form;\n    _s();\n    const { tableProps, searchFormProps } = (0,_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.useTable)({\n        onSearch: (value)=>{\n            return [\n                {\n                    field: \"name\",\n                    operator: \"eq\",\n                    value: value.name\n                }\n            ];\n        }\n    });\n    const { selectProps } = (0,_refinedev_core__WEBPACK_IMPORTED_MODULE_4__.useSelect)({\n        resource: \"singers\",\n        optionLabel: \"name\",\n        optionValue: \"_id\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.List, {\n        title: \"A\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                ...searchFormProps,\n                style: {\n                    marginBottom: 10\n                },\n                layout: \"inline\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                        name: \"name\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            placeholder: \"T\\xecm kiếm...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, void 0, void 0),\n                        htmlType: \"submit\",\n                        value: \"small\",\n                        type: \"primary\",\n                        onClick: (_searchFormProps_form = searchFormProps.form) === null || _searchFormProps_form === void 0 ? void 0 : _searchFormProps_form.submit\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                ...tableProps,\n                rowKey: \"_id\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Column, {\n                        dataIndex: \"name\",\n                        title: \"Album\",\n                        width: 150\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Column, {\n                        width: 200,\n                        dataIndex: \"description\",\n                        title: \"M\\xf4 Tả Ngắn\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Column, {\n                        dataIndex: \"image\",\n                        title: \"Ảnh Nhỏ\",\n                        width: 200,\n                        render: (_, value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.ImageField, {\n                                value: \"http://localhost:3000/\".concat(value.image),\n                                width: 50\n                            }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Column, {\n                        // dataIndex={\"likes\"}\n                        title: \"Danh S\\xe1ch B\\xe0i H\\xe1t\",\n                        width: 250,\n                        render: (value)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SongAlbum__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                songs: value.songs\n                            }, void 0, false, void 0, void 0);\n                        }\n                    }, \"likes\", false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Column, {\n                        title: \"Ca Sĩ Thể Hiện\",\n                        width: 200,\n                        filterDropdown: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.FilterDropdown, {\n                                ...props,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_select__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    mode: \"multiple\",\n                                    placeholder: \"Ca sĩ ..\",\n                                    ...selectProps,\n                                    style: {\n                                        minWidth: 200\n                                    }\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                        render: (value)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                value: value.singers.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.TagField, {\n                                        value: item.name\n                                    }, void 0, false, void 0, void 0);\n                                })\n                            }, void 0, false, void 0, void 0);\n                        }\n                    }, \"singer\", false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Column, {\n                        width: 150,\n                        title: \"Th\\xf4ng Tin\",\n                        render: (_, value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Lượt Xem : \".concat(value.views)\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Lượt Th\\xedch : \".concat(value.likes)\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Column, {\n                        dataIndex: \"createdAt\",\n                        width: 120,\n                        title: \"Ngày tạo\",\n                        render: (value)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.DateField, {\n                                value: value,\n                                format: \"HH:mm - DD/MM/YYYY\"\n                            }, void 0, false, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Column, {\n                        dataIndex: \"actions\",\n                        title: \"Thao t\\xe1c\",\n                        width: 50,\n                        render: (value, record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_space__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.EditButton, {\n                                        hideText: true,\n                                        size: \"small\",\n                                        recordItemId: record._id\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.DeleteButton, {\n                                        hideText: true,\n                                        size: \"small\",\n                                        recordItemId: record._id\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\code\\\\spotify_be\\\\pages\\\\albums\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Posts, \"xwi9566si03MprbvP1fuoQK8H9o=\", false, function() {\n    return [\n        _refinedev_antd__WEBPACK_IMPORTED_MODULE_3__.useTable,\n        _refinedev_core__WEBPACK_IMPORTED_MODULE_4__.useSelect\n    ];\n});\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsbUJBQTRCLE9BQVpuQyxNQUFNcUMsS0FBSzs7Ozs7Ozs7O2tDQUlyQyw4REFBQzNDLDZEQUFZO3dCQUNYNEIsV0FBVTt3QkFDVkMsT0FBTzt3QkFDUGYsT0FBTTt3QkFDTmdCLFFBQVEsQ0FBQ3hCOzRCQUNQLHFCQUFPLDhEQUFDdEIsc0RBQVNBO2dDQUFDc0IsT0FBT0E7Z0NBQU9zQyxRQUFPOzt3QkFDekM7Ozs7OztrQ0FFRiw4REFBQzVDLDZEQUFZO3dCQUNYNEIsV0FBVTt3QkFDVmQsT0FBTTt3QkFDTmUsT0FBTzt3QkFDUEMsUUFBUSxDQUFDeEIsT0FBT3VDLHVCQUNkLDhEQUFDOUMsdURBQUtBOztrREFDSiw4REFBQ2IsdURBQVVBO3dDQUFDNEQsUUFBUTt3Q0FBQ0MsTUFBSzt3Q0FBUUMsY0FBY0gsT0FBT0ksR0FBRzs7a0RBQzFELDhEQUFDaEUseURBQVlBO3dDQUFDNkQsUUFBUTt3Q0FBQ0MsTUFBSzt3Q0FBUUMsY0FBY0gsT0FBT0ksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFFO0dBeEd3Qi9DOztRQUNrQmIscURBQVFBO1FBS3hCSSxzREFBU0E7OztLQU5YUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hbGJ1bXMvaW5kZXgudHN4PzY2OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFNvbmdBbGJ1bSBmcm9tIFwiQGNvbXBvbmVudHMvU29uZ0FsYnVtXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZUZpZWxkLFxyXG4gIERlbGV0ZUJ1dHRvbixcclxuICBFZGl0QnV0dG9uLFxyXG4gIEltYWdlRmllbGQsXHJcbiAgTGlzdCxcclxuICB1c2VUYWJsZSxcclxuICBUZXh0RmllbGQsXHJcbiAgVGFnRmllbGQsXHJcbiAgRmlsdGVyRHJvcGRvd24sXHJcbn0gZnJvbSBcIkByZWZpbmVkZXYvYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tIFwiQHJlZmluZWRldi9jb3JlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBGb3JtLCBJbnB1dCwgU2VsZWN0LCBTcGFjZSwgVGFibGUgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1dGhQcm92aWRlciB9IGZyb20gXCJzcmMvYXV0aFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IElBbGJ1bSwgSVBvc3RzLCBJU2luZ2VyLCBJU29uZyB9IGZyb20gXCJzcmMvaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XHJcbiAgY29uc3QgeyB0YWJsZVByb3BzLCBzZWFyY2hGb3JtUHJvcHMgfSA9IHVzZVRhYmxlPElTaW5nZXI+KHtcclxuICAgIG9uU2VhcmNoOiAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gW3sgZmllbGQ6IFwibmFtZVwiLCBvcGVyYXRvcjogXCJlcVwiLCB2YWx1ZTogdmFsdWUubmFtZSB9XTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBzZWxlY3RQcm9wcyB9ID0gdXNlU2VsZWN0PElTaW5nZXI+KHtcclxuICAgIHJlc291cmNlOiBcInNpbmdlcnNcIixcclxuICAgIG9wdGlvbkxhYmVsOiBcIm5hbWVcIixcclxuICAgIG9wdGlvblZhbHVlOiBcIl9pZFwiLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCB0aXRsZT1cIkFcIj5cclxuICAgICAgPEZvcm0gey4uLnNlYXJjaEZvcm1Qcm9wc30gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fSBsYXlvdXQ9XCJpbmxpbmVcIj5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJUw6xtIGtp4bq/bS4uLlwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgaWNvbj17PFNlYXJjaE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgdmFsdWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtzZWFyY2hGb3JtUHJvcHMuZm9ybT8uc3VibWl0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPFRhYmxlIHsuLi50YWJsZVByb3BzfSByb3dLZXk9XCJfaWRcIj5cclxuICAgICAgICA8VGFibGUuQ29sdW1uIGRhdGFJbmRleD1cIm5hbWVcIiB0aXRsZT1cIkFsYnVtXCIgd2lkdGg9ezE1MH0+PC9UYWJsZS5Db2x1bW4+XHJcbiAgICAgICAgPFRhYmxlLkNvbHVtbiB3aWR0aD17MjAwfSBkYXRhSW5kZXg9XCJkZXNjcmlwdGlvblwiIHRpdGxlPVwiTcO0IFThuqMgTmfhuq9uXCIgLz5cclxuICAgICAgICA8VGFibGUuQ29sdW1uPElBbGJ1bT5cclxuICAgICAgICAgIGRhdGFJbmRleD1cImltYWdlXCJcclxuICAgICAgICAgIHRpdGxlPVwi4bqibmggTmjhu49cIlxyXG4gICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgIHJlbmRlcj17KF8sIHZhbHVlKSA9PiAoXHJcbiAgICAgICAgICAgIDxJbWFnZUZpZWxkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvJHt2YWx1ZS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGFibGUuQ29sdW1uXHJcbiAgICAgICAgICAvLyBkYXRhSW5kZXg9e1wibGlrZXNcIn1cclxuICAgICAgICAgIHRpdGxlPVwiRGFuaCBTw6FjaCBCw6BpIEjDoXRcIlxyXG4gICAgICAgICAgd2lkdGg9ezI1MH1cclxuICAgICAgICAgIGtleT1cImxpa2VzXCJcclxuICAgICAgICAgIHJlbmRlcj17KHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTb25nQWxidW0gc29uZ3M9e3ZhbHVlLnNvbmdzfSAvPjtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGFibGUuQ29sdW1uXHJcbiAgICAgICAgICB0aXRsZT1cIkNhIFPEqSBUaOG7gyBIaeG7h25cIlxyXG4gICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgIGtleT1cInNpbmdlclwiXHJcbiAgICAgICAgICBmaWx0ZXJEcm9wZG93bj17KHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxGaWx0ZXJEcm9wZG93biB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhIHPEqSAuLlwiXHJcbiAgICAgICAgICAgICAgICB7Li4uc2VsZWN0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9GaWx0ZXJEcm9wZG93bj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZW5kZXI9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5zaW5nZXJzLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFnRmllbGQgdmFsdWU9e2l0ZW0ubmFtZX0gLz47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUYWJsZS5Db2x1bW5cclxuICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICB0aXRsZT1cIlRow7RuZyBUaW5cIlxyXG4gICAgICAgICAgcmVuZGVyPXsoXywgdmFsdWU6IElBbGJ1bSkgPT4gKFxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIDxwPntgTMaw4bujdCBYZW0gOiAke3ZhbHVlLnZpZXdzfWB9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPntgTMaw4bujdCBUaMOtY2ggOiAke3ZhbHVlLmxpa2VzfWB9PC9wPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGFibGUuQ29sdW1uXHJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJjcmVhdGVkQXRcIlxyXG4gICAgICAgICAgd2lkdGg9ezEyMH1cclxuICAgICAgICAgIHRpdGxlPVwiTmdhzIB5IHRhzKNvXCJcclxuICAgICAgICAgIHJlbmRlcj17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RGF0ZUZpZWxkIHZhbHVlPXt2YWx1ZX0gZm9ybWF0PVwiSEg6bW0gLSBERC9NTS9ZWVlZXCIgLz47XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRhYmxlLkNvbHVtbjxJUG9zdHM+XHJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJhY3Rpb25zXCJcclxuICAgICAgICAgIHRpdGxlPVwiVGhhbyB0w6FjXCJcclxuICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgIHJlbmRlcj17KHZhbHVlLCByZWNvcmQpID0+IChcclxuICAgICAgICAgICAgPFNwYWNlPlxyXG4gICAgICAgICAgICAgIDxFZGl0QnV0dG9uIGhpZGVUZXh0IHNpemU9XCJzbWFsbFwiIHJlY29yZEl0ZW1JZD17cmVjb3JkLl9pZH0gLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIGhpZGVUZXh0IHNpemU9XCJzbWFsbFwiIHJlY29yZEl0ZW1JZD17cmVjb3JkLl9pZH0gLz5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e30+ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGF1dGhlbnRpY2F0ZWQsIHJlZGlyZWN0VG8gfSA9IGF3YWl0IGF1dGhQcm92aWRlci5jaGVjayhjb250ZXh0KTtcclxuXHJcbiAgaWYgKCFhdXRoZW50aWNhdGVkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge30sXHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IGAke3JlZGlyZWN0VG99P3RvPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFwiL3Bvc3RzXCIpfWAsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJTZWFyY2hPdXRsaW5lZCIsIlNvbmdBbGJ1bSIsIkRhdGVGaWVsZCIsIkRlbGV0ZUJ1dHRvbiIsIkVkaXRCdXR0b24iLCJJbWFnZUZpZWxkIiwiTGlzdCIsInVzZVRhYmxlIiwiVGV4dEZpZWxkIiwiVGFnRmllbGQiLCJGaWx0ZXJEcm9wZG93biIsInVzZVNlbGVjdCIsIkJ1dHRvbiIsIkNvbCIsIkZvcm0iLCJJbnB1dCIsIlNlbGVjdCIsIlNwYWNlIiwiVGFibGUiLCJSZWFjdCIsIlBvc3RzIiwic2VhcmNoRm9ybVByb3BzIiwidGFibGVQcm9wcyIsIm9uU2VhcmNoIiwidmFsdWUiLCJmaWVsZCIsIm9wZXJhdG9yIiwibmFtZSIsInNlbGVjdFByb3BzIiwicmVzb3VyY2UiLCJvcHRpb25MYWJlbCIsIm9wdGlvblZhbHVlIiwidGl0bGUiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImxheW91dCIsIkl0ZW0iLCJwbGFjZWhvbGRlciIsImljb24iLCJodG1sVHlwZSIsInR5cGUiLCJvbkNsaWNrIiwiZm9ybSIsInN1Ym1pdCIsInJvd0tleSIsIkNvbHVtbiIsImRhdGFJbmRleCIsIndpZHRoIiwicmVuZGVyIiwiXyIsImltYWdlIiwic29uZ3MiLCJmaWx0ZXJEcm9wZG93biIsInByb3BzIiwibW9kZSIsIm1pbldpZHRoIiwic2luZ2VycyIsIm1hcCIsIml0ZW0iLCJwIiwidmlld3MiLCJsaWtlcyIsImZvcm1hdCIsInJlY29yZCIsImhpZGVUZXh0Iiwic2l6ZSIsInJlY29yZEl0ZW1JZCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/albums/index.tsx\n"));

/***/ })

});