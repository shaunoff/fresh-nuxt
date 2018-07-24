webpackJsonp([3],{

/***/ "3Tgm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_vue__ = __webpack_require__("MeKn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d41108a_hasScoped_false_preserveWhitespace_false_buble_transforms_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_vue__ = __webpack_require__("U4rz");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__src_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d41108a_hasScoped_false_preserveWhitespace_false_buble_transforms_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "DvDD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = undefined;

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("NYxO");

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

// Recursive find files in {srcDir}/store
var files = __webpack_require__("kRpp");
var filenames = files.keys();

// Store
var storeData = {};

// Check if store/index.js exists
var indexFilename = void 0;
filenames.forEach(function (filename) {
  if (filename.indexOf('./index.') !== -1) {
    indexFilename = filename;
  }
});
if (indexFilename) {
  storeData = getModule(indexFilename);
}

// If store is not an exported method = modules store
if (typeof storeData !== 'function') {

  // Store modules
  if (!storeData.modules) {
    storeData.modules = {};
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(filenames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var filename = _step.value;

      var name = filename.replace(/^\.\//, '').replace(/\.(js|ts)$/, '');
      if (name === 'index') continue;

      var namePath = name.split(/\//);
      var _module = getModuleNamespace(storeData, namePath);

      name = namePath.pop();
      _module[name] = getModule(filename);
      _module[name].namespaced = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

// createStore
var createStore = exports.createStore = storeData instanceof Function ? storeData : function () {
  return new _vuex2.default.Store((0, _assign2.default)({
    strict: "production" !== 'production'
  }, storeData, {
    state: storeData.state instanceof Function ? storeData.state() : {}
  }));
};

// Dynamically require module
function getModule(filename) {
  var file = files(filename);
  var module = file.default || file;
  if (module.commit) {
    throw new Error('[nuxt] store/' + filename.replace('./', '') + ' should export a method which returns a Vuex instance.');
  }
  if (module.state && typeof module.state !== 'function') {
    throw new Error('[nuxt] state should be a function in store/' + filename.replace('./', ''));
  }
  return module;
}

function getModuleNamespace(storeData, namePath) {
  if (namePath.length === 1) {
    return storeData.modules;
  }
  var namespace = namePath.shift();
  storeData.modules[namespace] = storeData.modules[namespace] || {};
  storeData.modules[namespace].namespaced = true;
  storeData.modules[namespace].modules = storeData.modules[namespace].modules || {};
  return getModuleNamespace(storeData.modules[namespace], namePath);
}

/***/ }),

/***/ "EIJ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"__nuxt"}},[_c('nuxt-loading',{ref:"loading"}),(_vm.layout)?_c(_vm.nuxt.err ? 'nuxt' : _vm.layout,{tag:"component"}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "H2hn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "H3HM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_c('div',{staticClass:"error"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"90","height":"90","fill":"#DBE1EC","viewBox":"0 0 48 48"}},[_c('path',{attrs:{"d":"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.message))]),(_vm.statusCode === 404)?_c('p',{staticClass:"description"},[_c('nuxt-link',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo"},[_c('a',{attrs:{"href":"https://nuxtjs.org","target":"_blank","rel":"noopener"}},[_vm._v("Nuxt.js")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "KG7a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_error_vue__ = __webpack_require__("ifcl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_error_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_815e78f6_hasScoped_false_preserveWhitespace_false_buble_transforms_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_error_vue__ = __webpack_require__("H3HM");
function injectStyle (ssrContext) {
  __webpack_require__("Wsxq")
}
var normalizeComponent = __webpack_require__("K60R")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_error_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__src_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_815e78f6_hasScoped_false_preserveWhitespace_false_buble_transforms_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_error_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "MeKn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

var _nuxtChild = __webpack_require__("TW7E");

var _nuxtChild2 = _interopRequireDefault(_nuxtChild);

var _nuxtError = __webpack_require__("KG7a");

var _nuxtError2 = _interopRequireDefault(_nuxtError);

var _utils = __webpack_require__("cQUq");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

exports.default = {
  name: 'nuxt',
  props: ['nuxtChildKey'],
  beforeCreate: function beforeCreate() {
    _vue2.default.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },

  computed: {
    routerViewKey: function routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || (0, _utils.compile)(this.$route.matched[0].path)(this.$route.params);
      }
      return this.$route.fullPath.split('#')[0];
    }
  },
  components: {
    NuxtChild: _nuxtChild2.default,
    NuxtError: _nuxtError2.default
  }
};

/***/ }),

/***/ "TW7E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];

exports.default = {
  name: 'nuxt-child',
  functional: true,
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data;

    data.nuxtChild = true;
    var _parent = parent;
    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [h('router-view', data)]);
  }
};

