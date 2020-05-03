/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/views/admin/edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/post-edit-meta.vue":
/*!*******************************************!*\
  !*** ./app/components/post-edit-meta.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _post_edit_meta_vue_vue_type_template_id_9f7af9f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-edit-meta.vue?vue&type=template&id=9f7af9f0& */ \"./app/components/post-edit-meta.vue?vue&type=template&id=9f7af9f0&\");\n/* harmony import */ var _post_edit_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-edit-meta.vue?vue&type=script&lang=js& */ \"./app/components/post-edit-meta.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _post_edit_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _post_edit_meta_vue_vue_type_template_id_9f7af9f0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _post_edit_meta_vue_vue_type_template_id_9f7af9f0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/components/post-edit-meta.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/components/post-edit-meta.vue?");

/***/ }),

/***/ "./app/components/post-edit-meta.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./app/components/post-edit-meta.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./post-edit-meta.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/post-edit-meta.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/components/post-edit-meta.vue?");

/***/ }),

/***/ "./app/components/post-edit-meta.vue?vue&type=template&id=9f7af9f0&":
/*!**************************************************************************!*\
  !*** ./app/components/post-edit-meta.vue?vue&type=template&id=9f7af9f0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_meta_vue_vue_type_template_id_9f7af9f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./post-edit-meta.vue?vue&type=template&id=9f7af9f0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/post-edit-meta.vue?vue&type=template&id=9f7af9f0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_meta_vue_vue_type_template_id_9f7af9f0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_meta_vue_vue_type_template_id_9f7af9f0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/components/post-edit-meta.vue?");

/***/ }),

/***/ "./app/components/post-edit-settings.vue":
/*!***********************************************!*\
  !*** ./app/components/post-edit-settings.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _post_edit_settings_vue_vue_type_template_id_57a37ca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-edit-settings.vue?vue&type=template&id=57a37ca6& */ \"./app/components/post-edit-settings.vue?vue&type=template&id=57a37ca6&\");\n/* harmony import */ var _post_edit_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-edit-settings.vue?vue&type=script&lang=js& */ \"./app/components/post-edit-settings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _post_edit_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _post_edit_settings_vue_vue_type_template_id_57a37ca6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _post_edit_settings_vue_vue_type_template_id_57a37ca6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/components/post-edit-settings.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/components/post-edit-settings.vue?");

/***/ }),

/***/ "./app/components/post-edit-settings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./app/components/post-edit-settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./post-edit-settings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/post-edit-settings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/components/post-edit-settings.vue?");

/***/ }),

/***/ "./app/components/post-edit-settings.vue?vue&type=template&id=57a37ca6&":
/*!******************************************************************************!*\
  !*** ./app/components/post-edit-settings.vue?vue&type=template&id=57a37ca6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_settings_vue_vue_type_template_id_57a37ca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./post-edit-settings.vue?vue&type=template&id=57a37ca6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/post-edit-settings.vue?vue&type=template&id=57a37ca6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_settings_vue_vue_type_template_id_57a37ca6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_edit_settings_vue_vue_type_template_id_57a37ca6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/components/post-edit-settings.vue?");

/***/ }),

