(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scroll-number-card"] = factory();
	else
		root["scroll-number-card"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberWrapper.vue?vue&type=template&id=1370f7b4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "scroll-number-wrapper"
  }, [_c('span', [_c('scroll-number-card-group', {
    attrs: {
      "num": _vm.computed[0]
    }
  }), +_vm.minDigitsRight > 0 || _vm.computed[1] ? _c('span', [_c('span', {
    staticClass: "dot"
  }, [_vm._v(".")]), _c('scroll-number-card-group', {
    attrs: {
      "num": _vm.computed[2]
    }
  })], 1) : _vm._e()], 1), _c('span', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.computed[3] || '') + _vm._s(_vm.text))])]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberCardGroup.vue?vue&type=template&id=254fe8c9&scoped=true&
var ScrollNumberCardGroupvue_type_template_id_254fe8c9_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "scroll-number-card-group"
  }, _vm._l(_vm.numArray, function (singleNum, index) {
    return _c('scroll-number-card', {
      key: index,
      attrs: {
        "num": singleNum
      }
    });
  }), 1);
};
var ScrollNumberCardGroupvue_type_template_id_254fe8c9_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberCard.vue?vue&type=template&id=22dafd4c&scoped=true&
var ScrollNumberCardvue_type_template_id_22dafd4c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "scroll-number-card"
  }, [_c('div', {
    staticClass: "scroll-numbers",
    style: {
      bottom: -40 * +_vm.num + 'px'
    }
  }, _vm._l([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], function (innerNum) {
    return _c('div', {
      key: innerNum,
      staticClass: "number"
    }, [_vm._v(" " + _vm._s(innerNum) + " ")]);
  }), 0)]);
};
var ScrollNumberCardvue_type_template_id_22dafd4c_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberCard.vue?vue&type=script&lang=js&
/* harmony default export */ var ScrollNumberCardvue_type_script_lang_js_ = ({
  name: "scroll-number-card",
  props: {
    num: {
      default: "0"
    }
  }
});
;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var scroll_number_card_ScrollNumberCardvue_type_script_lang_js_ = (ScrollNumberCardvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberCard.vue?vue&type=style&index=0&id=22dafd4c&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberCard.vue?vue&type=style&index=0&id=22dafd4c&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberCard.vue



;


/* normalize component */

var component = normalizeComponent(
  scroll_number_card_ScrollNumberCardvue_type_script_lang_js_,
  ScrollNumberCardvue_type_template_id_22dafd4c_scoped_true_render,
  ScrollNumberCardvue_type_template_id_22dafd4c_scoped_true_staticRenderFns,
  false,
  null,
  "22dafd4c",
  null
  
)

/* harmony default export */ var ScrollNumberCard = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberCardGroup.vue?vue&type=script&lang=js&

/* harmony default export */ var ScrollNumberCardGroupvue_type_script_lang_js_ = ({
  components: {
    ScrollNumberCard: ScrollNumberCard
  },
  name: "scroll-number-card-group",
  props: {
    num: {
      type: String,
      default: '0'
    } // 需要显示的数字
  },

  data() {
    return {
      numArray: [],
      // 分解后的数字
      index: 0,
      // 排队播放动画的当前索引
      timer: null
    };
  },
  watch: {
    num: {
      deep: true,
      handler() {
        this.handleData();
      }
    }
  },
  created() {
    this.handleData();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    } // 以防计时器还在工作，消除计时器
  },

  methods: {
    handleData() {
      if (Number.isNaN(parseInt(this.num))) {
        return;
      }
      this.numArray = new Array(this.num.length).fill("0"); // 先获取卡片数量
      this.$nextTick(() => {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.index = 0;
        this.timer = setInterval(this.timerFunc, 200);
      });
    },
    timerFunc() {
      const numArray = this.num.split("");
      if (this.index >= numArray.length) {
        clearInterval(this.timer);
        this.index = 0;
        return;
      }
      this.$set(this.numArray, this.index, numArray[this.index]);
      this.index += 1;
    }
  }
});
;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberCardGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var scroll_number_card_ScrollNumberCardGroupvue_type_script_lang_js_ = (ScrollNumberCardGroupvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberCardGroup.vue?vue&type=style&index=0&id=254fe8c9&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberCardGroup.vue?vue&type=style&index=0&id=254fe8c9&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberCardGroup.vue



;


/* normalize component */

var ScrollNumberCardGroup_component = normalizeComponent(
  scroll_number_card_ScrollNumberCardGroupvue_type_script_lang_js_,
  ScrollNumberCardGroupvue_type_template_id_254fe8c9_scoped_true_render,
  ScrollNumberCardGroupvue_type_template_id_254fe8c9_scoped_true_staticRenderFns,
  false,
  null,
  "254fe8c9",
  null
  
)

/* harmony default export */ var ScrollNumberCardGroup = (ScrollNumberCardGroup_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberWrapper.vue?vue&type=script&lang=js&

/* harmony default export */ var ScrollNumberWrappervue_type_script_lang_js_ = ({
  name: "scroll-number-wrapper",
  components: {
    ScrollNumberCardGroup: ScrollNumberCardGroup
  },
  props: {
    num: {
      default: 0 // 待处理数字(Number / String)
    },

    text: {
      type: String,
      default: "" // 后面的文字
    },

    minDigitsLeft: {
      default: 1 // 小数点前最小位数
    },

    minDigitsRight: {
      default: 0 // 小数点后最小位数
    }
  },

  data() {
    return {
      computed: []
    };
  },
  watch: {
    num: {
      deep: true,
      handler() {
        this.handleData();
      }
    }
  },
  created() {
    this.handleData();
  },
  methods: {
    handleData() {
      const splited = String(this.num).match(/^([0-9]+)(\.([0-9]+))*([^0-9.]*)$/).slice(1, 5);
      if (!splited[0]) {
        return;
      }
      const lenLeft = splited[0].length;
      if (lenLeft < this.minDigitsLeft) {
        splited[0] = new Array(this.minDigitsLeft - lenLeft).fill("0").join("") + splited[0];
      }
      const lenRight = splited[2] ? splited[2].length : 0;
      if (lenRight < this.minDigitsRight) {
        splited[2] = splited[2] ? splited[2] + new Array(this.minDigitsRight - lenRight).fill("0").join("") : new Array(this.minDigitsRight).fill("0").join("");
      }
      this.computed = splited;
    }
  }
});
;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var scroll_number_card_ScrollNumberWrappervue_type_script_lang_js_ = (ScrollNumberWrappervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./scroll-number-card/ScrollNumberWrapper.vue?vue&type=style&index=0&id=1370f7b4&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberWrapper.vue?vue&type=style&index=0&id=1370f7b4&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./scroll-number-card/ScrollNumberWrapper.vue



;


/* normalize component */

var ScrollNumberWrapper_component = normalizeComponent(
  scroll_number_card_ScrollNumberWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1370f7b4",
  null
  
)

/* harmony default export */ var ScrollNumberWrapper = (ScrollNumberWrapper_component.exports);
;// CONCATENATED MODULE: ./scroll-number-card/index.js
/*
 * @Author: lychen13
 * @Description: 组件入口
 * @FilePath: \scroll-number-card\scroll-number-card\index.js
 */

ScrollNumberWrapper.install = function (_Vue) {
  if (!_Vue) {
    return console.error("Vue对象不存在？");
  }
  _Vue.component('scroll-number-card', ScrollNumberWrapper);
};
/* harmony default export */ var scroll_number_card = (ScrollNumberWrapper);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (scroll_number_card);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=scroll-number-card.umd.js.map