/***/ }),

/***/ "TlW6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__("exGp");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var loadAsyncComponents = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(to, from, next) {
    var fromPath, toPath, statusCode;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Check if route hash changed
            fromPath = from.fullPath.split('#')[0];
            toPath = to.fullPath.split('#')[0];

            this._hashChanged = fromPath === toPath;

            if (!this._hashChanged && this.$loading.start) {
              this.$loading.start();
            }

            _context.prev = 4;
            _context.next = 7;
            return _promise2.default.all((0, _utils.flatMapComponents)(to, function (Component, _, match, key) {
              // If component already resolved
              if (typeof Component !== 'function' || Component.options) {
                var _Component = (0, _utils.sanitizeComponent)(Component);
                match.components[key] = _Component;
                return _Component;
              }

              // Resolve component
              return Component().then(function (Component) {
                var _Component = (0, _utils.sanitizeComponent)(Component);
                match.components[key] = _Component;
                return _Component;
              });
            }));

          case 7:

            next();
            _context.next = 16;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](4);

            if (!_context.t0) _context.t0 = {};
            statusCode = _context.t0.statusCode || _context.t0.status || _context.t0.response && _context.t0.response.status || 500;

            this.error({ statusCode: statusCode, message: _context.t0.message });
            next(false);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 10]]);
  }));

  return function loadAsyncComponents(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Get matched components


var render = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(to, from, next) {
    var _this2 = this;

    var nextCalled, _next, context, Components, layout, _layout, isValid, _layout2;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!this._hashChanged) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt('return', next());

          case 2:

            // nextCalled is true when redirected
            nextCalled = false;

            _next = function _next(path) {
              if (_this2.$loading.finish) _this2.$loading.finish();
              if (nextCalled) return;
              nextCalled = true;
              next(path);
            };

            // Update context


            context = (0, _utils.getContext)({
              to: to,
              from: from,
              store: store,
              isClient: true,
              next: _next.bind(this),
              error: this.error.bind(this)
            }, app);

            this._context = context;
            this._dateLastError = this.$options._nuxt.dateErr;
            this._hadError = !!this.$options._nuxt.err;

            // Get route's matched components
            Components = (0, _utils.getMatchedComponents)(to);

            // If no Components matched, generate 404

            if (Components.length) {
              _context2.next = 23;
              break;
            }

            _context2.next = 12;
            return callMiddleware.call(this, Components, context);

          case 12:
            if (!context._redirected) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt('return');

          case 14:
            _context2.next = 16;
            return this.loadLayout(typeof _index.NuxtError.layout === 'function' ? _index.NuxtError.layout(context) : _index.NuxtError.layout);

          case 16:
            layout = _context2.sent;
            _context2.next = 19;
            return callMiddleware.call(this, Components, context, layout);

          case 19:
            if (!context._redirected) {
              _context2.next = 21;
              break;
            }

            return _context2.abrupt('return');

          case 21:

            this.error({ statusCode: 404, message: 'This page could not be found' });
            return _context2.abrupt('return', next());

          case 23:

            // Update ._data and other properties if hot reloaded
            Components.forEach(function (Component) {
              if (Component._Ctor && Component._Ctor.options) {
                Component.options.asyncData = Component._Ctor.options.asyncData;
                Component.options.fetch = Component._Ctor.options.fetch;
              }
            });

            // Apply transitions
            this.setTransitions(mapTransitions(Components, to, from));

            _context2.prev = 25;
            _context2.next = 28;
            return callMiddleware.call(this, Components, context);

          case 28:
            if (!context._redirected) {
              _context2.next = 30;
              break;
            }

            return _context2.abrupt('return');

          case 30:

            // Set layout
            _layout = Components[0].options.layout;

            if (typeof _layout === 'function') {
              _layout = _layout(context);
            }
            _context2.next = 34;
            return this.loadLayout(_layout);

          case 34:
            _layout = _context2.sent;
            _context2.next = 37;
            return callMiddleware.call(this, Components, context, _layout);

          case 37:
            if (!context._redirected) {
              _context2.next = 39;
              break;
            }

            return _context2.abrupt('return');

          case 39:

            // Call .validate()
            isValid = true;

            Components.forEach(function (Component) {
              if (!isValid) return;
              if (typeof Component.options.validate !== 'function') return;
              isValid = Component.options.validate({
                params: to.params || {},
                query: to.query || {},
                store: context.store
              });
            });
            // ...If .validate() returned false

            if (isValid) {
              _context2.next = 44;
              break;
            }

            this.error({ statusCode: 404, message: 'This page could not be found' });
            return _context2.abrupt('return', next());

          case 44:
            _context2.next = 46;
            return _promise2.default.all(Components.map(function (Component, i) {
              // Check if only children route changed
              Component._path = (0, _utils.compile)(to.matched[i].path)(to.params);
              if (!_this2._hadError && _this2._isMounted && Component._path === _lastPaths[i] && i + 1 !== Components.length) {
                return _promise2.default.resolve();
              }

              var promises = [];

              var hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === 'function';
              var hasFetch = !!Component.options.fetch;
              var loadingIncrease = hasAsyncData && hasFetch ? 30 : 45;

              // Call asyncData(context)
              if (hasAsyncData) {
                var promise = (0, _utils.promisify)(Component.options.asyncData, context).then(function (asyncDataResult) {
                  (0, _utils.applyAsyncData)(Component, asyncDataResult);
                  if (_this2.$loading.increase) _this2.$loading.increase(loadingIncrease);
                });
                promises.push(promise);
              }

              // Call fetch(context)
              if (hasFetch) {
                var p = Component.options.fetch(context);
                if (!p || !(p instanceof _promise2.default) && typeof p.then !== 'function') {
                  p = _promise2.default.resolve(p);
                }
                p.then(function (fetchResult) {
                  if (_this2.$loading.increase) _this2.$loading.increase(loadingIncrease);
                });
                promises.push(p);
              }

              return _promise2.default.all(promises);
            }));

          case 46:

            _lastPaths = Components.map(function (Component, i) {
              return (0, _utils.compile)(to.matched[i].path)(to.params);
            });

            if (this.$loading.finish) this.$loading.finish();

            // If not redirected
            if (!nextCalled) next();

            _context2.next = 62;
            break;

          case 51:
            _context2.prev = 51;
            _context2.t0 = _context2['catch'](25);

            if (!_context2.t0) _context2.t0 = {};
            _lastPaths = [];
            _context2.t0.statusCode = _context2.t0.statusCode || _context2.t0.status || _context2.t0.response && _context2.t0.response.status || 500;

            // Load error layout
            _layout2 = _index.NuxtError.layout;

            if (typeof _layout2 === 'function') {
              _layout2 = _layout2(context);
            }
            _context2.next = 60;
            return this.loadLayout(_layout2);

          case 60:

            this.error(_context2.t0);
            next(false);

          case 62:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[25, 51]]);
  }));

  return function render(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Fix components format in matched, it's due to code-splitting of vue-router


var mountApp = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(__app) {
    var Components, _app, layout, mountApp;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Set global variables
            app = __app.app;
            router = __app.router;
            store = __app.store;

            // Resolve route components
            _context3.next = 5;
            return _promise2.default.all(resolveComponents(router));

          case 5:
            Components = _context3.sent;


            // Create Vue instance
            _app = new _vue2.default(app);

            // Load layout

            layout = NUXT.layout || 'default';
            _context3.next = 10;
            return _app.loadLayout(layout);

          case 10:
            _app.setLayout(layout);

            // Mounts Vue app to DOM element

            mountApp = function mountApp() {
              _app.$mount('#__nuxt');

              // Listen for first Vue update
              _vue2.default.nextTick(function () {
                // Call window.onNuxtReady callbacks
                nuxtReady(_app);
              });
            };

            // Enable transitions


            _app.setTransitions = _app.$options._nuxt.setTransitions.bind(_app);
            if (Components.length) {
              _app.setTransitions(mapTransitions(Components, router.currentRoute));
              _lastPaths = router.currentRoute.matched.map(function (route) {
                return (0, _utils.compile)(route.path)(router.currentRoute.params);
              });
              _lastComponentsFiles = Components.map(function (Component) {
                return Component.options.__file;
              });
            }

            // Initialize error handler
            _app.error = _app.$options._nuxt.error.bind(_app);
            _app.$loading = {}; // To avoid error while _app.$nuxt does not exist
            if (NUXT.error) _app.error(NUXT.error);

            // Add router hooks
            router.beforeEach(loadAsyncComponents.bind(_app));
            router.beforeEach(render.bind(_app));
            router.afterEach(normalizeComponents);
            router.afterEach(fixPrepatch.bind(_app));

            // If page already is server rendered

            if (!NUXT.serverRendered) {
              _context3.next = 24;
              break;
            }

            mountApp();
            return _context3.abrupt('return');

          case 24:

            render.call(_app, router.currentRoute, router.currentRoute, function (path) {
              if (!path) {
                normalizeComponents(router.currentRoute, router.currentRoute);
                fixPrepatch.call(_app, router.currentRoute, router.currentRoute);
                mountApp();
                return;
              }

              // Push the path and then mount app
              var mounted = false;
              router.afterEach(function () {
                if (mounted) return;
                mounted = true;
                mountApp();
              });
              router.push(path);
            });

          case 25:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function mountApp(_x7) {
    return _ref3.apply(this, arguments);
  };
}();

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

var _middleware = __webpack_require__("sZ5p");

var _middleware2 = _interopRequireDefault(_middleware);

var _index = __webpack_require__("pQbd");

var _utils = __webpack_require__("cQUq");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noopData = function noopData() {
  return {};
};
var noopFetch = function noopFetch() {};

// Global shared references
var _lastPaths = [];
var _lastComponentsFiles = [];
var app = void 0;
var router = void 0;
var store = void 0;

// Try to rehydrate SSR data from window
var NUXT = window.__NUXT__ || {};
NUXT.components = window.__COMPONENTS__ || null;

// Create and mount App
(0, _index.createApp)().then(mountApp).catch(function (err) {
  console.error('[nuxt] Error while initializing app', err);
});

function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }
  var option = component.options[key];
  if (typeof option === 'function') {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return option.apply(undefined, args);
  }
  return option;
}

