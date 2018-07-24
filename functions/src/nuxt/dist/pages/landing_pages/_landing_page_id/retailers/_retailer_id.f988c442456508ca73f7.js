webpackJsonp([0],{

/***/ "5PlU":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "7u5f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_retailer_id_vue__ = __webpack_require__("Uffx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_retailer_id_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_retailer_id_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b912d4a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_retailer_id_vue__ = __webpack_require__("w9TV");
var normalizeComponent = __webpack_require__("K60R")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_retailer_id_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b912d4a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_retailer_id_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Uffx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__("d7EF");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__("exGp");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lodash = __webpack_require__("M4fF");

var _lodash2 = _interopRequireDefault(_lodash);

var _axios = __webpack_require__("YFWx");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  // nuxt provides the asyncData method to retrieve and render data server-side
  // VueFire isn't available server-side, so we're using the Firestore REST API
  asyncData: function asyncData(_ref) {
    var _this = this;

    var params = _ref.params;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var retailer, landing_page, landing_page_widgets, _ref2, _ref3, retailer_response, landing_page_response, landing_page_widgets_response;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Do we want to pre-cache all the data in Firestore using the short_url
              // token as the key? Maybe generate a compound short_url key that we can
              // parse a landing_page_id and a retailer_id from?

              retailer = _axios2.default.get('retailers/' + params.retailer_id);
              landing_page = _axios2.default.get('landing_pages/' + params.landing_page_id);
              landing_page_widgets = _axios2.default.get('landing_pages/' + params.landing_page_id + '/landing_page_widgets');
              _context.next = 5;
              return _promise2.default.all([retailer, landing_page, landing_page_widgets]);

            case 5:
              _ref2 = _context.sent;
              _ref3 = (0, _slicedToArray3.default)(_ref2, 3);
              retailer_response = _ref3[0].data;
              landing_page_response = _ref3[1].data;
              landing_page_widgets_response = _ref3[2].data;
              return _context.abrupt('return', {
                retailer_response: retailer_response,
                landing_page_response: landing_page_response,
                landing_page_widgets_response: landing_page_widgets_response
              });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },


  computed: {
    retailer: function retailer() {
      return this.newDeserialize(this.retailer_response);
    },
    locations: function locations() {
      var _this2 = this;

      var locations = this.retailer.locations.values;
      return locations.map(function (serialized) {
        return _this2.newDeserialize(serialized);
      });
    },
    landing_page: function landing_page() {
      return this.deserialize(this.landing_page_response.fields);
    },
    landing_page_widgets: function landing_page_widgets() {
      var _this3 = this;

      var lpws = this.landing_page_widgets_response.documents;

      return lpws.map(function (serialized) {
        return _this3.newDeserialize(serialized);
      }).sort(function (a, b) {
        return +a.index - +b.index;
      });
    }
  },

  methods: {
    newDeserialize: function newDeserialize(widget) {
      var newWidget = {};
      for (var key in widget) {
        if ((0, _typeof3.default)(widget[key]) === 'object') {
          if (key === 'fields' || key === 'mapValue') {
            newWidget = (0, _extends3.default)({}, newWidget, this.newDeserialize(widget[key]));
          } else if (widget[key].mapValue) {
            newWidget[key] = this.newDeserialize(widget[key].mapValue);
          } else {
            var nestedKey = (0, _keys2.default)(widget[key])[0];
            newWidget[key] = widget[key][nestedKey];
          }
        } else {
          newWidget[key] = widget[key];
        }
      }
      return newWidget;
    },
    deserialize: function deserialize(obj) {
      return _lodash2.default.mapValues(obj, function (o) {
        return _lodash2.default.values(o)[0];
      });
    },
    draft_content: function draft_content(widget) {
      var draft_content = widget.draft_content;
    },
    widget_widget: function widget_widget(widget) {
      return this.deserialize(widget.widget.fields);
    },
    widget_content: function widget_content(widget) {
      return this.deserialize(widget.draft_content.fields);
    }
  }
};

/***/ }),

/***/ "Xd32":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("5PlU");


/***/ }),

/***/ "YFWx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _axios2.default.create({
  baseURL: 'https://firestore.googleapis.com/v1beta1/projects/promoboxx-dev/databases/(default)/documents/'
});

/***/ }),

/***/ "d7EF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("us/S");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "us/S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Xd32"), __esModule: true };

/***/ }),

/***/ "w9TV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container"},[_c('div',{staticClass:"widgets"},_vm._l((_vm.landing_page_widgets),function(widget){return _c('div',{staticClass:"widget"},[_c(((widget.widget.name) + "_widget"),{tag:"component",attrs:{"widget":widget,"locations":_vm.locations,"retailer":_vm.retailer}})],1)})),_c('h3',{staticClass:"headline"},[_vm._v(_vm._s(_vm.retailer.name))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=_retailer_id.f988c442456508ca73f7.js.map