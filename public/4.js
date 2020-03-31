(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'admin-settings',
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0___default.a({
        department: 'none',
        year: 'first year',
        numberOfStudents: 0,
        minNumberOStudents: 0,
        maxNumberOfStudens: 0
      }),
      yearsOfStudy: ['first year', 'second year', 'third year', 'forth year', 'fifth year'],
      departments: ['none', 1, 2, 3, 4],
      numc1: 0,
      numc2: 0,
      min: 1,
      max: 7,
      range: [1, 7]
    };
  },
  methods: {
    addDept: function addDept() {
      var newD = this.departments;
      newD.splice(newD.length, 1, document.getElementById('newDI').value);
      this.departments = newD;
      this.numc2++;
    },
    addYear: function addYear() {
      var newY = this.yearsOfStudy,
          newIn = document.getElementById('newYI').value;
      newY.splice(newY.length, 1, newIn);
      this.yearsOfStudy = newY;
      this.numc1++;
    },
    rollbackD: function rollbackD() {
      this.departments.pop();
      this.numc2--;
    },
    rollbackY: function rollbackY() {
      this.yearsOfStudy.pop();
      this.numc1--;
    },
    changeS: function changeS() {
      var d = this.checked;
      this.checked = !d;
    },
    changeS2: function changeS2() {
      var d = this.checked2;
      this.checked2 = !d;
    },
    CallColor: function CallColor() {
      if (max) return "red";
      if (min) return "green";
    }
  },
  computed: _objectSpread({
    selectedYear: function selectedYear() {
      return this.form.Year;
    },
    selectedDept: function selectedDept() {
      return this.form.Dept;
    },
    selectedNumber: function selectedNumber() {
      return this.form.Num;
    },
    selectedMinNumber: function selectedMinNumber() {
      return this.range[0];
    },
    selectedMaxNumber: function selectedMaxNumber() {
      return this.range[1];
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('global', ['isMobile']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Settings.vue?vue&type=template&id=a3a739a8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Settings.vue?vue&type=template&id=a3a739a8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: !_vm.isMobile ? 8 : 12 } },
            [
              _c(
                "v-form",
                [
                  _c(
                    "v-container",
                    { staticClass: "pl-0 pr-0" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-select", {
                                attrs: {
                                  "prepend-icon": "mdi-account-clock",
                                  label: "Year",
                                  dense: "",
                                  items: _vm.yearsOfStudy
                                },
                                model: {
                                  value: _vm.form.Year,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "Year", $$v)
                                  },
                                  expression: "form.Year"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-select", {
                                attrs: {
                                  "prepend-icon": "mdi-bank",
                                  label: "Dept",
                                  dense: "",
                                  items: _vm.departments
                                },
                                model: {
                                  value: _vm.form.Dept,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "Dept", $$v)
                                  },
                                  expression: "form.Dept"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-subheader",
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\n                                                mdi-account\n                                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-text", [
                                _vm._v("min and max students per group")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-icon", [
                            _vm._v(
                              "\n                                                mdi-account-group\n                                            "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { staticClass: "px-4" },
                                [
                                  _c("v-range-slider", {
                                    staticClass: "align-center",
                                    attrs: {
                                      max: _vm.max,
                                      min: _vm.min,
                                      "hide-details": "",
                                      "thumb-label": "",
                                      "always-dirty": "",
                                      "thumb-color": "green"
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "prepend",
                                        fn: function() {
                                          return [
                                            _c("v-text-field", {
                                              staticClass: "mt-0 pt-0",
                                              staticStyle: { width: "30px" },
                                              attrs: {
                                                value: _vm.range[0],
                                                "hide-details": "",
                                                "single-line": "",
                                                type: "number"
                                              },
                                              on: {
                                                change: function($event) {
                                                  return _vm.$set(
                                                    _vm.range,
                                                    0,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        },
                                        proxy: true
                                      },
                                      {
                                        key: "append",
                                        fn: function() {
                                          return [
                                            _c("v-text-field", {
                                              staticClass: "mt-0 pt-0",
                                              staticStyle: { width: "30px" },
                                              attrs: {
                                                value: _vm.range[1],
                                                "hide-details": "",
                                                "single-line": "",
                                                type: "number"
                                              },
                                              on: {
                                                change: function($event) {
                                                  return _vm.$set(
                                                    _vm.range,
                                                    1,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ]),
                                    model: {
                                      value: _vm.range,
                                      callback: function($$v) {
                                        _vm.range = $$v
                                      },
                                      expression: "range"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  id: "newDI",
                                  type: "text",
                                  label: "New Dept",
                                  title: "Add New Dept",
                                  "prepend-icon": "mdi-bank-plus"
                                },
                                model: {
                                  value: _vm.form.new_dept,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "new_dept", $$v)
                                  },
                                  expression: "form.new_dept"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    [
                                      _vm.form.new_dept
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                rounded: "",
                                                color: "green",
                                                id: "addD"
                                              },
                                              on: { click: _vm.addDept }
                                            },
                                            [
                                              _c("v-text", [_vm._v("confirm")]),
                                              _vm._v(" "),
                                              _c("v-icon", [
                                                _vm._v(
                                                  " mdi-check-circle-outline"
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    [
                                      _vm.numc2 > 0
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                rounded: "",
                                                color: "red",
                                                id: "addD"
                                              },
                                              on: { click: _vm.rollbackD }
                                            },
                                            [
                                              _c("v-text", [
                                                _vm._v("rollback")
                                              ]),
                                              _vm._v(" "),
                                              _c("v-icon", [
                                                _vm._v(" mdi-reply-outline")
                                              ])
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  id: "newYI",
                                  type: "text",
                                  label: "New Year",
                                  title: "Add New Year",
                                  "prepend-icon": "mdi-shape-circle-plus"
                                },
                                model: {
                                  value: _vm.form.new_year,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "new_year", $$v)
                                  },
                                  expression: "form.new_year"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    [
                                      _vm.form.new_year
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                rounded: "",
                                                color: "green",
                                                id: "addY"
                                              },
                                              on: { click: _vm.addYear }
                                            },
                                            [
                                              _c("v-text", [_vm._v("confirm")]),
                                              _vm._v(" "),
                                              _c("v-icon", [
                                                _vm._v(
                                                  " mdi-check-circle-outline"
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    [
                                      _vm.numc1 > 0
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                rounded: "",
                                                color: "red",
                                                id: "addD"
                                              },
                                              on: { click: _vm.rollbackY }
                                            },
                                            [
                                              _c("v-text", [
                                                _vm._v("rollback")
                                              ]),
                                              _vm._v(" "),
                                              _c("v-icon", [
                                                _vm._v(" mdi-reply-outline")
                                              ])
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tabs",
                        {
                          attrs: {
                            "background-color": "blue lighten-2",
                            dark: ""
                          },
                          model: {
                            value: _vm.tab,
                            callback: function($$v) {
                              _vm.tab = $$v
                            },
                            expression: "tab"
                          }
                        },
                        _vm._l(_vm.departments, function(n) {
                          return _c("v-tab", { key: n }, [
                            _vm._v("\n        dept: " + _vm._s(n) + "\n      ")
                          ])
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tabs-items",
                        {
                          model: {
                            value: _vm.tab,
                            callback: function($$v) {
                              _vm.tab = $$v
                            },
                            expression: "tab"
                          }
                        },
                        _vm._l(_vm.departments, function(i) {
                          return _c(
                            "v-tab-item",
                            { key: i, attrs: { value: "dept:" + i } },
                            [
                              _c("v-container", { attrs: { fluid: "" } }, [
                                _vm._v(
                                  "\n" +
                                    _vm._s(_vm.departments[i]) +
                                    "\n        "
                                )
                              ])
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/Settings.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/admin/Settings.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_a3a739a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=a3a739a8&scoped=true& */ "./resources/js/pages/admin/Settings.vue?vue&type=template&id=a3a739a8&scoped=true&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_a3a739a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_a3a739a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a3a739a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/admin/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/Settings.vue?vue&type=template&id=a3a739a8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/admin/Settings.vue?vue&type=template&id=a3a739a8&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_a3a739a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=a3a739a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Settings.vue?vue&type=template&id=a3a739a8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_a3a739a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_a3a739a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);