function mapTransitions(Components, to, from) {
  var componentTransitions = function componentTransitions(component) {
    var transition = componentOption(component, 'transition', to, from) || {};
    return typeof transition === 'string' ? { name: transition } : transition;
  };

  return Components.map(function (Component) {
    // Clone original object to prevent overrides
    var transitions = (0, _assign2.default)({}, componentTransitions(Component));

    // Combine transitions & prefer `leave` transitions of 'from' route
    if (from && from.matched.length && from.matched[0].components.default) {
      var from_transitions = componentTransitions(from.matched[0].components.default);
      (0, _keys2.default)(from_transitions).filter(function (key) {
        return from_transitions[key] && key.toLowerCase().indexOf('leave') !== -1;
      }).forEach(function (key) {
        transitions[key] = from_transitions[key];
      });
    }

    return transitions;
  });
}

function resolveComponents(router) {
  var path = (0, _utils.getLocation)(router.options.base, router.options.mode);

  return (0, _utils.flatMapComponents)(router.match(path), function (Component, _, match, key, index) {
    // If component already resolved
    if (typeof Component !== 'function' || Component.options) {
      var _Component = (0, _utils.sanitizeComponent)(Component);
      match.components[key] = _Component;
      return _Component;
    }

    // Resolve component
    return Component().then(function (Component) {
      var _Component = (0, _utils.sanitizeComponent)(Component);
      if (NUXT.serverRendered) {
        (0, _utils.applyAsyncData)(_Component, NUXT.data[index]);
        if (NUXT.components) {
          Component.options.components = (0, _assign2.default)(_Component.options.components, NUXT.components[index]);
        }
        _Component._Ctor = _Component;
      }
      match.components[key] = _Component;
      return _Component;
    });
  });
}