/***/ "./app/views/admin/edit.js":
/*!*********************************!*\
  !*** ./app/views/admin/edit.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_post_edit_settings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/post-edit-settings.vue */ \"./app/components/post-edit-settings.vue\");\n/* harmony import */ var _components_post_edit_meta_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/post-edit-meta.vue */ \"./app/components/post-edit-meta.vue\");\n\n\nwindow.Docs = {\n  el: '#app',\n  name: 'DocsEdit',\n\n  data() {\n    return _.merge({\n      sections: [],\n      active: this.$session.get('docs.edit.tab.active', 0)\n    }, window.$data);\n  },\n\n  created() {\n    const sections = [];\n\n    _.forIn(this.$options.components, (component, name) => {\n      if (component.section) {\n        sections.push(_.extend({\n          name,\n          priority: 0\n        }, component.section));\n      }\n    });\n\n    this.$set(this, 'sections', _.sortBy(sections, 'priority'));\n  },\n\n  mounted() {\n    const vm = this;\n    this.tab = UIkit.tab('#area-tab', {\n      connect: '#area-content'\n    });\n    UIkit.util.on(this.tab.connects, 'show', (e, tab) => {\n      if (tab != vm.tab) return;\n\n      for (const index in tab.toggles) {\n        if (tab.toggles[index].classList.contains('uk-active')) {\n          vm.$session.set('docs.edit.tab.active', index);\n          vm.active = index;\n          break;\n        }\n      }\n    });\n    this.tab.show(this.active);\n  },\n\n  methods: {\n    save() {\n      this.$http.post('admin/docs/api/save', {\n        data: this.query,\n        id: this.query.id\n      }).then(res => {\n        const {\n          query\n        } = res.data;\n\n        if (!this.query.id) {\n          window.history.replaceState({}, '', this.$url.route('admin/docs/post/edit', {\n            id: query.id\n          }));\n        }\n\n        this.$set(this, 'query', query);\n        this.$notify('Saved');\n      }).catch(err => {\n        this.$notify(err.bodyText, 'danger');\n      });\n    }\n\n  },\n  components: {\n    Settings: _components_post_edit_settings_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Meta: _components_post_edit_meta_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n};\nVue.ready(window.Docs);\n\n//# sourceURL=webpack:///./app/views/admin/edit.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/post-edit-meta.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/components/post-edit-meta.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['query', 'data'],\n  section: {\n    label: 'Meta',\n    priority: 100\n  }\n});\n\n//# sourceURL=webpack:///./app/components/post-edit-meta.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/post-edit-settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/components/post-edit-settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['query', 'data'],\n  section: {\n    label: 'Settings',\n    priority: 0\n  }\n});\n\n//# sourceURL=webpack:///./app/components/post-edit-settings.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/post-edit-meta.vue?vue&type=template&id=9f7af9f0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/post-edit-meta.vue?vue&type=template&id=9f7af9f0& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"v-meta-tag\", {\n        attrs: { source: _vm.query },\n        on: {\n          \"update:source\": function($event) {\n            _vm.query = $event\n          }\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/components/post-edit-meta.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/post-edit-settings.vue?vue&type=template&id=57a37ca6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/post-edit-settings.vue?vue&type=template&id=57a37ca6& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"uk-grid\", attrs: { \"uk-grid\": \"\" } }, [\n    _c(\"div\", { staticClass: \"uk-width-expand\" }, [\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Title\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"uk-form-controls\" },\n          [\n            _c(\"v-input\", {\n              attrs: {\n                view: \"class: uk-input uk-width-expand\",\n                type: \"text\",\n                name: \"title\",\n                rules: { required: true },\n                message: _vm._f(\"trans\")(\"You have to enter a title\")\n              },\n              model: {\n                value: _vm.query.title,\n                callback: function($$v) {\n                  _vm.$set(_vm.query, \"title\", $$v)\n                },\n                expression: \"query.title\"\n              }\n            })\n          ],\n          1\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Content\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"uk-form-controls\" },\n          [\n            _c(\"v-editor\", {\n              attrs: { options: { markdown: true, height: 300 } },\n              model: {\n                value: _vm.query.content,\n                callback: function($$v) {\n                  _vm.$set(_vm.query, \"content\", $$v)\n                },\n                expression: \"query.content\"\n              }\n            })\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"uk-width-medium\" }, [\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Slug\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.query.slug,\n                expression: \"query.slug\"\n              }\n            ],\n            staticClass: \"uk-input uk-width-expand\",\n            attrs: { type: \"text\" },\n            domProps: { value: _vm.query.slug },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(_vm.query, \"slug\", $event.target.value)\n              }\n            }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Status\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\n            \"select\",\n            {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model.number\",\n                  value: _vm.query.status,\n                  expression: \"query.status\",\n                  modifiers: { number: true }\n                }\n              ],\n              staticClass: \"uk-select uk-width-expand\",\n              on: {\n                change: function($event) {\n                  var $$selectedVal = Array.prototype.filter\n                    .call($event.target.options, function(o) {\n                      return o.selected\n                    })\n                    .map(function(o) {\n                      var val = \"_value\" in o ? o._value : o.value\n                      return _vm._n(val)\n                    })\n                  _vm.$set(\n                    _vm.query,\n                    \"status\",\n                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n                  )\n                }\n              }\n            },\n            _vm._l(_vm.data.statuses, function(status, id) {\n              return _c(\"option\", { key: id, domProps: { value: id } }, [\n                _vm._v(_vm._s(status))\n              ])\n            }),\n            0\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Category\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\n            \"select\",\n            {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model.number\",\n                  value: _vm.query.category_id,\n                  expression: \"query.category_id\",\n                  modifiers: { number: true }\n                }\n              ],\n              staticClass: \"uk-select uk-width-expand\",\n              on: {\n                change: function($event) {\n                  var $$selectedVal = Array.prototype.filter\n                    .call($event.target.options, function(o) {\n                      return o.selected\n                    })\n                    .map(function(o) {\n                      var val = \"_value\" in o ? o._value : o.value\n                      return _vm._n(val)\n                    })\n                  _vm.$set(\n                    _vm.query,\n                    \"category_id\",\n                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n                  )\n                }\n              }\n            },\n            _vm._l(_vm.data.categories, function(category, id) {\n              return _c(\n                \"option\",\n                { key: id, domProps: { value: category.id } },\n                [_vm._v(_vm._s(category.title))]\n              )\n            }),\n            0\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Date\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"uk-form-controls\" },\n          [\n            _c(\"input-date\", {\n              model: {\n                value: _vm.query.date,\n                callback: function($$v) {\n                  _vm.$set(_vm.query, \"date\", $$v)\n                },\n                expression: \"query.date\"\n              }\n            })\n          ],\n          1\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/components/post-edit-settings.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });