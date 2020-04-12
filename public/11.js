(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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





Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('required', _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__["required"], {
  message: "{_field_} can't be empty!"
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('email', _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__["email"], {
  message: 'Please enter a valid email address'
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('min', {
  validate: function validate(value, _ref) {
    var min = _ref.min;
    return value.length >= min;
  },
  params: ['min'],
  message: 'The {_field_} field must have at least {min} characters '
});
Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('alpha_dash', _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__["alpha_dash"]));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('alpha', _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__["alpha"]));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('digits', _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__["digits"], {
  message: 'The {_field_} field must consest of just {length} digits '
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('numeric', _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__["numeric"], {
  message: 'The {_field_}  field may only contain numeric characters'
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('minmax', {
  validate: function validate(value, _ref2) {
    var min = _ref2.min,
        max = _ref2.max;
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: 'The {_field_} field must have at least {min} characters and {max} characters at most'
});
Object(vee_validate__WEBPACK_IMPORTED_MODULE_5__["extend"])('password', {
  params: ['target'],
  validate: function validate(value, _ref3) {
    var target = _ref3.target;
    return value === target;
  },
  message: 'Password confirmation does not match'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Register',
  middleware: 'guest',
  created: function created() {
    var _this = this;

    this.request('years').then(function (data) {
      _this.yearsOfStudy = data.map(function (year) {
        return year.title;
      });
    });
    this.request('departments').then(function (data) {
      _this.departmentsTitles = data.map(function (dept) {
        return dept.title;
      });
    });
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_2___default.a({
        user_type: 'Student',
        department: 'none'
      }),
      showPassword: false,
      accountTypes: ['Student', 'Supervisor'],
      yearsOfStudy: [],
      departmentsTitles: ['none'],
      progressing: false,
      snackbarMessage: '',
      snackbar: false
    };
  },
  watch: {
    selectedAccountType: function selectedAccountType(value) {
      if (value == this.accountTypes[1]) {
        if (this.form.year_of_study !== undefined) {
          delete this.form.year_of_study;
        }

        if (this.form.university_id !== undefined) {
          delete this.form.university_id;
        }
      }
    }
  },
  computed: _objectSpread({
    selectedAccountType: function selectedAccountType() {
      return this.form.user_type;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('global', ['isMobile'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('data', ['request']), {
    createNewAccount: function createNewAccount() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref4, data, errors;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this2.progressing) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _this2.progressing = true;
                _context.prev = 3;
                _context.next = 6;
                return _this2.form.post('/api/auth/register');

              case 6:
                _ref4 = _context.sent;
                data = _ref4.data;
                _this2.snackbarMessage = 'Account created..Well done!!';
                _this2.snackbar = true;

                _this2.$router.push({
                  name: 'login'
                });

                _context.next = 18;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                errors = _this2.form.errors.errors;
                _this2.snackbarMessage = errors[Object.keys(errors)[0]][0];
                _this2.snackbar = true;

              case 18:
                _context.prev = 18;
                _this2.progressing = false;
                return _context.finish(18);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13, 18, 21]]);
      }))();
    }
  }),
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_5__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_5__["ValidationObserver"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                "v-card",
                [
                  _c("v-card-title", { staticClass: "bg-primary" }, [
                    _vm._v("Create New Account")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("ValidationObserver", {
                        ref: "form",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var invalid = ref.invalid
                              var handleSubmit = ref.handleSubmit
                              return [
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
                                                    "prepend-icon":
                                                      "mdi-account-cog-outline",
                                                    label: "Account Type",
                                                    dense: "",
                                                    items: _vm.accountTypes
                                                  },
                                                  model: {
                                                    value: _vm.form.user_type,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "user_type",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.user_type"
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
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    rules:
                                                      "required|alpha|minmax:2,15",
                                                    name: "First Name"
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function(ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                "error-messages": errors,
                                                                type: "text",
                                                                label:
                                                                  "First Name",
                                                                title:
                                                                  "Your First Name",
                                                                "prepend-icon":
                                                                  "mdi-card-text-outline"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.form
                                                                    .f_name,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "f_name",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "form.f_name"
                                                              }
                                                            })
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    true
                                                  )
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
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    rules:
                                                      "required|alpha|minmax:2,15",
                                                    name: "Last Name"
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function(ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                "error-messages": errors,
                                                                type: "text",
                                                                label:
                                                                  "Last Name",
                                                                title:
                                                                  "Your Last Name",
                                                                "prepend-icon":
                                                                  "mdi-card-text-outline"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.form
                                                                    .l_name,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "l_name",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "form.l_name"
                                                              }
                                                            })
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    true
                                                  )
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
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    rules: "required|email",
                                                    name: "E-mail"
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function(ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                type: "email",
                                                                "error-messages": errors,
                                                                label: "E-mail",
                                                                title:
                                                                  "Your Email Address",
                                                                "prepend-icon":
                                                                  "mdi-email"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.form
                                                                    .email,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "email",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "form.email"
                                                              }
                                                            })
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    true
                                                  )
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
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    rules:
                                                      "required|min:8|alpha_dash|password:@Confirm",
                                                    name: "Password"
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function(ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                "error-messages": errors,
                                                                type: _vm.showPassword
                                                                  ? "text"
                                                                  : "password",
                                                                label:
                                                                  "Password",
                                                                title:
                                                                  "Enter New Password",
                                                                "prepend-icon":
                                                                  "mdi-key-outline",
                                                                "append-icon": !_vm.showPassword
                                                                  ? "mdi-eye"
                                                                  : "mdi-eye-off"
                                                              },
                                                              on: {
                                                                "click:append": function(
                                                                  $event
                                                                ) {
                                                                  _vm.showPassword = !_vm.showPassword
                                                                }
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.form
                                                                    .password,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "password",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "form.password"
                                                              }
                                                            })
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    true
                                                  )
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
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    rules:
                                                      "required|alpha_dash",
                                                    name: "Confirm"
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function(ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                "error-messages": errors,
                                                                type: _vm.showPassword
                                                                  ? "text"
                                                                  : "password",
                                                                label:
                                                                  "Confirm Password",
                                                                title:
                                                                  "Confirm The Password You Have Entered!",
                                                                "prepend-icon":
                                                                  "mdi-key-plus"
                                                              },
                                                              on: {
                                                                "click:append": function(
                                                                  $event
                                                                ) {
                                                                  _vm.showPassword = !_vm.showPassword
                                                                }
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.form
                                                                    .password_confirmation,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "password_confirmation",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "\n                                                    form.password_confirmation\n                                                "
                                                              }
                                                            })
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    true
                                                  )
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
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    rules: "required|digits:11",
                                                    name: "National ID"
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function(ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                "error-messages": errors,
                                                                type: "text",
                                                                label:
                                                                  "National ID",
                                                                title:
                                                                  "Your National ID",
                                                                "prepend-icon":
                                                                  "mdi-id-card"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.form
                                                                    .national_id,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "national_id",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "form.national_id"
                                                              }
                                                            })
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    true
                                                  )
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
                                                    "prepend-icon":
                                                      "mdi-office-building",
                                                    label: "Department",
                                                    dense: "",
                                                    items: _vm.departmentsTitles
                                                  },
                                                  model: {
                                                    value: _vm.form.department,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "department",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.department"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.form.user_type == "Student"
                                          ? [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    [
                                                      _c("ValidationProvider", {
                                                        attrs: {
                                                          rules: "required",
                                                          name: "Year Of Study"
                                                        },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "default",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var errors =
                                                                  ref.errors
                                                                return [
                                                                  _c(
                                                                    "v-select",
                                                                    {
                                                                      attrs: {
                                                                        "prepend-icon":
                                                                          "mdi-timetable",
                                                                        label:
                                                                          "Year Of Study",
                                                                        "error-messages": errors,
                                                                        dense:
                                                                          "",
                                                                        items:
                                                                          _vm.yearsOfStudy
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .form
                                                                            .year_of_study,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "year_of_study",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "\n                                                        form.year_of_study\n                                                    "
                                                                      }
                                                                    }
                                                                  )
                                                                ]
                                                              }
                                                            }
                                                          ],
                                                          null,
                                                          true
                                                        )
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
                                                      _c("ValidationProvider", {
                                                        attrs: {
                                                          rules:
                                                            "required|numeric",
                                                          name: "University ID"
                                                        },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "default",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var errors =
                                                                  ref.errors
                                                                return [
                                                                  _c(
                                                                    "v-text-field",
                                                                    {
                                                                      attrs: {
                                                                        "error-messages": errors,
                                                                        type:
                                                                          "text",
                                                                        label:
                                                                          "University ID",
                                                                        title:
                                                                          "Your University ID",
                                                                        "prepend-icon":
                                                                          "mdi-id-card"
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .form
                                                                            .university_id,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "university_id",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "\n                                                        form.university_id\n                                                    "
                                                                      }
                                                                    }
                                                                  )
                                                                ]
                                                              }
                                                            }
                                                          ],
                                                          null,
                                                          true
                                                        )
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: _vm.isMobile
                                                    ? 12
                                                    : "auto"
                                                }
                                              },
                                              [
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: {
                                                      to: { name: "login" }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "have an account already?\n                                            login"
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticStyle: {
                                                      float: "right"
                                                    },
                                                    attrs: {
                                                      block: _vm.isMobile,
                                                      color: "primary",
                                                      disabled: _vm.progressing
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        $event.preventDefault()
                                                        return handleSubmit(
                                                          _vm.createNewAccount
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm.progressing
                                                      ? [
                                                          _c(
                                                            "v-progress-circular",
                                                            {
                                                              attrs: {
                                                                color: "wihte",
                                                                indeterminate:
                                                                  ""
                                                              }
                                                            }
                                                          )
                                                        ]
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    !_vm.progressing
                                                      ? [_vm._v("Create")]
                                                      : _vm._e()
                                                  ],
                                                  2
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      2
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      })
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
        "v-snackbar",
        {
          attrs: {
            color: _vm.form.successful ? "#0c3" : "#c03",
            timeout: 6000,
            buttom: "",
            "multi-line": _vm.isMobile,
            right: !_vm.isMobile
          },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.snackbarMessage) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { dark: "", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
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

/***/ "./resources/js/pages/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/auth/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=2ebeb09e&scoped=true& */ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ebeb09e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=2ebeb09e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);