function callMiddleware(Components, context, layout) {
  var _this = this;

  var midd = [];
  var unknownMiddleware = false;

  // If layout is undefined, only call global middleware
  if (typeof layout !== 'undefined') {
    midd = []; // Exclude global middleware if layout defined (already called before)
    if (layout.middleware) {
      midd = midd.concat(layout.middleware);
    }
    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }

  midd = midd.map(function (name) {
    if (typeof _middleware2.default[name] !== 'function') {
      unknownMiddleware = true;
      _this.error({ statusCode: 500, message: 'Unknown middleware ' + name });
    }
    return _middleware2.default[name];
  });

  if (unknownMiddleware) return;
  return (0, _utils.middlewareSeries)(midd, context);
}

function normalizeComponents(to, ___) {
  (0, _utils.flatMapComponents)(to, function (Component, _, match, key) {
    if ((typeof Component === 'undefined' ? 'undefined' : (0, _typeof3.default)(Component)) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = _vue2.default.extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }
    return Component;
  });
}

// When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves
function fixPrepatch(to, ___) {
  var _this3 = this;

  if (this._hashChanged) return;

  _vue2.default.nextTick(function () {
    var instances = (0, _utils.getMatchedComponentsInstances)(to);

    _lastComponentsFiles = instances.map(function (instance, i) {
      if (!instance) return '';

      if (_lastPaths[i] === instance.constructor._path && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);
        for (var key in newData) {
          _vue2.default.set(instance.$data, key, newData[key]);
        }
      }

      return instance.constructor.options.__file;
    });

    // Hide error component if no error
    if (_this3._hadError && _this3._dateLastError === _this3.$options._nuxt.dateErr) {
      _this3.error();
    }

    // Set layout
    var layout = _this3.$options._nuxt.err ? _index.NuxtError.layout : to.matched[0].components.default.options.layout;
    if (typeof layout === 'function') {
      layout = layout(_this3._context);
    }
    _this3.setLayout(layout);
  });
}

function nuxtReady(app) {
  window._nuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(app);
    }
  });
  // Special JSDOM
  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(app);
  }
  // Add router hooks
  router.afterEach(function (to, from) {
    app.$nuxt.$emit('routeChanged', to, from);
  });
}

/***/ }),

/***/ "U4rz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.nuxt.err)?_c('nuxt-error',{attrs:{"error":_vm.nuxt.err}}):_c('nuxt-child',{key:_vm.routerViewKey})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Wsxq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XOIQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("ZgRW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_34e6d6af_hasScoped_false_preserveWhitespace_false_buble_transforms_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("EIJ3");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__src_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_34e6d6af_hasScoped_false_preserveWhitespace_false_buble_transforms_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ZgRW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

var _nuxtLoading = __webpack_require__("eLME");

var _nuxtLoading2 = _interopRequireDefault(_nuxtLoading);

__webpack_require__("mUq5");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layouts = {

  "_default": function _default() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "oNmD")).then(function (m) {
      return m.default || m;
    });
  }

}; //
//
//
//
//
//
//

var resolvedLayouts = {};

exports.default = {
  head: { "title": "Nuxtjs SSR Firebase Functions", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "description", "name": "description", "content": "Nuxt.js project" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "/favicon.ico" }, { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Roboto" }, { "rel": "stylesheet", "href": "https://cdn.muicss.com/mui-0.9.35/css/mui.min.css" }], "style": [], "script": [] },
  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },
  beforeCreate: function beforeCreate() {
    _vue2.default.util.defineReactive(this, 'nuxt', this.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    _vue2.default.prototype.$nuxt = this;
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error;
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    },
    setLayout: function setLayout(layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      this.layout = resolvedLayouts[_layout];
      return this.layout;
    },
    loadLayout: function loadLayout(layout) {
      var _this = this;

      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default';
      var _layout = '_' + layout;
      if (resolvedLayouts[_layout]) {
        return _promise2.default.resolve(resolvedLayouts[_layout]);
      }
      return layouts[_layout]().then(function (Component) {
        resolvedLayouts[_layout] = Component;
        delete layouts[_layout];
        return resolvedLayouts[_layout];
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
      });
    }
  },
  components: {
    NuxtLoading: _nuxtLoading2.default
  }
};

/***/ }),

/***/ "ZpVC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nuxt-progress",style:({
  'width': _vm.percent+'%',
  'height': _vm.height,
  'background-color': _vm.canSuccess? _vm.color : _vm.failedColor,
  'opacity': _vm.show ? 1 : 0
})})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "aJ4z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
};

/***/ }),

/***/ "bu8e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: '#3B8070',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        _vue2.default.nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),

/***/ "cQUq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("mvHQ");

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

exports.applyAsyncData = applyAsyncData;
exports.sanitizeComponent = sanitizeComponent;
exports.getMatchedComponents = getMatchedComponents;
exports.getMatchedComponentsInstances = getMatchedComponentsInstances;
exports.flatMapComponents = flatMapComponents;
exports.getContext = getContext;
exports.middlewareSeries = middlewareSeries;
exports.promisify = promisify;
exports.getLocation = getLocation;
exports.urlJoin = urlJoin;
exports.compile = compile;

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noopData = function noopData() {
  return {};
};

// window.onNuxtReady(() => console.log('Ready')) hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (true) {
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

function applyAsyncData(Component, asyncData) {
  var ComponentData = Component.options.data || noopData;
  // Prevent calling this method for each request on SSR context
  if (!asyncData && Component.options.hasAsyncData) {
    return;
  }
  Component.options.hasAsyncData = true;
  Component.options.data = function () {
    var data = ComponentData.call(this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return (0, _extends3.default)({}, data, asyncData);
  };
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}

function sanitizeComponent(Component) {
  if (!Component.options) {
    Component = _vue2.default.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // For debugging purpose
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}

function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return (0, _keys2.default)(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return (0, _keys2.default)(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return (0, _keys2.default)(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context, app) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isStatic: false,
    isDev: false,
    isHMR: context.isHMR || false,
    app: app,
    store: context.store,
    route: context.to ? context.to : context.route,
    payload: context.payload,
    error: context.error,
    base: '/',
    env: {}
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    ctx._redirected = true; // Used in middleware
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : (0, _typeof3.default)(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  if (context.from) ctx.from = context.from;
  if (ctx.isServer && context.beforeRenderFns) {
    ctx.beforeNuxtRender = function (fn) {
      return context.beforeRenderFns.push(fn);
    };
  }
  if (ctx.isClient && window.__NUXT__) {
    ctx.serverState = window.__NUXT__;
  }
  return ctx;
}

function middlewareSeries(promises, context) {
  if (!promises.length || context._redirected) {
    return _promise2.default.resolve();
  }
  return promisify(promises[0], context).then(function () {
    return middlewareSeries(promises.slice(1), context);
  });
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new _promise2.default(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!promise || !(promise instanceof _promise2.default) && typeof promise.then !== 'function') {
    promise = _promise2.default.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base, mode) {
  var path = window.location.pathname;
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if ((0, _typeof3.default)(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + (0, _stringify2.default)(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + (0, _stringify2.default)(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/***/ }),

/***/ "dY5n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
** From https://github.com/egoist/vue-no-ssr
** With the authorization of @egoist
*/
exports.default = {
  name: 'no-ssr',
  props: ['placeholder'],
  data: function data() {
    return {
      canRender: false
    };
  },
  mounted: function mounted() {
    this.canRender = true;
  },
  render: function render(h) {
    if (this.canRender) {
      if (false) {
        throw new Error('<no-ssr> You cannot use multiple child components');
      }
      return this.$slots.default[0];
    }
    return h('div', { class: { 'no-ssr-placeholder': true } }, this.placeholder);
  }
};

/***/ }),

/***/ "eLME":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_loading_vue__ = __webpack_require__("bu8e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b6f6190e_hasScoped_false_preserveWhitespace_false_buble_transforms_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_loading_vue__ = __webpack_require__("ZpVC");
function injectStyle (ssrContext) {
  __webpack_require__("H2hn")
}
var normalizeComponent = __webpack_require__("K60R")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_plugins_transform_runtime_polyfill_true_regenerator_true_babelrc_false_cacheDirectory_false_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_loading_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__src_node_modules_nuxt_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b6f6190e_hasScoped_false_preserveWhitespace_false_buble_transforms_src_node_modules_nuxt_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ifcl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
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
  name: 'nuxt-error',
  props: ['error'],
  head: function head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }]
    };
  },


  computed: {
    statusCode: function statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message: function message() {
      return this.error.message || 'Error';
    }
  }
};

/***/ }),

/***/ "kRpp":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "vdRI"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "kRpp";

/***/ }),

/***/ "l1B7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__("/ocq");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var _0b2fde7f = function _0b2fde7f() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "7u5f")).then(function (m) {
    return m.default || m;
  });
};

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition;
  } else {
    var position = {};
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 };
    } else if (to.matched.some(function (r) {
      return r.components.default.options.scrollToTop;
    })) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 };
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash };
    }
    return position;
  }
};

function createRouter() {
  return new _vueRouter2.default({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior: scrollBehavior,
    routes: [{
      path: "/landing:pages?/:landing_page_id?/retailers/:retailer_id?",
      component: _0b2fde7f,
      name: "landingpages-landing_page_id-retailers-retailer_id"
    }],
    fallback: false
  });
}

/***/ }),

/***/ "mUq5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p5rU":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "p5rU";

/***/ }),

/***/ "pQbd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NuxtError = exports.createApp = undefined;

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty = __webpack_require__("C4MV");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__("exGp");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var createApp = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ssrContext) {
    var router, store, app, next, route, path, ctx, inject;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            router = (0, _router.createRouter)();
            store = (0, _store.createStore)();

            // Create Root instance
            // here we inject the router and store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = (0, _extends3.default)({
              router: router,
              store: store,
              _nuxt: {
                defaultTransition: defaultTransition,
                transitions: [defaultTransition],
                setTransitions: function setTransitions(transitions) {
                  if (!Array.isArray(transitions)) {
                    transitions = [transitions];
                  }
                  transitions = transitions.map(function (transition) {
                    if (!transition) {
                      transition = defaultTransition;
                    } else if (typeof transition === 'string') {
                      transition = (0, _assign2.default)({}, defaultTransition, { name: transition });
                    } else {
                      transition = (0, _assign2.default)({}, defaultTransition, transition);
                    }
                    return transition;
                  });
                  this.$options._nuxt.transitions = transitions;
                  return transitions;
                },

                err: null,
                dateErr: null,
                error: function error(err) {
                  err = err || null;
                  if (typeof err === 'string') {
                    err = { statusCode: 500, message: err };
                  }
                  var _nuxt = this._nuxt || this.$options._nuxt;
                  _nuxt.dateErr = Date.now();
                  _nuxt.err = err;
                  return err;
                }
              }
            }, _App2.default);

            // Make app available in store

            store.app = app;

            next = ssrContext ? ssrContext.next : function (location) {
              return app.router.push(location);
            };
            route = void 0;

            if (ssrContext) {
              route = router.resolve(ssrContext.url).route;
            } else {
              path = (0, _utils.getLocation)(router.options.base);

              route = router.resolve(path).route;
            }
            ctx = (0, _utils.getContext)({
              isServer: !!ssrContext,
              isClient: !ssrContext,
              route: route,
              next: next,
              error: app._nuxt.error.bind(app),
              store: store,
              req: ssrContext ? ssrContext.req : undefined,
              res: ssrContext ? ssrContext.res : undefined,
              beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined
            }, app);

            inject = function inject(key, value) {
              if (!key) throw new Error('inject(key, value) has no key provided');
              if (!value) throw new Error('inject(key, value) has no value provided');
              key = '$' + key;
              // Add into app
              app[key] = value;
              // Add into vm
              _vue2.default.use(function () {
                var installKey = '__nuxt_' + key + '_installed__';
                if (_vue2.default[installKey]) return;
                _vue2.default[installKey] = true;
                if (!_vue2.default.prototype.hasOwnProperty(key)) {
                  (0, _defineProperty2.default)(_vue2.default.prototype, key, {
                    get: function get() {
                      return this.$root.$options[key];
                    }
                  });
                }
              });

              // Add into store
              store[key] = app[key];
            };

            if (true) {
              // Replace store state before plugins execution
              if (window.__NUXT__ && window.__NUXT__.state) {
                store.replaceState(window.__NUXT__.state);
              }
            }

            if (false) {
              _context.next = 14;
              break;
            }

            if (!(typeof _plugin2.default === 'function')) {
              _context.next = 14;
              break;
            }

            _context.next = 14;
            return (0, _plugin2.default)(ctx, inject);

          case 14:
            if (true) {
              _context.next = 17;
              break;
            }

            _context.next = 17;
            return new _promise2.default(function (resolve, reject) {
              router.push(ssrContext.url, resolve, reject);
            });

          case 17:
            return _context.abrupt('return', {
              app: app,
              router: router,
              store: store
            });

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createApp(_x) {
    return _ref.apply(this, arguments);
  };
}();

__webpack_require__("MU8w");

var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

var _vueMeta = __webpack_require__("p3jY");

var _vueMeta2 = _interopRequireDefault(_vueMeta);

var _router = __webpack_require__("l1B7");

var _noSsr = __webpack_require__("dY5n");

var _noSsr2 = _interopRequireDefault(_noSsr);

var _nuxtChild = __webpack_require__("TW7E");

var _nuxtChild2 = _interopRequireDefault(_nuxtChild);

var _nuxtLink = __webpack_require__("aJ4z");

var _nuxtLink2 = _interopRequireDefault(_nuxtLink);

var _nuxtError = __webpack_require__("KG7a");

var _nuxtError2 = _interopRequireDefault(_nuxtError);

var _nuxt2 = __webpack_require__("3Tgm");

var _nuxt3 = _interopRequireDefault(_nuxt2);

var _App = __webpack_require__("XOIQ");

var _App2 = _interopRequireDefault(_App);

var _utils = __webpack_require__("cQUq");

var _store = __webpack_require__("DvDD");

var _plugin = __webpack_require__("rigv");

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component: <no-ssr>
_vue2.default.component(_noSsr2.default.name, _noSsr2.default);

// Component: <nuxt-child>
_vue2.default.component(_nuxtChild2.default.name, _nuxtChild2.default);

// Component: <nuxt-link>
_vue2.default.component(_nuxtLink2.default.name, _nuxtLink2.default);

// Component: <nuxt>`
_vue2.default.component(_nuxt3.default.name, _nuxt3.default);

// vue-meta configuration
_vue2.default.use(_vueMeta2.default, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

var defaultTransition = { "name": "page", "mode": "out-in", "appear": false, "appearClass": "appear", "appearActiveClass": "appear-active", "appearToClass": "appear-to" };

exports.createApp = createApp;
exports.NuxtError = _nuxtError2.default;

/***/ }),

/***/ "rigv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__("/5sW");

var _vue2 = _interopRequireDefault(_vue);

var _lpWidgets = __webpack_require__("ZphY");

var _lpWidgets2 = _interopRequireDefault(_lpWidgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_lpWidgets2.default);

/***/ }),

/***/ "sZ5p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var files = __webpack_require__("p5rU");
var filenames = files.keys();

function getModule(filename) {
  var file = files(filename);
  return file.default ? file.default : file;
}
var middleware = {};

// Generate the middleware
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = (0, _getIterator3.default)(filenames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var filename = _step.value;

    var name = filename.replace(/^\.\//, '').replace(/\.(js|ts)$/, '');
    middleware[name] = getModule(filename);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

exports.default = middleware;

/***/ }),

/***/ "vdRI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })

},["TlW6"]);
//# sourceMappingURL=app.071e724b6bd68569c66c.js.map